import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Main, Section, BtnHotspot } from './styled';

// Importando as actions de selectElement redux;
import {
  selectedElement,
  deselectElement,
} from '../../store/modules/selectedElement/actions';

// Importando as actions de CreateHotspot redux;
import { createHotspot } from '../../store/modules/createHotspot/actions';

// Components
import HotSpots from '../../components/HotSpots';
import Header from '../../components/Header';
import Table from '../../components/Table';

export default function HomePage() {
  const dispatch = useDispatch();

  const { hasSelected, targetId, clickX, clickY } = useSelector(
    (state) => state.selectedElement
  );

  // Selecionar elemento que contenha a className .ItemHotSpot
  const handleClickSelectedElement = (e) => {
    const hasClass = e.target.classList.contains('ItemHotSpot');

    // Se contem a className e nao esta selecionado -> Selecionar
    if (hasClass && e.target.id !== targetId) {
      dispatch(
        selectedElement({
          hasSelected: true,
          targetId: e.target.id,
          clickX: (e.pageX * 100) / window.innerWidth,
          clickY: (e.pageY * 100) / window.innerHeight,
        })
      );
    }

    // Se já contem seleção e é o item selecionado -> Remover seleção
    if (hasSelected && e.target.id === targetId) {
      dispatch(deselectElement());
    }
  };

  // Criar Hotspot enviando a posição do mouse quando selecionou.
  // Remover seleção do item após criar
  const handleClickCreateHotspot = () => {
    dispatch(createHotspot({ clickX, clickY }));
    dispatch(deselectElement());
  };

  return (
    <Main onClick={handleClickSelectedElement} targetId={targetId}>
      <HotSpots />
      <Header />
      <Section>
        <BtnHotspot
          disabled={!hasSelected}
          onClick={handleClickCreateHotspot}
          type="button"
        >
          Create Hotspot
        </BtnHotspot>
        <Table />
      </Section>
    </Main>
  );
}
