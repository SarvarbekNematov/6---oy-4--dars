import { useState } from 'react'
import { productdata } from './data/products.js'
import { ProductCard } from './components/card/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>

      {productdata.map((item) => {
        <ProductCard id = {item.id} {...item}/>
      })}
    </section>
    </>
  )
}

export default App
