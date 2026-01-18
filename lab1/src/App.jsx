import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button.jsx';
import Alert from './components/Alert/Alert.jsx';
function App() {
  const [alertType, setAlertType] = useState(null);
  return (
    <>
      <div className="app">
      <div className="btn-group">
        <Button type="success" onClick={() => setAlertType("success")}>
          Success
        </Button>

        <Button type="primary" onClick={() => setAlertType("warning")}>
          Warning
        </Button>

        <Button type="danger" onClick={() => setAlertType("error")}>
          Error
        </Button>
      </div>

      <Alert
        type={alertType}
        message={`This is a ${alertType} alert`}
      />
    </div>
    </>
  )
}

export default App
