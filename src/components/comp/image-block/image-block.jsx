import React from 'react';

import styles from './image-block.module.scss';

export const ImageBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageSwiper} />
            <button className={styles.button}>добавить в контакты</button>
        </div>
    );
};

//button для добавления в контакты, пока заглушка со стилями
