import * as types from '../types';

export function selectedElement(payload) {
  return {
    type: types.SELECTED_ELEMENT,
    payload,
  };
}

export function deselectElement(payload) {
  return {
    type: types.DESELECT_ELEMENT,
    payload,
  };
}
