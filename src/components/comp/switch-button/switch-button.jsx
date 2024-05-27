import React from 'react';

import styles from './switch-button.module.scss';

export const SwitchButton = ({ text, left, onClick, activePage }) => {
    const renderContactBtn = () =>
        left ? (
            <div className={styles.wrapper} onClick={onClick}>
                <img src={'./arrow.svg'} className={activePage ? styles.activeLeftArrow : styles.leftArrow} />
                <p className={activePage ? styles.activeText : styles.text}>{text}</p>
            </div>
        ) : (
            <div className={styles.wrapper} onClick={onClick}>
                <p className={activePage ? styles.activeText : styles.text}>{text}</p>
                <img
                    src={'./arrow.svg'}
                    className={activePage ? styles.activeRightArrow : styles.rightArrow}
                />
            </div>
        );

    return renderContactBtn();
};
