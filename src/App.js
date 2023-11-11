import { useState } from "react"

export default function Screen(){
  return (
    <div className="screen">
     <App />
    </div>
  )
}

function App(){
  const [items, setItems] = useState([])
  const [currentItem,setCurrentItem] = useState('')

  function handleKey(event) {
    if (event.key !== "Enter") {
      return
    }

    setItems([...items, {content: currentItem, done: false}]);
    setCurrentItem('')
  }
    
  return (
    <div className="container">
      <p className="title">YAPILACAKLAR</p>
      <input
        className="searchBar"
        placeholder="Entry ekle..."
        value={currentItem}
        onChange={e => setCurrentItem(e.target.value)}
        onKeyDown={handleKey}
      >
        
      </input>
      <li className="list">
        {items.map(({content, done}) => <Item value={content} done={done} />)}
      </li>
    </div>
  )
}

function Item({value, done}){
  const [isComplete, setIsComplated] = useState(done)

  function handleClick(){
    setIsComplated(!isComplete)
  }

  return (
    <ul className={isComplete ? "item_checked" : "item"}>
      <input checked={isComplete} type="checkbox" className="checkBox" onChange={handleClick}></input>
      {value}
    </ul>
  )
}
