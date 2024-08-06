import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0)

  return <></>
}

const rootElement = document.getElementById('root');
const root  = ReactDOM.createRoot(rootElement);
root.render(<App/>);

export default App;
