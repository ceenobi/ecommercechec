import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect, useRef, Suspense, lazy } from 'react'
import { Apple, Footer, ProductDetail, Bag, Checkout, Error, Samsung, Nav, Smartphones, Scrollbutton} from './components/index'
import {commerce} from './lib/Commerce'
import Spinner from './components/others/Spinner'

const Home = lazy(() => import('./components/Home/Home'))

function App() {
  const [navBackground, setNavBackground] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [apple, setApple] = useState([])
  const [beats, setBeats] = useState([])
  const [samsung, setSamsung] = useState([])
  const [products, setProducts] = useState([])
  const [bag, setBag] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('') 

const navRef = useRef()
navRef.current = navBackground

const fetchApple = async () => {
  const { data } = await commerce.products.list({ query: 'apple' })
  setIsLoading(false)
  setApple(data)
}
 const fetchBeats = async () => {
   const { data } = await commerce.products.list({ query: 'beats' })
   setIsLoading(false)
   setBeats(data)
 }

 const fetchSamsung = async () => {
   const { data } = await commerce.products.list({ query: 'galaxy' })
   setIsLoading(false)
   setSamsung(data)
 } 

 const fetchProducts = async () => {
   const { data } = await commerce.products.list({ category_slug: ['smartphones']})
   setIsLoading(false)
   setProducts(data)
 }
const fetchBag = async () => {
  setBag(await commerce.cart.retrieve())
}
console.log(bag)

const handleAddToBag = async (productId, quantity, option = {}) => {
  const item = await commerce.cart.add(productId, quantity, {...option,})
  setBag(item.cart)
}
const handleUpdateBagQty = async (productId, quantity) => {
  const item = await commerce.cart.update(productId, { quantity })
  setBag(item.cart)
}

const handleRemoveFromBag = async (productId) => {
  const item = await commerce.cart.remove(productId)
  setBag(item.cart)
}
const handleEmptyBag = async () => {
  const item = await commerce.cart.empty()
  setBag(item.cart)
}
const refreshBag = async () => {
  const newBag = await commerce.cart.refresh()
  setBag(newBag)
}
const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
    const incomingOrder = await commerce.checkout.capture(
      checkoutTokenId,
      newOrder
    )
    setOrder(incomingOrder)
    refreshBag()
  } catch (error) {
    setErrorMessage(error.data.error.message)
  }
}
useEffect(() => {
  fetchApple()
  fetchSamsung()
  fetchBeats()
  fetchBag()
  fetchProducts()
  const handleScroll = () => {
    const show = window.scrollY > 50
    if (navRef.current !== show) {
      setNavBackground(show)
    }
  }
  document.addEventListener('scroll', handleScroll)
  return () => {
    document.removeEventListener('scroll', handleScroll)
  }
}, [])
  
  
  
  return (
    <Router>
     <Suspense fallback={<Spinner/>}>
      <Nav navBackground={navBackground} BagItems={bag.total_items}
          totalCost={
            (bag.subtotal && bag.subtotal.formatted_with_symbol) || '00.00'
          }/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route
            path='/apple'
            element={<Apple apple={apple} beats={beats} isLoading={isLoading} />}/>
            <Route
            path='/samsung'
            element={<Samsung samsung={samsung} isLoading={isLoading} />}/>
          <Route
            path='/bag'
            element={<Bag bag={bag} handleUpdateBagQty={handleUpdateBagQty} handleRemoveFromBag={handleRemoveFromBag}
            handleEmptyBag={handleEmptyBag} isLoading={isLoading}/>}/>
          <Route path='/shop/smartphones/' element={ <Smartphones products={products} isLoading={isLoading} />}/>
          <Route path='/details/:id' element={<ProductDetail onAddToBag={handleAddToBag} isLoading={isLoading}/>}/>
          <Route path='/checkout' element={<Checkout bag={bag} order={order} onCaptureCheckout={handleCaptureCheckout}
           error={errorMessage}/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
          <Scrollbutton />
        <Footer />
        </Suspense>       
    </Router>
  )
}

export default App;