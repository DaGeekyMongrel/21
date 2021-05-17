import { connect } from 'react-redux';
import styled from 'styled-components';

function Messages({ msg }) {
  return <Container>{msg}</Container>;
}

const Container = styled.div`
  font-size: 20px;
  padding: 20px;
`;

const mapStateToProps = (state) => ({ msg: state.msg });

export default connect(mapStateToProps)(Messages);
