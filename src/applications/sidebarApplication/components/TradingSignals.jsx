import React from 'react';

export default props => (
  <div className="user-data">
    {props.signals.map(item => (
      <div key={item.id}>
        <button onClick={() => props.api.selectPair(item.id)}>
          {item.pair}
        </button>
      </div>
    ))}
  </div>
)
