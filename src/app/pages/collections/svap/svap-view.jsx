import React, { useContext, useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { shape, string } from 'prop-types';

import { useFetchCollection } from 'api/collections';
import { useFetchSvaps } from 'api/standards';
import ChplActionButton from 'components/action-widget/action-button';
import ChplCertificationStatusLegend from 'components/certification-status/certification-status';
import ChplDownloadListings from 'components/download-listings/download-listings';
import {
  ChplLink,
  ChplPagination,
} from 'components/util';
import { ChplSortableHeaders } from 'components/util/sortable-headers';
import {
  ChplFilterChips,
  ChplFilterPanel,
  ChplFilterSearchTerm,
  useFilterContext,
} from 'components/filter';
import { getAngularService } from 'services/angular-react-helper';
import { sortCriteria } from 'services/criteria.service';
import { getStatusIcon } from 'services/listing.service';
import { useSessionStorage as useStorage } from 'services/storage.service';
import { UserContext } from 'shared/contexts';
import { palette, theme, utilStyles } from 'themes';

const useStyles = makeStyles({
  ...utilStyles,
  pageHeader: {
    padding: '32px',
    backgroundColor: '#ffffff',
  },
  pageBody: {
    display: 'grid',
    gridTemplateColumns: ' 1fr',
    gap: '16px',
    padding: '16px 32px',
    backgroundColor: '#f9f9f9',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '2fr 1fr',
    },
  },
  pageContent: {
    display: 'grid',
    gridTemplateRows: '3fr 1fr',
  },
  searchContainer: {
    backgroundColor: palette.grey,
    padding: '16px 32px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'auto 10fr auto',
    },
  },
  stickyColumn: {
    position: 'sticky',
    left: 0,
    boxShadow: 'rgba(149, 157, 165, 0.1) 0px 4px 8px',
    backgroundColor: '#ffffff',
    overflowWrap: 'anywhere',
    [theme.breakpoints.up('sm')]: {
      minWidth: '275px',
    },
  },
  tableContainer: {
    overflowWrap: 'normal',
    border: '.5px solid #c2c6ca',
    margin: '0px 32px',
    width: 'auto',
  },
  tableResultsHeaderContainer: {
    display: 'grid',
    gap: '8px',
    margin: '16px 32px',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'auto auto',
    },
  },
  resultsContainer: {
    display: 'grid',
    gap: '8px',
    justifyContent: 'start',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
  },
  wrap: {
    flexFlow: 'wrap',
  },
});

