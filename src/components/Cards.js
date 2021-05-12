import { useState, useEffect } from "react";
import Card from "./Card";
import { deck, shuffle } from "../utils/cards";

export default function Cards() {
  const [currentDeck, setCurrentDeck] = useState(null);

  const shuffleHandler = () => {
    setCurrentDeck(shuffle(deck));
  };

  useEffect(() => {
    setCurrentDeck(deck);
  }, [setCurrentDeck]);

  return (
    <div>
      <button onClick={shuffleHandler}>Shuffle</button>
      {currentDeck &&
        currentDeck.map((item, key) => <Card key={key} card={item} />)}
    </div>
  );
}
