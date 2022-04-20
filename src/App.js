import './App.css';
import { useState } from 'react';
import PostsComponent from './Component/PostsComponent';
function App() {

 // const [count, setCount] = useState(0);
  return (
    <div className="App">
        <h1>Testing Redux Thunks with Axios</h1>
        <PostsComponent />
    </div>
  );
}

export default App;
