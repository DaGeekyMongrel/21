import React from 'react';
import styled from 'styled-components';

function Card({ card }) {
  const { default: img } = require(`../assets/${card.suit}/${card.rank}.svg`);

  return <Image src={img} alt="" />;
}

const Image = styled.img`
  width: 100px;
  transition: all 0.2s;
`;

export default Card;
