import Cell from "./Cell";

function Card({card}) {
  console.log('Card', card);
  return (
    <div>
      {card.map((column, index) => {
        return (
          <div key={index} className='column'>
            {column.map((cell, index) => <Cell key={index} number={cell} />)}
          </div>
        )
      })}
    </div>
  );
}

export default Card;
