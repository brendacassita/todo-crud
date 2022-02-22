import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';



function App() {
  return (
    <div className="App">
     <TodoList name='Coding TodoList'initialTodos={[{id:1, todo: 'learn js', completed:false}]}/>
     <TodoList name='Pre Camping TodoList'initialTodos={[{id:1, todo: 'buy wood', completed:true}]}/>
     
     {/* <TodoList name='Bad TODOList'initialTodos={[{x:1, y: 'buy wood', z:false}]}/> */}
    </div>
  );
}

export default App;
