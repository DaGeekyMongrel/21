import { connect } from 'react-redux';

import Card from './common/Card';

function PlayerHand({ hand }) {
  return (
    <>
      <h2>Player</h2>
      <div>
        {hand && hand.map((item, key) => <Card key={key} card={item} />)}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  hand: state.player.hand,
});

export default connect(mapStateToProps)(PlayerHand);
