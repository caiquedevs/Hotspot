import * as types from '../types';

const initialState = {
  hotspots: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CREATE_HOTSPOT: {
      const newState = { ...state };

      const newHotspot = {
        title: `Hotspot #${newState.hotspots.length + 1}`,
        text: 'Enter a text for this hotspot',
        modal: true,
        clickX: action.payload.clickX,
        clickY: action.payload.clickY,
      };

      newState.hotspots.push(newHotspot);
      return newState;
    }

    case types.EDIT_HOTSPOT: {
      const newState = { ...state };
      const copy = Array.from(newState.hotspots);
      const { index, newTitle, newText } = action.payload;

      if (newTitle) copy[index].title = newTitle;
      if (newText) copy[index].text = newText;
      newState.hotspots = copy;
      return newState;
    }

    case types.SHOW_HOTSPOT: {
      const newState = { ...state };
      const copy = Array.from(newState.hotspots);
      const index = action.payload;
      const { modal } = copy[index];

      copy[index].modal = !modal;
      newState.hotspots = copy;
      return newState;
    }

    case types.DELETE_HOTSPOT: {
      const newState = { ...state };
      const copy = Array.from(newState.hotspots);
      const index = action.payload;

      copy.splice(index, 1);

      newState.hotspots = copy;
      return newState;
    }

    default: {
      return state;
    }
  }
}
