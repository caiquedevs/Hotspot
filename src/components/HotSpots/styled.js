import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const HotSpot = styled.div`
  width: ${(props) => (props.modal ? '300px' : 'auto')};
  height: auto;

  display: none;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: calc(${(props) => props.top} - 10px);
  left: calc(${(props) => props.left});
  margin-left: ${(props) => (props.modal ? '-150px' : '-10px')};
  z-index: ${(props) => (props.modal ? '2' : '1')};

  :after {
    content: '';
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${colors.white};
    display: ${(props) => (props.modal ? 'block' : 'none')};
  }

  @media screen and (min-width: 1080px) {
    display: flex;
  }
`;

export const RoundedButton = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.white};
  border-radius: 50%;
  background-color: red;

  :active {
    filter: blur(1px);
  }

  :after {
    content: '';
    width: 26px;
    display: block;
    position: relative;
    border-radius: 50%;
    z-index: -1;
    height: 26px;
    top: -5px;
    left: calc(50% - 13px);
    background-image: radial-gradient(red, #ff4d4d, #ffffff00);
  }
`;

export const Modal = styled.form`
  width: auto;
  height: auto;
  padding: 15px;
  margin-top: 25px;

  display: ${(props) => (props.modal ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;

  background-color: ${colors.white};
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));

  label {
    font-size: 14px;
    color: ${colors.txtSilver};

    input {
      width: 100%;
      height: 40px;
      padding: 0 15px;
      margin: 7px 0;

      background: #eeeeee;
      border: none;
      border-radius: 5px;
    }

    textarea {
      width: 100%;
      min-height: 80px;
      padding: 15px;
      margin-top: 7px;

      resize: vertical;
      background: #eeeeee;
      border: none;
      border-radius: 5px;
    }
  }
  :after {
    content: '';
    width: 0;
    height: 0;

    position: absolute;
    top: -20px;
    left: calc(50% - 20px);
    transform: rotate(180deg);

    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid ${colors.white};
    filter: drop-shadow(0px 9px 15px rgba(0, 0, 0, 0.2));
  }
`;
