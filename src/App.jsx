import './App.css'
import Banner from './component/Banner/Banner'
import Header from './component/Header/Header'
import OurRecipes from './component/OurRecipes/OurRecipes'

function App() {
  return (
    <>
      <h1 className='lg:p-4 text-center bg-red-400 lg:text-5xl'>React Assignment Seven</h1>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

    </>
  )
}

export default App
