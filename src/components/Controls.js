import { connect } from 'react-redux';
import styled from 'styled-components';
import { dealCards, shuffleCards } from '../actions/cardsActions';
import { startGame } from '../actions/gameActions';

function Controls({ dealCards, gameState, shuffleCards, startGame }) {
  const draw = () => {
    dealCards(1);
  };

  return (
    <Container>
      <button onClick={startGame}>New game</button>
      <button onClick={draw} disabled={gameState.started !== true}>
        Draw
      </button>
    </Container>
  );
}

const Container = styled.div``;

export default connect((state) => ({ gameState: state.gameState }), {
  dealCards,
  shuffleCards,
  startGame,
})(Controls);
