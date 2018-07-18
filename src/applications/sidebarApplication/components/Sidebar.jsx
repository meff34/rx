import React, { Fragment } from 'react';
import TradingSignals from '../SmartComponents/TradingSignals';

export default props => (
  <div>


    {props.userId ? (
      <Fragment>
        <h2>this is sidebar for user#{props.userId}</h2>
        <h2>Signals:</h2>
        <TradingSignals />
      </Fragment>
    ) : (
      <Fragment>
        <h2>you must be logged in</h2>
        <h3>signals is not available for guests</h3>
      </Fragment>
    )}
  </div>
)
