import { connect } from 'react-redux';

import Card from './common/Card';

function HouseHand({ hand, inProgress }) {
  const allCards = (
    <div>{hand && hand.map((item, key) => <Card key={key} card={item} />)}</div>
  );

  const firstCardOnly = <div>{hand && <Card key={0} card={hand[0]} />}</div>;

  return (
    <>
      <h2>House</h2>
      {inProgress ? firstCardOnly : allCards}
    </>
  );
}

const mapStateToProps = (state) => ({
  hand: state.houseHand,
  inProgress: state.inProgress,
});

export default connect(mapStateToProps)(HouseHand);
