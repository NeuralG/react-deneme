import { useState } from "react"

export default function Screen(){
  return (
    <div className="screen">
     <App />
    </div>
  )
}

function App(){
  return <div className="container">
    <SearchBar />
    <ItemList />
  </div>
}

function SearchBar(){

  return <>
  <p className="title">YAPILACAKLAR</p>
  <input className="searchBar" placeholder="Entry ekle..."></input>
  </>
}

function ItemList(){
  return <li className="list">
    <Items />
  </li>
}

function Items(){
  let itemsArrayed = ["react bak"]
  return itemsArrayed.map(x => <Item value={x} />)
  
}

function Item({value}){
  const [isComplated,setIsComplated] = useState(false)

  function handleClick(){
    setIsComplated(!isComplated)
  }

  let item;

  if (isComplated){
    item =<ul className="item_checked"><input type="checkbox" className="checkBox" onClick={handleClick}></input>{value}</ul>
  }else{
    item =<ul className="item"><input type="checkbox" className="checkBox" onClick={handleClick}></input>{value}</ul>
  }

  return <>
    {item}
  </>
}
    


