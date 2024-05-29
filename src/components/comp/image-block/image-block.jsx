import React from 'react';

import styles from './image-block.module.scss';
import { Swiper } from '../../shared/swiper/swiper';

export const ImageBlock = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper data={data} />
            <button className={styles.button}>добавить в контакты</button>
        </div>
    );
};

//button для добавления в контакты, пока заглушка со стилями
