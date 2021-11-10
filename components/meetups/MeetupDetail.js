import { Fragment } from 'react';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.img} alt={props.title} />
            <h2> {props.title}</h2>
        </section>
    );
}

export default MeetupDetail;
