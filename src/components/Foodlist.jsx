import Fooditem from "./Fooditem";
export default function Foodlist({foodData, setfoodId,foodId}) {
    return (
        <div className="food-list">
            {foodData.map((food)=><Fooditem setfoodId={setfoodId} foodId={foodId} food={food} key={food.id}/>)}
        </div>
    );
}