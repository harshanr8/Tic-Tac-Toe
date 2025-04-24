import React, { useState } from "react";
import useTictoe from "../hooks/Hooks";


function Tictac(){
  // console.log(squares);
  const{Reset,calculateWinner,handleClick,squares,getStatusmsg}=useTictoe();

  return(
    <>
    <div className="flex flex-col justify-center items-center h-screen">
      <div>Tic Tac Toe</div>
      <h1>{getStatusmsg()}</h1>

      <div className="grid grid-cols-3 w-50 h-50 mt-3">
      {squares.map((b, index)=>{
        return (<button className="border border-b-black p-2 text-center cursor-pointer hover:bg-sky-50"key={index} 
            onClick={()=>handleClick(index)} disabled={b!==null}>{b}</button>
        );
      })}

      </div>
      <div>
      <button className=" bg-red-700 rounded-2xl w-23 mt-3 transform transition hover:scale-110 " onClick={Reset}>Reset</button>
      </div>
    </div>
    </>
  )
}
export default Tictac;