import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { bool, object } from 'prop-types';

import compareSystemMaintenance from './services/system-maintenance.service';

import { useFetchActivity } from 'api/activity';
import { getDisplayDateFormat } from 'services/date-util';

const useStyles = makeStyles({
});

function ChplSystemMaintenanceActivityDetails({ activity, last }) {
  const [details, setDetails] = useState([]);
  const classes = useStyles();

  const { data, isError, isLoading } = useFetchActivity({
    id: activity.id,
    isEnabled: true,
  });

  useEffect(() => {
    if (isLoading) { return; }
    if (isError || !data) {
      setDetails([]);
      return;
    }
    setDetails(compareSystemMaintenance(data?.originalData, data?.newData)
      .map((item) => `<li>${item}</li>`)
      .join(''));
  }, [data, isError, isLoading]);

  if (!activity) {
    return null;
  }

  return (
    <TimelineItem key={activity.id}>
      <TimelineSeparator>
        <TimelineDot />
        { !last
          && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        { `${activity.responsibleUser.fullName}: ${activity.description}` }
        { getDisplayDateFormat(activity.date) }
        { activity.id && details?.length > 0
          && (
            <Accordion variant="outlined">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="subtitle2"
                >
                  Activity Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul dangerouslySetInnerHTML={{ __html: details }} />
              </AccordionDetails>
            </Accordion>
          )}
      </TimelineContent>
    </TimelineItem>
  );
}

export default ChplSystemMaintenanceActivityDetails;

ChplSystemMaintenanceActivityDetails.propTypes = {
  activity: object.isRequired,
  last: bool.isRequired,
};
