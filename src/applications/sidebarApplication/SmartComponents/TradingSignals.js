import TradingSignals from '../components/TradingSignals';
import { Connector } from 'mobx-pack';
import tradingSignalsService from '../Services/TradingSignalsService';
import TradingSignalsStore from '../Stores/TradingSignalsStore';

export default Connector(TradingSignals, {
  store: () => new TradingSignalsStore(),
  helper: () => ({
    signals: tradingSignalsService.signals,
  }),
});
