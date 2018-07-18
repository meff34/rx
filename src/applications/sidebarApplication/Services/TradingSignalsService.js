import { observable, action } from 'mobx';
import BaseService from '../BaseService';

export class TradingSignalsService extends BaseService {
  config = {
    bindAs: 'TRADING_SIGNALS_SERVICE'
  }

  api = {
    selectPair: this.selectPair
  }

  signals = [
    {
      id: "GBPJPY",
      pair: "GBPJPY"
    },
    {
      id: "XRPUSD",
      pair: "XRPUSD"
    },
    {
      id: "NQ",
      pair: "NQ"
    },
    {
      id: "FB",
      pair: "FB"
    },
    {
      id: "FESX",
      pair: "FESX"
    },
    {
      id: "CHFJPY",
      pair: "CHFJPY"
    },
    {
      id: "ES",
      pair: "ES"
    },
    {
      id: "IBM",
      pair: "IBM"
    },
    {
      id: "USDRUB",
      pair: "USDRUB"
    },
    {
      id: "NZDCHF",
      pair: "NZDCHF"
    },
    {
      id: "MSFT",
      pair: "MSFT"
    },
    {
      id: "BCHUSD",
      pair: "BCHUSD"
    },
    {
      id: "YM",
      pair: "YM"
    },
    {
      id: "NG",
      pair: "NG"
    },
    {
      id: "NZDUSD",
      pair: "NZDUSD"
    },
    {
      id: "SBUX",
      pair: "SBUX"
    },
    {
      id: "ETCUSD",
      pair: "ETCUSD"
    },
    {
      id: "EURJPY",
      pair: "EURJPY"
    },
    {
      id: "USDNOK",
      pair: "USDNOK"
    },
    {
      id: "NZDJPY",
      pair: "NZDJPY"
    },
    {
      id: "TSLA",
      pair: "TSLA"
    },
    {
      id: "GOOGL",
      pair: "GOOGL"
    },
    {
      id: "EURAUD",
      pair: "EURAUD"
    },
    {
      id: "ZECUSD",
      pair: "ZECUSD"
    },
    {
      id: "AAPL",
      pair: "AAPL"
    },
    {
      id: "MCD",
      pair: "MCD"
    },
    {
      id: "KO",
      pair: "KO"
    },
    {
      id: "XMRUSD",
      pair: "XMRUSD"
    },
    {
      id: "EURUSD",
      pair: "EURUSD"
    },
    {
      id: "LTCBTC",
      pair: "LTCBTC"
    },
    {
      id: "EURCAD",
      pair: "EURCAD"
    },
    {
      id: "NKD",
      pair: "NKD"
    },
    {
      id: "EURNZD",
      pair: "EURNZD"
    },
    {
      id: "GBPNZD",
      pair: "GBPNZD"
    },
    {
      id: "GBPCAD",
      pair: "GBPCAD"
    },
    {
      id: "XAUUSD",
      pair: "XAUUSD"
    },
    {
      id: "AUDUSD",
      pair: "AUDUSD"
    },
    {
      id: "ETHUSD",
      pair: "ETHUSD"
    },
    {
      id: "TF",
      pair: "TF"
    },
    {
      id: "V",
      pair: "V"
    },
    {
      id: "HSI",
      pair: "HSI"
    },
    {
      id: "LTCUSD",
      pair: "LTCUSD"
    },
    {
      id: "EURGBP",
      pair: "EURGBP"
    },
    {
      id: "EURRUB",
      pair: "EURRUB"
    },
    {
      id: "BA",
      pair: "BA"
    },
    {
      id: "GBPAUD",
      pair: "GBPAUD"
    },
    {
      id: "AUDCAD",
      pair: "AUDCAD"
    },
    {
      id: "NZDCAD",
      pair: "NZDCAD"
    },
    {
      id: "GBPUSD",
      pair: "GBPUSD"
    },
    {
      id: "Bitcoin",
      pair: "Bitcoin"
    },
    {
      id: "USDCLP",
      pair: "USDCLP"
    },
    {
      id: "AUDJPY",
      pair: "AUDJPY"
    },
    {
      id: "HG",
      pair: "HG"
    },
    {
      id: "_BRN",
      pair: "_BRN"
    },
    {
      id: "GBPCHF",
      pair: "GBPCHF"
    },
    {
      id: "USDMXN",
      pair: "USDMXN"
    },
    {
      id: "FDAX",
      pair: "FDAX"
    },
    {
      id: "AUDNZD",
      pair: "AUDNZD"
    },
    {
      id: "USDJPY",
      pair: "USDJPY"
    },
    {
      id: "USDSGD",
      pair: "USDSGD"
    },
    {
      id: "FCE",
      pair: "FCE"
    },
    {
      id: "CADCHF",
      pair: "CADCHF"
    },
    {
      id: "USDTRY",
      pair: "USDTRY"
    },
    {
      id: "XAGUSD",
      pair: "XAGUSD"
    },
    {
      id: "DASHUSD",
      pair: "DASHUSD"
    },
    {
      id: "Z",
      pair: "Z"
    },
    {
      id: "PL",
      pair: "PL"
    },
    {
      id: "USDCAD",
      pair: "USDCAD"
    },
    {
      id: "EURCHF",
      pair: "EURCHF"
    },
    {
      id: "USDCHF",
      pair: "USDCHF"
    },
    {
      id: "NINTENDO_JP",
      pair: "NINTENDO_JP"
    },
    {
      id: "AUDCHF",
      pair: "AUDCHF"
    },
    {
      id: "ETHBTC",
      pair: "ETHBTC"
    },
    {
      id: "CADJPY",
      pair: "CADJPY"
    },
    {
      id: "BTGUSD",
      pair: "BTGUSD"
    }
  ];

  selectPair(pairId) {
    alert(pairId)
  }
}

export default new TradingSignalsService();
