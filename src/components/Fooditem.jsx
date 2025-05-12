import styles from "./fooditem.module.css"
export default function Fooditem({food, setfoodId, foodId}) {
    return <div>
       
                <div className={styles.itemContainer}> 
                    <img className={styles.itemImage} src={food.image} alt="" />
                    <div className={styles.itemContent}>
                    <p className={styles.itemName}> {food.title}</p>
                    </div>
                    <div className={styles.buttonContainer}>
                    <a href="#fooddetails">
                    <button onClick={()=>{setfoodId(food.id)}} className={styles.itemButton}>view recipe</button>
                    </a>
                    </div>
                </div>            
            </div>
}