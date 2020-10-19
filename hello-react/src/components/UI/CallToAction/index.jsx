import './index.scss';
import * as React from 'react';

const CallToAction = ({ href, children }) => (
  <a className="CallToAction" href={href}>
    {children}
  </a>
);

export default CallToAction;
