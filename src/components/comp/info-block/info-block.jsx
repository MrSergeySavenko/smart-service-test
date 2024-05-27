import React from 'react';

import styles from './info-block.module.scss';
import { useSelector } from 'react-redux';
import { uniqueKey } from '../../../__data__/utils/utils';

export const InfoBlock = ({ infoArr, infoText }) => {
    const renderInfo = () =>
        infoArr?.map((item, i) => {
            return (
                <div key={uniqueKey(item.name, i)} className={styles.wrapper}>
                    <img src={item.url} className={styles.img} alt='знак' />
                    <p className={styles.text}>{item.name}</p>
                </div>
            );
        });

    return (
        <div className={styles.infoWrapper}>
            <h1 className={styles.logo}>{infoText?.logo}</h1>
            <nav className={styles.line} />
            <div className={styles.contentWrapper}>
                <p className={styles.name}>{infoText?.name}</p>
                <p className={styles.position}>{infoText?.position}</p>
                <div className={styles.linksWrapper}>{renderInfo()}</div>
            </div>
        </div>
    );
};
