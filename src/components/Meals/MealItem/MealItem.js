import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';



export default (props) => {

    const price = `$${props.price.toFixed(2)}`

    return (<li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}><p>{props.description}</p></div>
            <div className={classes.price}><span >{price}</span></div>
        </div>
        <div>
            <MealItemForm id={props.id}/>
        </div>
    </li>);
}