import classes from './Card.module.css';

export default (props) => {
    return <div className={classes.card}>{props.children}</div>;
}