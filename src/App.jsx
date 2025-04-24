// // 
// import React from 'react'
import Tictac from './components/Tictac'
function App() {
  return <Tictac/>;
}

export default App


// import React, { useState } from 'react';

// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// export default function App() {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [isXTurn, setIsXTurn] = useState(true);
//   const winner = calculateWinner(squares);

//   const handleClick = (index) => {
//     if (squares[index] || winner) return;
//     const newSquares = [...squares];
//     newSquares[index] = isXTurn ? 'X' : 'O';
//     setSquares(newSquares);
//     setIsXTurn(!isXTurn);
//   };

//   const restartGame = () => {
//     setSquares(Array(9).fill(null));
//     setIsXTurn(true);
//   };

//   const renderSquare = (index) => (
//     <button
//       className="w-20 h-20 border text-2xl font-bold hover:bg-gray-100"
//       onClick={() => handleClick(index)}
//     >
//       {squares[index]}
//     </button>
//   );

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
//       <div className="grid grid-cols-3 gap-1">
//         {Array(9).fill(null).map((_, index) => renderSquare(index))}
//       </div>
//       <div className="mt-4 text-xl">
//         {winner
//           ? `Winner: ${winner}`
//           : squares.every(Boolean)
//           ? "It's a Draw!"
//           : `Turn: ${isXTurn ? 'X' : 'O'}`}
//       </div>
//       <button
//         onClick={restartGame}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Restart
//       </button>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   for (let combo of winningCombinations) {
//     const [a, b, c] = combo;
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
