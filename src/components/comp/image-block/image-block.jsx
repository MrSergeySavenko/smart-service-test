import React from 'react';

import styles from './image-block.module.scss';
import { Swiper } from '../../shared/swiper/swiper';

export const ImageBlock = ({ data, width }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper data={data} width={width} />
            <button className={styles.button}>добавить в контакты</button>
        </div>
    );
};

//button для добавления в контакты, пока заглушка со стилями
