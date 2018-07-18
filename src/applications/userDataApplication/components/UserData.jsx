import React, { Fragment } from 'react';
import Login from './Login';
import { observer } from 'mobx-react';

export default observer(props => (
  <div className="user-data">
    {props.userId ? (
      <span>user is logged in with id #${props.userId}</span>
    ) : (
      <Fragment>
        <span>user isn't logged in</span>
        <br/>
        <br/>
        <Login login={props.api.login} />
      </Fragment>
    )}
  </div>
))
