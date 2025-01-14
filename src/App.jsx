import { useSelector } from "react-redux"
import Navigation from "./components/Fragments/Navigation"
import ProductPage from "./pages/product"


function App() {
  const sidebar = useSelector(state => state.sidebar)
  const fixed = sidebar ? 'fixed' : 'static'
  const style = `${fixed}`

  return (
    <main className={style}>
      <Navigation/>
      <ProductPage/>
    </main>
  )
}

export default App
