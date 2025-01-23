import Cell from "./Cell";

function Card({card}) {
  return (
    <div>
      {card.map((row, index) => {
        return (
          <div key={index} className='row'>
            {row.map((cell, index) => <Cell key={index} number={cell} />)}
          </div>
        )
      })}
    </div>
  );
}

export default Card;
