import React from 'react';

import styles from './info-block.module.scss';
import { useSelector } from 'react-redux';

export const InfoBlock = () => {
    const { data, isLoading } = useSelector((state) => state.smartService);

    const renderInfo = () =>
        data?.items.map((item, i) => {
            return (
                <div className={styles.wrapper}>
                    <img src={item.url} className={styles.img} />
                    <p className={styles.text}>{item.name}</p>
                </div>
            );
        });

    return (
        <div className={styles.infoWrapper}>
            <h1 className={styles.logo}>{data?.info.logo}</h1>
            <nav className={styles.line} />
            <div className={styles.contentWrapper}>
                <p className={styles.name}>{data?.info.name}</p>
                <p className={styles.position}>{data?.info.position}</p>
                <div className={styles.linksWrapper}>{renderInfo()}</div>
            </div>
        </div>
    );
};
