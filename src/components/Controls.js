import { connect } from 'react-redux';
import styled from 'styled-components';
import { dealCards, shuffleCards } from '../actions/cardsActions';

function Controls({ shuffleCards, dealCards }) {
  const startGame = () => {
    dealCards(2);
  };

  const draw = () => {
    dealCards(1);
  };

  return (
    <Container>
      <button onClick={shuffleCards}>Shuffle</button>
      <button onClick={startGame}>Start game</button>
      <button onClick={draw}>Draw</button>
    </Container>
  );
}

const Container = styled.div``;

export default connect(null, { shuffleCards, dealCards })(Controls);
