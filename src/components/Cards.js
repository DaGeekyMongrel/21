import { connect } from 'react-redux';

import { shuffleCards } from '../actions/cardsActions';
import Card from './Card';

function Cards({ deck, shuffleCards }) {
  const shuffleHandler = () => {
    shuffleCards();
  };

  return (
    <div>
      <button onClick={shuffleHandler}>Shuffle</button>
      {deck && deck.map((item, key) => <Card key={key} card={item} />)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  deck: state.cards.deck,
});

export default connect(mapStateToProps, { shuffleCards })(Cards);
