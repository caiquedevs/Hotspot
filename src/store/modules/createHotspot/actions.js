import * as types from '../types';

export function createHotspot(payload) {
  return {
    type: types.CREATE_HOTSPOT,
    payload,
  };
}

export function editHotspot(payload) {
  return {
    type: types.EDIT_HOTSPOT,
    payload,
  };
}

export function deleteHotspot(payload) {
  return {
    type: types.DELETE_HOTSPOT,
    payload,
  };
}

export function showHotspot(payload) {
  return {
    type: types.SHOW_HOTSPOT,
    payload,
  };
}
