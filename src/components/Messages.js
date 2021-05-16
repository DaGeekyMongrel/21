import { connect } from 'react-redux';
import styled from 'styled-components';
import { HOUSE, PLAYER } from '../constants';

function Messages({ winner }) {
  let msg = '';

  switch (winner) {
    case PLAYER:
      msg = 'YOU WON!';
      break;
    case HOUSE:
      msg = 'YOU LOOSE! :(';
      break;
    case 'push':
      msg = 'PUSH. No one wins';
    default:
  }

  return <Container>{msg}</Container>;
}

const Container = styled.div`
  font-size: 20px;
  padding: 20px;
`;

const mapStateToProps = (state) => ({ winner: state.winner });

export default connect(mapStateToProps)(Messages);
