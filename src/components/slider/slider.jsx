import React, { useState } from 'react';

import styles from './slider.module.scss';
import { uniqueKey } from '../../__data__/utils/utils';

export const Slider = ({ data, isMobile }) => {
    const [activeBtn, setActiveBtn] = useState(0);

    const renderSlides = () =>
        data?.photo.map((item, i) => (
            <img
                className={styles.img}
                id={i}
                src={!isMobile ? item.link : item.linkMobile}
                alt={item.alt}
                key={uniqueKey(item.alt, i)}
            />
        ));

    const scrollToNeedFrame = (id) => {
        const needFrame = document.getElementById(id);
        needFrame.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        setActiveBtn(id);
    };

    const renderSlideBtn = () =>
        data?.photo.map((item, i) => (
            <div
                className={activeBtn === i ? styles.activeSlideButton : styles.slideButton}
                key={uniqueKey('name', i)}
                onClick={() => scrollToNeedFrame(i)}
            />
        ));

    const findActiveButton = (e) =>
        setActiveBtn(
            Math.round(
                (e.currentTarget.scrollLeft + e.currentTarget.clientWidth) / e.currentTarget.clientWidth
            ) - 1
        );

    return (
        <div className={styles.photoContainer}>
            <div id='imgTrack' className={styles.imgTrack} onTouchEnd={(e) => findActiveButton(e)}>
                {renderSlides()}
            </div>
            <div className={styles.btnWrapper}>{renderSlideBtn()}</div>
        </div>
    );
};
