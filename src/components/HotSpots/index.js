import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HotSpot, RoundedButton, Modal } from './styled';
import * as actionsHotspot from '../../store/modules/createHotspot/actions';

export default function HotSpotsComponent() {
  const AllHotSpots = useSelector((state) => state.createHotspot.hotspots);
  const dispatch = useDispatch();
  const [newTitle, setTitle] = useState('');
  const [newText, setText] = useState('');

  // Abrir Hotspot ou fechar
  // Enviar texto dos inputs
  // Limpar texto dos inputs ao fechar
  const handleClickButtonRounded = (e, index) => {
    e.preventDefault();
    dispatch(actionsHotspot.showHotspot(index));
    dispatch(actionsHotspot.editHotspot({ index, newTitle, newText }));
    setTitle('');
    setText('');
  };

  return (
    <>
      {AllHotSpots &&
        AllHotSpots.map((item, index) => (
          <HotSpot
            modal={item.modal}
            left={item.clickX > 12 ? `${item.clickX}%` : '160px'}
            top={`${item.clickY}%`}
            key={index}
          >
            <RoundedButton
              onClick={(e) => handleClickButtonRounded(e, index)}
            />

            <Modal
              onSubmit={(e) => handleClickButtonRounded(e, index)}
              modal={item.modal}
            >
              <label htmlFor={`hotSpotTitle${index}`}>
                Title Hotspot
                <input
                  placeholder={item.title}
                  value={newTitle}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  id={`hotSpotTitle${index}`}
                />
              </label>

              <label htmlFor={`hotSpotText${index}`}>
                Text Hotspot
                <textarea
                  placeholder={item.text}
                  value={newText}
                  onChange={(e) => setText(e.target.value)}
                  name="text"
                  id={`hotSpotText${index}`}
                  cols="20"
                  rows="4"
                />
              </label>
            </Modal>
          </HotSpot>
        ))}
    </>
  );
}
