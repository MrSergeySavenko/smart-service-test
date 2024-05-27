import React from 'react';

import styles from './switch-button.module.scss';

export const SwitchButton = ({ text, left, onClick }) => {
    const renderContactBtn = () =>
        left ? (
            <div className={styles.wrapper} onClick={onClick}>
                <img src={'./arrow.svg'} className={styles.leftArrow} />
                <p className={styles.text}>{text}</p>
            </div>
        ) : (
            <div className={styles.wrapper} onClick={onClick}>
                <p className={styles.text}>{text}</p>
                <img src={'./arrow.svg'} className={styles.rightArrow} />
            </div>
        );

    return renderContactBtn();
};
