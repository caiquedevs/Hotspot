import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 30px;

  #${(props) => props.targetId} {
    background-color: ${colors.bkRed};
    border: 1px solid ${colors.borderRed};
  }
`;

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 200px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const BtnHotspot = styled.button`
  border: none;
  padding: 10px 50px;
  background-color: ${colors.blue};
  border-radius: 50px;

  font-size: 25px;
  font-weight: normal;
  line-height: 29px;
  color: ${colors.white};

  display: none;

  :disabled {
    background-color: ${colors.silver};
  }

  @media screen and (min-width: 1080px) {
    display: flex;
  }
`;
