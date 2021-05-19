import { connect } from 'react-redux';
import styled from 'styled-components';

import { hit, endGame, startGame } from '../actions/gameActions';

function Controls(props) {
  const { hit, endGame, inProgress, startGame } = props;

  const inGameControls = (
    <Container>
      <button onClick={hit}>Hit</button>
      <button onClick={endGame}>Stand</button>
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

const mapDispatchToProps = { hit, endGame, startGame };

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
