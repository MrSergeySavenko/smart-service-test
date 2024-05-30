import React from 'react';

import styles from './image-block.module.scss';
import { Slider } from '../../../components/slider/slider';

export const ImageBlock = ({ data, isMobile }) => {
    return (
        <div className={styles.wrapper}>
            <Slider data={data} isMobile={isMobile} />
            <button className={styles.button}>добавить в контакты</button>
        </div>
    );
};

//button для добавления в контакты, пока заглушка со стилями
