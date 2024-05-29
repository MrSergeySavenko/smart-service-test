import React from 'react';

import styles from './mobile-btn.module.scss';

export const MobileBtn = ({ src, children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <img src={src} className={styles.img} />
            <p className={styles.text}>{children}</p>
        </button>
    );
};
