import React from 'react';

const Close = props => (
  <svg
    viewBox="0 0 10 10"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    {...props}
  >
    <use
      xlinkHref="#path0_close"
      transform="translate(.3 .29)"
      fill="currentColor"
    />
    <defs>
      <path
        id="path0_close"
        fillRule="evenodd"
        d="M4.707 6.121L8 9.414 9.414 8 6.121 4.707l3.293-3.293L8 0 4.707 3.293 1.414 0 0 1.414l3.293 3.293L0 8l1.414 1.414 3.293-3.293z"
      />
    </defs>
  </svg>
);

export default Close;
