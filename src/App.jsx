import Search from './components/Search'
import {useState} from "react"
import Foodlist from './components/Foodlist'
import Nav from './components/Nav'
import './App.css'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetails from './components/FoodDetails'
function App() {
  const [foodData, setFoodData]=useState([])
  const [foodId,setfoodId]=useState("656329")

  return (
    <div className="App">   
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container>
      <InnerContainer>
       <Foodlist setfoodId={setfoodId} foodId={foodId} foodData={foodData}/>
      </InnerContainer>
      <InnerContainer>
       <FoodDetails foodId={foodId}/>
      </InnerContainer>
    </Container>
    </div>
  )
}

export default App
