import React from 'react';
import { Button } from './FeedbackOptions.styles';

function FeedbackOptions({ text, onLeaveFeedback }) {
  return (
    <Button type="button" onClick={onLeaveFeedback}>
      {text}
    </Button>
  );
}

export default FeedbackOptions;
