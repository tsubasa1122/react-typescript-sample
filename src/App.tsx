import React from 'react';
import TodoList from './components/TodoList';

const todos = [{ id: 't1', text: 'TypeScriptコースの完了' }];
const App: React.FC = () => {
  return <div className="App">
    <TodoList items={todos} />
  </div>;
}

export default App;
