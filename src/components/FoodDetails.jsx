import { useEffect , useState } from "react"
import styles from "./fooddetails.module.css"
export default function FoodDetails({foodId}){
    URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY="9f3839ccefd34411a65b51046e5b3be7"
    const API_KEY2="33fafd6963d4458eaaadae9c4820b4e6"
    const [food,setFoodData]=useState({})
    useEffect(() => {
        async function fetchfood() {
           const res= await fetch(`${URL}?apiKey=${API_KEY}`)
           const data = await res.json()
           console.log(data)
           setFoodData(data)
    }
        fetchfood()
    }, [foodId])

    return <div id="fooddetails">
       <div className={styles.recipeCard} >
            <h1 className={styles.recipeName}>
                {food.title}
            </h1>
            
            <img className={styles.recipeImage} src={food.image} alt="" />
            <div className={styles.recipeDetails}>
                <span>
                    <strong>⌚{food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                    <strong>{food.servings} Servings</strong>
                </span>
                <span>
                    {food.vegetarian ? <strong>🥗 Vegetarian</strong> : <strong>🍖 Non-Vegetarian</strong>}
                </span>
                <span>
                    {food.vegan ? <strong>🥗 Vegan</strong> : <strong>🐮🐄 Non-Vegan</strong>}
                </span>
            </div>
                <div>
                    <span><strong>{food.pricePerServing / 100} </strong><strong> 💲 Per Serving</strong></span>
                </div>
                <h2>Instructions</h2>
            <div className={styles.recipeInstructions}>
                <ol>
                {food.analyzedInstructions && food.analyzedInstructions.length > 0 && 
                    food.analyzedInstructions[0].steps.map((step) => (
                        <li key={step.number}>{step.step}</li>
                    ))
                }
                </ol>
            </div>
        
        </div>
        
    </div>
}

