import styles from "./search.module.css"
import {useEffect} from "react"
import {useState} from "react"
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="9f3839ccefd34411a65b51046e5b3be7"
const API_KEY2="33fafd6963d4458eaaadae9c4820b4e6"
export default function Search({setFoodData}) {
    const [query, setQuery] = useState("pizza")
    
        useEffect(() => {
            async function fetchfood() {
               const res= await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`)
               const data = await res.json()
               setFoodData(data.results)
        }
            fetchfood()
        }, [query])
    return( 
        <div className={styles.searchcontainer}>
        <input
        className={styles.input}
        value={query}
        type="text" 
        onChange={(e) => setQuery(e.target.value)}
        />
    </div>
    )
}