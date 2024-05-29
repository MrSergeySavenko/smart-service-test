import React from 'react';

import styles from './swiper.module.scss';
import { uniqueKey } from '../../../__data__/utils/utils';

export const Swiper = ({ data }) => {
    const renderSlides = () =>
        data?.photo.map((item, i) => (
            <img className={styles.img} id={i} src={item.link} alt={item.alt} key={uniqueKey(item.alt, i)} />
        ));

    const scrollToNeedFrame = (id) => {
        const needFrame = document.getElementById(id);
        needFrame.scrollIntoView({ block: 'center', behavior: 'smooth' });
        console.log(id);
    };

    const renderSlideBtn = () =>
        data?.photo.map((item, i) => (
            <button className={styles.slideButton} onClick={() => scrollToNeedFrame(i)} />
        ));

    return (
        <div className={styles.photoContainer}>
            <div id='imgTrack' className={styles.imgTrack}>
                {renderSlides()}
            </div>
            <div className={styles.btnWrapper}>{renderSlideBtn()}</div>
        </div>
    );
};
