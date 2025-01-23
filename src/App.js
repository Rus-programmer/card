import './App.css';
import Card from "./components/Card";
import {useState} from "react";
import {generateCard} from "./unils/card-generator";

const initialCard = generateCard();

function App() {
  const [card, setCard] = useState(initialCard);

  function handleGenerateCard() {
    setCard(generateCard());
  }

  return (
    <>
      <Card card={card}/>
      <button onClick={handleGenerateCard}>Generate</button>
    </>
  );
}

export default App;
