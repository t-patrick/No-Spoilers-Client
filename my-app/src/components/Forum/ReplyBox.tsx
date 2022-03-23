import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import React from 'react';
import { ReplyProps } from '../../proptypes';

function ReplyBox({ reply }: ReplyProps) {
  return (
    <Accordion>
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{reply.authorName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{reply.body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ReplyBox;
