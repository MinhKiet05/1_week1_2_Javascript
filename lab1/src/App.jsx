import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard/ProductCard.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcrJXU7zI6Dv1c-iq3gHMYsqbr8qZ9Y1nDJUlP3BHPbgyH9Au3vr2ukUf90bBgfHtq_VHM-ttXhWubn89KnuJJMBKp_qEByEjLK1_dcm_XB3VgqrxuGHblVvkY" name="Sample Product" price={100000} />
    </>
  )
}

export default App
