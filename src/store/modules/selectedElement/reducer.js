import * as types from '../types';

const initialState = {
  hasSelected: false,
  targetId: '',
  clickX: '',
  clickY: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SELECTED_ELEMENT: {
      const newState = { ...state };

      newState.hasSelected = true;
      newState.targetId = action.payload.targetId;
      newState.clickX = action.payload.clickX;
      newState.clickY = action.payload.clickY;

      return newState;
    }

    case types.DESELECT_ELEMENT: {
      const newState = { ...state };

      newState.hasSelected = false;
      newState.targetId = '';
      newState.clickX = '';
      newState.clickY = '';

      return newState;
    }

    default: {
      return state;
    }
  }
}
