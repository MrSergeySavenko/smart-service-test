import React from 'react';

import styles from './mobile-btn.module.scss';

export const MobileBtn = ({ src, children }) => {
    return (
        <button className={styles.button}>
            <img src={src} className={styles.img} />
            <text className={styles.text}>{children}</text>
        </button>
    );
};
