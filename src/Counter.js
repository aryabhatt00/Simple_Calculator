
import {useMealsListContext} from "./MealsProvider"

const Counter = () =>
{
    const{meals} = useMealsListContext();
    return(
        <div>
            <h3>Number of meals today : {meals.lenght}</h3>
        </div>
    )
}
export default Counter;







