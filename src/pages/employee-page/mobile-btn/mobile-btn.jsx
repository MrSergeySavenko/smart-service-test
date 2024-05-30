import React from 'react';

import styles from './mobile-btn.module.scss';

export const MobileBtn = ({ src, children, onClick, type, phone }) => {
    if (type === 'link') {
        return (
            <a href={`tel:${phone}`} className={styles.link} onClick={onClick}>
                <img src={src} className={styles.img} alt='сохранить визитку' />
                <p className={styles.text}>{children}</p>
            </a>
        );
    }
    return (
        <button className={styles.button} onClick={onClick}>
            <img src={src} className={styles.img} alt='позвонить' />
            <p className={styles.text}>{children}</p>
        </button>
    );
};
