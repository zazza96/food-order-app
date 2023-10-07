
import React, {Fragment} from 'react';

import mealsImage from '../../../assets/images/meals.jpg';
import classes from './Header.module.css';
import HeaderImage from './HeaderImage';
import HeaderCartButton from './HeaderCartButton';



const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>{props.children}</h1>
            <HeaderCartButton />
        </header>
        <HeaderImage className={classes['main-image']} src={mealsImage} alt="delicious food served at your favourite restaurant"/>
    </React.Fragment>
}

export default Header;