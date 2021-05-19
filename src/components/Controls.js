import { connect } from 'react-redux';
import styled from 'styled-components';

import { hit, newGame, stand } from '../actions/gameActions';

function Controls(props) {
  const { hit, inProgress, newGame, stand } = props;

  const inGameControls = (
    <Container>
      <button onClick={hit}>Hit</button>
      <button onClick={stand}>Stand</button>
    </Container>
  );

  const idleControls = (
    <Container>
      <button onClick={newGame}>New game</button>
    </Container>
  );

  return inProgress ? inGameControls : idleControls;
}

const Container = styled.div``;

const mapStateToProps = (state) => ({
  inProgress: state.game.inProgress,
});

const mapDispatchToProps = { hit, newGame, stand };

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
