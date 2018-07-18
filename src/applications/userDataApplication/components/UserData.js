import React from 'react';

export default props => (
  <div className="user-data">
    {props.userId ? (
      <span>user is logged in with id #${UserData}</span>
    ) : (
      <span>user isn't logged in</span>
    )}
  </div>
)
