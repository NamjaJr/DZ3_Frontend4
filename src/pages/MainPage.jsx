import React from 'react';
import Description from '../components/Description';
import styles from './mainPage.module.css';

const MainPage = () => {
    const info = { title: "Title", description: "description" };

    return (
        <div className={styles.mainPage}>
            <Description info={info} />
        </div>
    );
};

export default MainPage;