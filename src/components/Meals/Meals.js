import React, {Fragment} from "react"
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"

export default () => {
   return <Fragment>
        <MealsSummary />
        <AvailableMeals />
   </Fragment>
}