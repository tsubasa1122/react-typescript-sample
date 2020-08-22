import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const todos = [{ id: 't1', text: 'TypeScriptコースの完了' }];
const App: React.FC = () => {
  const addTodo = (text: string) => {
    console.log(text);
  };
  return <div className="App">
    <NewTodo addTodo={addTodo} />
    <TodoList items={todos} />
  </div>;
}

export default App;
