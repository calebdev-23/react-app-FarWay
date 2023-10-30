import React, {useState} from 'react';
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Logo from "./components/Logo";
import Form from "./components/Form";

function App() {
    const [items, setItems] = useState([])
    function handleAddItems(item){
        setItems((prevItems)=>[...prevItems, item])
    }
    function handleDeleteItems(id){
        setItems((prevItems)=>
            prevItems.filter((item)=>item.id !== id)
        )
    }
    function handleUpdateItem(id){
        setItems((prevItems)=>prevItems.map((item)=>item.id === id ?
            {...item, packed: !item.packed} : item
        ))
    }
    function handleClearList(){
        const confirmed = window.confirm('Are you sure you want to delete all items ?')
       if (confirmed) setItems([])
    }
  return (
      <div className={"app"}>
          <Logo/>
          <Form onAddItems={handleAddItems}/>
          <PackingList
              items={items}
              onDeleteItem={handleDeleteItems}
              onUpdateItem={handleUpdateItem}
              onClearItems={handleClearList}/>
          <Stats items={items}/>
      </div>
  );
}
export default App;
