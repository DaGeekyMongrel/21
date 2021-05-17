import { connect } from 'react-redux';
import styled from 'styled-components';

import { hit, endGame, resetGame, startGame } from '../actions';

function Controls(props) {
  const { hit, endGame, inProgress, resetGame, startGame } = props;

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

const mapStateToProps = (state) => ({
  inProgress: state.inProgress,
  player: state.player,
});

const mapDispatchToProps = { hit, endGame, resetGame, startGame };

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
