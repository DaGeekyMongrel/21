import { connect } from 'react-redux';

import Card from './common/Card';

function Hand({ hand }) {
  return (
    <div>{hand && hand.map((item, key) => <Card key={key} card={item} />)}</div>
  );
}

const mapStateToProps = (state) => ({
  hand: state.cards.hand,
});

export default connect(mapStateToProps)(Hand);
