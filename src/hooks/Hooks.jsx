import React, { useState } from 'react'

const useTictoe=()=>{
    const[squares,setSquares]=useState(Array(9).fill(null));
    const[isX,setisX]=useState(true);
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const calculateWinner=(currentsquares)=>{
        for(let i=0;i<winningCombinations.length;i++){
            const[a,b,c]=winningCombinations[i];
            if(currentsquares[a] && currentsquares[a]===currentsquares[b] && currentsquares[a]===currentsquares[c]){
                return currentsquares[a];
            }
        }
        return null; 
    };
    const Reset=()=>{
        setSquares(Array(9).fill(null));
        setisX(true);
    };
    const handleClick = (index)=>{
        const winner=calculateWinner(squares);
        console.log(winner);
        if(winner|| squares[index]) return 
        
        const newSquares=[...squares];
        newSquares[index]=isX?"X":"O";
        setSquares(newSquares);
        setisX(!isX);

    };
    const getStatusmsg=()=>{
        const winner=calculateWinner(squares);
        if(winner) return `Player ${winner} wins`;
        if(!squares.includes(null)) return 'it is a draw';
        return `Player${isX ? "X" : "O"}turn`;
    }
    return{Reset,calculateWinner,handleClick,squares,getStatusmsg};
}

export default useTictoe;