const parseSvap = ({ svaps }, data) => {
  if (svaps.length === 0) { return 'N/A'; }
  const items = svaps
    .map((item) => ({
      ...item,
      display: `${item.criterion.number}${item.criterion.title.includes('Cures Update') ? ' (Cures Update)' : ''}`,
      svaps: item.values.map((id) => data.find((s) => s.svapId === id)),
    }))
    .sort((a, b) => sortCriteria(a.criterion, b.criterion));
  return (
    <ul>
      {items.map((item) => (
        <React.Fragment key={`${item.criterion.id}`}>
          <li>{ item.display }</li>
          <ul>
            { item.svaps.map((svap) => (
              <li key={svap.svapId}>
                { svap.replaced ? 'Replaced | ' : '' }
                { svap.regulatoryTextCitation }
                :
                {' '}
                { svap.approvedStandardVersion }
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </ul>
  );
};

const parseSvapCsv = ({ svaps }, data) => {
  if (svaps.length === 0) { return 'N/A'; }
  return svaps
    .map((item) => ({
      ...item,
      display: `${item.criterion.number}${item.criterion.title.includes('Cures Update') ? ' (Cures Update)' : ''}`,
      svaps: item.values.map((id) => data.find((s) => s.svapId === id)),
    }))
    .sort((a, b) => sortCriteria(a.criterion, b.criterion))
    .map((item) => `${item.display} - ${item.svaps.map((svap) => `${svap.replaced ? 'Replaced | ' : ''}${svap.regulatoryTextCitation}: ${svap.approvedStandardVersion}`).join(';')}`)
    .join('\n');
};

function ChplSvapCollectionView(props) {
  const storageKey = 'storageKey-svapView';
  const $analytics = getAngularService('$analytics');
  const API = getAngularService('API');
  const authService = getAngularService('authService');
  const { analytics } = props;
  const { hasAnyRole } = useContext(UserContext);
  const [downloadLink, setDownloadLink] = useState('');
  const [listings, setListings] = useState([]);
  const [orderBy, setOrderBy] = useStorage(`${storageKey}-orderBy`, 'developer');
  const [pageNumber, setPageNumber] = useStorage(`${storageKey}-pageNumber`, 0);
  const [pageSize, setPageSize] = useStorage(`${storageKey}-pageSize`, 25);
  const [sortDescending, setSortDescending] = useStorage(`${storageKey}-sortDescending`, false);
  const [svaps, setSvaps] = useState([]);
  const [recordCount, setRecordCount] = useState(0);
  const classes = useStyles();
  const toggledCsvDefaults = ['svap'];

  const filterContext = useFilterContext();
  const { data, isError, isLoading } = useFetchCollection({
    orderBy,
    pageNumber,
    pageSize,
    sortDescending,
    query: `certificationCriteriaIds=52&${filterContext.queryString()}`,
  });
  const svapQuery = useFetchSvaps();

  useEffect(() => {
    if (isLoading || svaps.length === 0) { return; }
    if (isError || !data.results) {
      setListings([]);
      return;
    }
    setListings(data.results.map((listing) => ({
      ...listing,
      svapCsv: parseSvapCsv(listing, svaps),
      svapNode: parseSvap(listing, svaps),
    })));
    setRecordCount(data.recordCount);
  }, [data?.results, data?.recordCount, isError, isLoading, svaps]);

  useEffect(() => {
    if (data?.recordCount > 0 && pageNumber > 0 && data?.results?.length === 0) {
      setPageNumber(0);
    }
  }, [data?.recordCount, pageNumber, data?.results?.length]);

  useEffect(() => {
    if (svapQuery.isLoading || !svapQuery.isSuccess) {
      return;
    }
    setSvaps(svapQuery.data);
  }, [svapQuery.data, svapQuery.isLoading, svapQuery.isSuccess]);

  useEffect(() => {
    setDownloadLink(`${API}/svap/download?api_key=${authService.getApiKey()}`);
  }, [API, authService]);

  /* eslint object-curly-newline: ["error", { "minProperties": 5, "consistent": true }] */
  const headers = [
    { property: 'chpl_id', text: 'CHPL ID', sortable: true },
    { text: 'Certification Edition' },
    { property: 'developer', text: 'Developer', sortable: true },
    { property: 'product', text: 'Product', sortable: true },
    { property: 'version', text: 'Version', sortable: true },
    { text: 'Status', extra: <ChplCertificationStatusLegend /> },
    { text: 'SVAP Information' },
    { text: 'SVAP Notice' },
    { text: 'Actions', invisible: true },
  ];

  const handleTableSort = (event, property, orderDirection) => {
    $analytics.eventTrack('Sort', { category: analytics.category, label: property });
    setOrderBy(property);
    setSortDescending(orderDirection === 'desc');
  };

  const pageStart = (pageNumber * pageSize) + 1;
  const pageEnd = Math.min((pageNumber + 1) * pageSize, recordCount);

  return (
    <>
      <div className={classes.pageHeader}>
        <Typography variant="h1">SVAP Information</Typography>
      </div>
      <div className={classes.pageBody} id="main-content" tabIndex="-1">
        <div>
          <Typography variant="body1" gutterBottom>
            This list includes all 2015 Edition, including Cures Update, health IT products that have been INSERT TEXT HERE
          </Typography>
          <Typography variant="body1">
            Please note that by default, only listings that are active or suspended are shown in the search results.
          </Typography>
        </div>
        <div>
          <h2>SVAP Information</h2>
          <Typography variant="body1" gutterBottom>
            Entire collection of SVAP values that have been associated with a criterion for a certified product. Multiple rows for a single product will appear in the file for any products containing multiple SVAP values and/or SVAP values for multiple criteria. Available as a CSV file; updated nightly.
          </Typography>
          <ChplLink
            href={downloadLink}
            text="SVAP Summary"
            analytics={{ event: 'Download SVAP data', category: analytics.category }}
            external={false}
          />
        </div>
      </div>
      <div className={classes.searchContainer} component={Paper}>
        <ChplFilterSearchTerm />
        <ChplFilterPanel />
      </div>
      <div>
        <ChplFilterChips />
      </div>
      { isLoading
        && (
          <>Loading</>
        )}
      { !isLoading
        && (
          <>
            <div className={classes.tableResultsHeaderContainer}>
              <div className={`${classes.resultsContainer} ${classes.wrap}`}>
                <Typography variant="subtitle2">Search Results:</Typography>
                { listings.length === 0
                  && (
                    <Typography>
                      No results found
                    </Typography>
                  )}
                { listings.length > 0
                  && (
                    <Typography variant="body2">
                      {`(${pageStart}-${pageEnd} of ${recordCount} Results)`}
                    </Typography>
                  )}
              </div>
              { listings.length > 0 && hasAnyRole(['ROLE_ADMIN', 'ROLE_ONC'])
                && (
                  <ChplDownloadListings
                    analytics={analytics}
                    listings={listings}
                    toggled={toggledCsvDefaults}
                  />
                )}
            </div>
            { listings.length > 0
              && (
                <>
                  <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table
                      stickyHeader
                      aria-label="SVAP Collections table"
                    >
                      <ChplSortableHeaders
                        headers={headers}
                        onTableSort={handleTableSort}
                        orderBy={orderBy}
                        order={sortDescending ? 'desc' : 'asc'}
                        stickyHeader
                      />
                      <TableBody>
                        { listings
                          .map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className={classes.stickyColumn}>
                                <strong>
                                  <ChplLink
                                    href={`#/listing/${item.id}`}
                                    text={item.chplProductNumber}
                                    analytics={{ event: 'Go to Listing Details Page', category: analytics.category, label: item.chplProductNumber }}
                                    external={false}
                                    router={{ sref: 'listing', options: { id: item.id } }}
                                  />
                                </strong>
                              </TableCell>
                              <TableCell>
                                {item.edition.name}
                                {' '}
                                {item.curesUpdate ? 'Cures Update' : '' }
                              </TableCell>
                              <TableCell>
                                <ChplLink
                                  href={`#/organizations/developers/${item.developer.id}`}
                                  text={item.developer.name}
                                  analytics={{ event: 'Go to Developer Page', category: analytics.category, label: item.developer.name }}
                                  external={false}
                                  router={{ sref: 'organizations.developers.developer', options: { id: item.developer.id } }}
                                />
                              </TableCell>
                              <TableCell>{item.product.name}</TableCell>
                              <TableCell>{item.version.name}</TableCell>
                              <TableCell>{ getStatusIcon(item.certificationStatus) }</TableCell>
                              <TableCell className={classes.linkWrap}>
                                { item.svapNode }
                              </TableCell>
                              <TableCell className={classes.linkWrap}>
                                { item.svapNoticeUrl
                                  ? (
                                    <ChplLink
                                      href={item.svapNoticeUrl}
                                      analytics={{ event: 'Go to SVAP Notice URL', category: analytics.category, label: item.svapNoticeUrl }}
                                    />
                                  ) : (
                                    <>N/A</>
                                  )}
                              </TableCell>
                              <TableCell>
                                <ChplActionButton listing={item} />
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <ChplPagination
                    count={recordCount}
                    page={pageNumber}
                    rowsPerPage={pageSize}
                    rowsPerPageOptions={[25, 50, 100]}
                    setPage={setPageNumber}
                    setRowsPerPage={setPageSize}
                    analytics={analytics}
                  />
                </>
              )}
          </>
        )}
    </>
  );
}

export default ChplSvapCollectionView;

ChplSvapCollectionView.propTypes = {
  analytics: shape({
    category: string.isRequired,
  }).isRequired,
};
