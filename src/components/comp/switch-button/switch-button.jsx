import React from 'react';

import styles from './switch-button.module.scss';

export const SwitchButton = ({ text, left }) => {
    const renderContactBtn = () =>
        left ? (
            <div className={styles.wrapper}>
                <img src={'./arrow.svg'} className={styles.leftArrow} />
                <p className={styles.text}>{text}</p>
            </div>
        ) : (
            <div className={styles.wrapper}>
                <p className={styles.text}>{text}</p>
                <img src={'./arrow.svg'} className={styles.rightArrow} />
            </div>
        );

    return renderContactBtn();
};
