import React from 'react';
import styled from 'styled-components';

function Card({ card, size = 'lg' }) {
  const {
    default: img,
  } = require(`../../assets/${card.suit}/${card.rank}.svg`);

  return <Image src={img} size={size} alt="" />;
}

const Image = styled.img`
  width: ${(props) => (props.size === 'sm' ? '50' : '100')}px;
  transition: all 0.2s;
`;

export default Card;
