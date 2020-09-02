import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Header = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  border-bottom: 1px solid ${colors.silver};

  figure {
    display: flex;
  }

  @media screen and (min-width: 1080px) {
    margin-bottom: 100px;

    figure {
      position: absolute;
      left: 30px;
    }
  }
`;

export const Ul = styled.ul`
  width: auto;
  list-style: none;
  display: none;

  @media screen and (min-width: 1080px) {
    display: flex;
  }
`;

export const Li = styled.li`
  padding: 10px 15px;
  margin: 0 17px;

  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  color: ${colors.txtSilver};

  @media screen and (min-width: 500px) and (max-width: 750px) {
    font-size: 15px;
    margin: 0;
  }
`;
