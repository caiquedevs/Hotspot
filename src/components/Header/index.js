import React from 'react';
import { Header, Ul, Li } from './styled';
import logo from '../../assets/logo.png';

export default function HederComponent() {
  return (
    <Header>
      <figure>
        <img
          id="logoHeader"
          className="ItemHotSpot"
          src={logo}
          alt="Logo"
          width="150px"
        />
      </figure>

      <nav>
        <Ul>
          <Li id="link01" className="ItemHotSpot">
            Link fake 1
          </Li>
          <Li id="link02" className="ItemHotSpot">
            Link fake 2
          </Li>
          <Li id="link03" className="ItemHotSpot">
            Link fake 3
          </Li>
          <Li id="link04" className="ItemHotSpot">
            Link fake 4
          </Li>
        </Ul>
      </nav>
    </Header>
  );
}
