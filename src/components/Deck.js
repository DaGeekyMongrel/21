import { connect } from 'react-redux';

import Card from './common/Card';

function Deck({ deck }) {
  return (
    <div>
      {deck &&
        deck.map((item, key) => <Card key={key} card={item} size="sm" />)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  deck: state.cards.deck,
});

export default connect(mapStateToProps)(Deck);
