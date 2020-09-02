import { combineReducers } from 'redux';

import createHotspot from './createHotspot/reducer';
import selectedElement from './selectedElement/reducer';

export default combineReducers({
  createHotspot,
  selectedElement,
});
