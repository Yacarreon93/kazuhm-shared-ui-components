import React from 'react';

const NotificationIcon = props => (
  <svg
    viewBox="0 0 15 16"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    {...props}
  >
    <use
      xlinkHref="#path0_notification"
      transform="translate(0 .11)"
      fill="currentColor"
    />
    <defs>
      <path
        id="path0_notification"
        d="M15 9.948h-1.696v-3.35C13.304 2.944 10.714 0 7.5 0 4.286 0 1.696 2.944 1.696 6.598v3.248H0v3.045h5.09c.089 1.421 1.16 2.538 2.41 2.538 1.25 0 2.321-1.117 2.41-2.538H15V9.948zM4.375 6.598c0-1.929 1.429-3.553 3.125-3.553s3.125 1.624 3.125 3.553v3.248h-6.25V6.598z"
      />
    </defs>
  </svg>
);

export default NotificationIcon;
