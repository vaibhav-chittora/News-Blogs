import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"


function App() {
  const [categories, setcategories] = useState("general")
  return (
    <div>
      <Navbar setcategories={setcategories}/>
      <NewsBoard categories={categories}/>
    </div>
  )
}

export default App