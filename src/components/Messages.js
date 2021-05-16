import { connect } from 'react-redux';

function Messages() {
  return <Container>{messages}</Container>;
}

const Container = styled.div``;

export default connect()(Messages);
