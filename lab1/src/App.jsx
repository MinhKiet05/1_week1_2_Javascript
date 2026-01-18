import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: "flex", gap: "16px" }}>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
      </div>
    </>
  )
}

export default App
