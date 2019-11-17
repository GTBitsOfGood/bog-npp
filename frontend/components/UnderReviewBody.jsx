import React from 'react';
import LandingBodyMessage from './LandingBodyMessage';
import LandingImage from './LandingImage';

const UnderViewBody = () => (
  <>
    <LandingBodyMessage width={750}>
      Congratulations! After careful considerations, we decide that... We enjoyed the meeting
      with you and believe that our missions align with each other. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Vel interdum facilisi risus donec egestas nisi malesuada eget.
      Vitae adipiscing sem fermentum leo sollicitudin. Mollis leo nisl id ac lacus vestibulum amet,
      feugiat ut. Sed leo id semper est in iaculis.
    </LandingBodyMessage>
    <LandingImage src="/static/review.svg" alt="Application submitted" />
  </>
);

export default UnderViewBody;
