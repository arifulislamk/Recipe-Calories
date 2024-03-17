import './App.css'
import Banner from './component/Banner/Banner'
import Header from './component/Header/Header'
import OurRecipes from './component/OurRecipes/OurRecipes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
