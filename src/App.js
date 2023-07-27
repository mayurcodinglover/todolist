import React from "react";
import { useState } from "react";
import List from './list'



function App() {
const [inputText,setInputText]=useState("");
const [listItem,setListItem]=useState([]);

  function handleClick()
  {
    return setListItem((preList)=>{
      setInputText("");
      return [...preList,inputText]
      
    })
  }
  console.log(listItem);
  function handleChange(e)
  {
  const value=e.target.value;
    setInputText(value);
  }
  function deleteOne(id)
  {
    setListItem((prevItem)=>{
      return prevItem.filter((arr,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className="container">
      <input typer="text" value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>Add</button>
      {listItem.map((item,index)=>{
        return <List value={item}
        deleteItem={deleteOne}
        id={index}
        key={index}
        />
      })}
    </div>
  );
}

export default App;
