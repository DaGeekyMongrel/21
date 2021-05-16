import { connect } from 'react-redux';
import styled from 'styled-components';

import { dealCard, endGame, resetGame, startGame } from '../actions';

function Controls({ dealCard, endGame, inProgress, resetGame, startGame }) {
  const hit = () => {
    dealCard('player');
  };

  const inGameControls = (
    <Container>
      <button onClick={hit}>Hit</button>
      <button onClick={endGame}>Stand</button>
      <button onClick={resetGame}>Reset</button>
    </Container>
  );

  const idleControls = (
    <Container>
      <button onClick={startGame}>New game</button>
    </Container>
  );

  return inProgress ? inGameControls : idleControls;
}

const Container = styled.div``;

export default connect((state) => ({ inProgress: state.inProgress }), {
  dealCard,
  endGame,
  resetGame,
  startGame,
})(Controls);
