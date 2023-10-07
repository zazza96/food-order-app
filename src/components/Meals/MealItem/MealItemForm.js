import React from "react";
import Button from "../../General_UI/Button/Button"
import classes from "./MealItemForm.module.css"
import Input from "../../General_UI/Input/Input";

export default (props) => {

    return (<form className={classes.form}>
        <Input label="Amount" input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} />
        <Button>+Add</Button>
    </form>)
}