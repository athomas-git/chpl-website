import React, { useEffect, useState } from 'react';

import ChplApiDocumentationSearchView from './api-documentation-view';

import { useFetchAcbs } from 'api/acbs';
import { useFetchCriteria } from 'api/standards';
import { FilterProvider } from 'components/filter';
import {
  certificationBodies,
  certificationCriteriaIds,
  certificationDate,
  certificationStatuses,
} from 'components/filter/filters';
import { AnalyticsContext, useAnalyticsContext } from 'shared/contexts';

const staticFilters = [
  certificationDate,
  certificationStatuses,
];

function ChplApiDocumentationSearchPage() {
  const [filters, setFilters] = useState(staticFilters);
  const { analytics } = useAnalyticsContext();
  const acbQuery = useFetchAcbs();
  const ccQuery = useFetchCriteria();

  useEffect(() => {
    if (acbQuery.isLoading || !acbQuery.isSuccess) {
      return;
    }
    const values = acbQuery.data.acbs
      .map((acb) => ({
        ...acb,
        value: acb.name,
        display: `${acb.retired ? 'Retired | ' : ''}${acb.name}`,
        default: !acb.retired || ((Date.now() - acb.retirementDate) < (1000 * 60 * 60 * 24 * 30 * 4)), // approx 4 months
      }));
    setFilters((f) => f
      .filter((filter) => filter.key !== 'certificationBodies')
      .concat({
        ...certificationBodies,
        values,
      }));
  }, [acbQuery.data, acbQuery.isLoading, acbQuery.isSuccess]);

  useEffect(() => {
    if (ccQuery.isLoading || !ccQuery.isSuccess) {
      return;
    }
    const values = ccQuery.data
      .filter((cc) => cc.certificationEditionId === 3 || cc.certificationEditionId === null)
      .map((cc) => ({
        ...cc,
        value: cc.id,
        display: `${cc.status === 'REMOVED' ? 'Removed | ' : ''}${cc.number}`,
        longDisplay: `${cc.status === 'REMOVED' ? 'Removed | ' : ''}${cc.number}: ${cc.title}`,
        default: [56, 181, 182].includes(cc.id),
      }));
    setFilters((f) => f
      .filter((filter) => filter.key !== 'certificationCriteriaIds')
      .concat({
        ...certificationCriteriaIds,
        values,
      }));
  }, [ccQuery.data, ccQuery.isLoading, ccQuery.isSuccess]);

  const data = {
    analytics: {
      ...analytics,
      category: 'CHPL Search - API Information',
    },
  };

  return (
    <AnalyticsContext.Provider value={data}>
      <FilterProvider
        analytics={data.analytics}
        filters={filters}
        storageKey="storageKey-apiDocumentationPage"
      >
        <ChplApiDocumentationSearchView />
      </FilterProvider>
    </AnalyticsContext.Provider>
  );
}

export default ChplApiDocumentationSearchPage;

ChplApiDocumentationSearchPage.propTypes = {
};
