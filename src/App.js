import { useEffect, useState } from "react";


function App(){
const [todos , setTodos] = useState([])
const [text , setText] = useState("")
  return(
    <div className="App">
      <h3>TodoList</h3>
      <div className="from_list">
        <div className="add_date">
          <input value={text} onChange={(e)=> setText(e.target.value)} placeholder="Новая задача..."/>
          <button>Добавить</button>
        </div>
        <div>
          <h1>СПИСОК ЗАДАЧ</h1>
          <ui>
            {todos.map((todo))=>{
              <li key="1">
                {todo}
              </li>
            }}
          </ui>

        </div>
      </div>
    </div>
  )
}


export default App;