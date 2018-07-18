// @flow

import BaseStore from '../BaseService';


export default class TradingSignalsStore extends BaseStore {
  config = {
    bindAs: 'TradingSignalsStore',
  };

  api = {
    selectPair: this.selectPair,
  };


  selectPair(pair) {
    this.callApi('TRADING_SIGNALS_SERVICE', 'selectPair', pair);
  }
}
