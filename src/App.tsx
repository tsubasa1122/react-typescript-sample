import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const todos = [{ id: 't1', text: 'TypeScriptコースの完了' }];
const App: React.FC = () => {
  return <div className="App">
    <NewTodo />
    <TodoList items={todos} />
  </div>;
}

export default App;
