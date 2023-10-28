import React, { useRef, useState } from "react";
import Button from "../../General_UI/Button/Button"
import classes from "./MealItemForm.module.css"
import Input from "../../General_UI/Input/Input";

export default (props) => {
    const amoutInputRef = useRef();
    const [amountValid, setAmoutValid] = useState(true);
    const submitHandler = e =>{
        e.preventDefault();
        const enteredAmout = amoutInputRef.current.value;
        const enteredAmoutNumber = +enteredAmout;

        if(enteredAmout.trim().length === 0 || enteredAmoutNumber < 1 || enteredAmoutNumber > 5) {
            setAmoutValid(false)
            return;
        }

        props.onAddToCart(enteredAmoutNumber)
    }

    return (<form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amoutInputRef}
        label="Amount"
         input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} />
        <Button>+Add</Button>
        {!amountValid && <p>Please enter valid amount</p>}
    </form>)

    
}