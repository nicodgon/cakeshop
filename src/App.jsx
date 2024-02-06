import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Menu from './pages/Menu.jsx';
import { Route, Routes } from 'react-router-dom';
import styles from './styles/App.module.css';
import ProdDetail from './pages/ProdDetail.jsx';
import {products} from './data/products.js'
import Cart from './pages/Cart.jsx';
import Error404 from './pages/Error404.jsx';

function App() {
  return (
    <div className={styles.appContainer}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}/>
        <Route path='/menu' element={<Menu products={products}/>}/>
        <Route path='/detail/:id' element={<ProdDetail products={products}/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
