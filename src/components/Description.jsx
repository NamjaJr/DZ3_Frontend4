import React from 'react';
import styles from './description.module.css';

const Description = ({ info }) => {
    return (
        <div className={styles.description}>
            <h1>{info.title}</h1>
            <p>{info.description}</p>
        </div>
    );
};

export default Description;