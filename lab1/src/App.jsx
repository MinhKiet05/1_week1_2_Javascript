import { useState } from 'react'
import './App.css'
import LoginForm from './components/loginForm/LoginForm.jsx'
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ padding: "40px" }}>
      <button onClick={() => setOpen(true)}>
        Open Login
      </button>

      <LoginForm
        isOpen={open}
        type="primary"
        onClose={() => setOpen(false)}
      />
    </div>
    </>
  )
}

export default App
