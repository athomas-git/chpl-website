import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  makeStyles,
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { ExportToCsv } from 'export-to-csv';

import theme from 'themes/theme';
import {
  useFetchRealWorldTestingCollection,
} from 'api/collections';
import {
  ChplLink,
  ChplPagination,
  ChplSortableHeaders,
} from 'components/util';
import {
  ChplFilterChips,
  ChplFilterPanel,
  ChplFilterSearchTerm,
  useFilterContext,
} from 'components/filter';

const csvOptions = {
  filename: 'real-world-testing',
  showLabels: true,
  headers: [
    { headerName: 'CHPL ID', objectKey: 'chplProductNumber' },
    { headerName: 'Certification Edition', objectKey: 'edition' },
    { headerName: 'Developer', objectKey: 'developer' },
    { headerName: 'Product', objectKey: 'product' },
    { headerName: 'Version', objectKey: 'version' },
    { headerName: 'Certification Status', objectKey: 'certificationStatus' },
    { headerName: 'Real World Test Plans URL', objectKey: 'rwtPlansUrl' },
    { headerName: 'Real World Test Results URL', objectKey: 'rwtResultsUrl' },
  ],
};

const useStyles = makeStyles({
  iconSpacing: {
    marginLeft: '4px',
  },
  linkWrap: {
    overflowWrap: 'anywhere',
  },
  rowHeader: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: '1fr',
    alignItems: 'start',
    padding: '32px',
    backgroundColor: '#ffffff',
  },
  rowBody: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: '1fr',
    alignItems: 'start',
    padding: '16px 32px',
    backgroundColor: '#f9f9f9',
  },
  searchContainer: {
    backgroundColor: '#c6d5e5',
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

function ChplRealWorldTestingCollectionPage() {
  const csvExporter = new ExportToCsv(csvOptions);
  const [orderBy, setOrderBy] = useState('developer');
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [sortDescending, setSortDescending] = useState(false);
  const classes = useStyles();

  const filterContext = useFilterContext();
  const { isLoading, data } = useFetchRealWorldTestingCollection({
    orderBy,
    pageNumber,
    pageSize,
    sortDescending,
    query: filterContext.queryString(),
  });

  useEffect(() => {
    if (data?.recordCount > 0 && pageNumber > 0 && data?.results?.length === 0) {
      setPageNumber(0);
    }
  }, [data?.recordCount, pageNumber, data?.results?.length]);

  /* eslint object-curly-newline: ["error", { "minProperties": 5, "consistent": true }] */
  const headers = [
    { property: 'chpl_id', text: 'CHPL ID', sortable: true },
    { text: 'Certification Edition' },
    { property: 'developer', text: 'Developer', sortable: true },
    { property: 'product', text: 'Product', sortable: true },
    { property: 'version', text: 'Version', sortable: true },
    { text: 'Certification Status' },
    { text: 'Real World Testing Plans URL' },
    { text: 'Real World Testing Results URL' },
  ];

  const handleTableSort = (event, property) => {
    if (orderBy === property) {
      setSortDescending(!sortDescending);
    } else {
      setOrderBy(property);
    }
  };

  const pageStart = (pageNumber * pageSize) + 1;
  const pageEnd = Math.min((pageNumber + 1) * pageSize, data?.recordCount);

  return (
    <>
      <div className={classes.rowHeader}>
        <Typography variant="h1">Collections Page</Typography>
      </div>
      <div className={classes.rowBody}>
        <Typography variant="h2">Real World Testing</Typography>
        <Divider />
        <Typography
          variant="body1"
        >
          This list includes all Health IT Module(s) eligible for Real World Testing, which is an annual
          {' '}
          <a href="https://www.healthit.gov/topic/certification-ehrs/conditions-maintenance-certification">Condition and Maintenance of Certification requirement</a>
          {' '}
          for health IT developers participating in the ONC Health IT Certification Program. Certified Health IT Developers with one or more Health IT Module(s) certified to any of the certification criteria outlined in &sect;170.405(a) of
          {' '}
          <a href="https://www.healthit.gov/curesrule/">ONC&apos;s Cures Act Final Rule</a>
          {' '}
          must successfully test their real world use.
        </Typography>
        <Typography
          variant="body1"
        >
          If applicable, Real World Testing plans are required to be made publicly available on the CHPL annually by December 15th. Additionally, Real World Testing results are to be made publicly available on the CHPL by March 15th of the subsequent year.
        </Typography>
        <Typography
          variant="body1"
        >
          For more information, please visit the
          {' '}
          <a href="https://www.healthit.gov/topic/certification-ehrs/real-world-testing">Real World Testing resources</a>
          . Real World Testing summary data is also available through
          {' '}
          <a href="#/resources/download">Download the CHPL</a>
          .
        </Typography>
        <Typography
          variant="body1"
        >
          Please note that by default, only listings that are active or suspended are shown in the search results.
        </Typography>
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
      { !isLoading && data?.results.length === 0
        && (
          <>No results found</>
        )}
      { !isLoading && data?.results.length > 0
       && (
       <>
         <div className={classes.tableResultsHeaderContainer}>
           <div className={`${classes.resultsContainer} ${classes.wrap}`}>
             <Typography variant="subtitle2">Search Results:</Typography>
             <Typography variant="body2">
               {`(${pageStart}-${pageEnd} of ${data?.recordCount} Results)`}
             </Typography>
           </div>
           <ButtonGroup size="small" className={classes.wrap}>
             <Button
               color="secondary"
               variant="contained"
               fullWidth
               onClick={() => csvExporter.generateCsv(data.results)}
             >
               Download Results
               <GetAppIcon className={classes.iconSpacing} />
             </Button>
           </ButtonGroup>
         </div>
         <TableContainer className={classes.tableContainer} component={Paper}>
           <Table
             stickyHeader
             aria-label="Real World Testing Collections table"
           >
             <ChplSortableHeaders
               headers={headers}
               onTableSort={handleTableSort}
               orderBy={orderBy}
               order={sortDescending ? 'desc' : 'asc'}
               stickyHeader
             />
             <TableBody>
               {data.results
                 .map((item) => (
                   <TableRow key={item.id}>
                     <TableCell className={classes.stickyColumn}><strong><a href={`#/listing/${item.id}`}>{item.chplProductNumber}</a></strong></TableCell>
                     <TableCell>
                       {item.edition}
                       {' '}
                       {item.curesUpdate ? 'Cures Update' : '' }
                     </TableCell>
                     <TableCell><a href={`#/organizations/developers/${item.developerId}`}>{item.developer}</a></TableCell>
                     <TableCell>{item.product}</TableCell>
                     <TableCell>{item.version}</TableCell>
                     <TableCell>{item.certificationStatus}</TableCell>
                     <TableCell className={classes.linkWrap}>
                       {item.rwtPlansUrl
                          && (
                            <ChplLink
                              href={item.rwtPlansUrl}
                              analytics={{ event: 'Navigation TBD', category: 'Category TBD', label: 'Label TBD' }}
                            />
                          )}
                     </TableCell>
                     <TableCell className={classes.linkWrap}>
                       {item.rwtResultsUrl
                         ? (
                           <ChplLink
                             href={item.rwtResultsUrl}
                             analytics={{ event: 'Navigation TBD', category: 'Category TBD', label: 'Label TBD' }}
                           />
                         ) : (
                           <>N/A</>
                         )}
                     </TableCell>
                   </TableRow>
                 ))}
             </TableBody>
           </Table>
         </TableContainer>
         <ChplPagination
           count={data.recordCount}
           page={pageNumber}
           rowsPerPage={pageSize}
           rowsPerPageOptions={[25, 50, 100]}
           setPage={setPageNumber}
           setRowsPerPage={setPageSize}
         />
       </>
       )}
    </>
  );
}

export default ChplRealWorldTestingCollectionPage;

ChplRealWorldTestingCollectionPage.propTypes = {
};
