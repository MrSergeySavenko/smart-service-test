import React from 'react';

import styles from './company-info-block.module.scss';
import { uniqueKey } from '../../../__data__/utils/utils';

export const CompanyInfoBlock = ({ infoArr }) => {
    const renderInfo = () =>
        infoArr?.map((item, i) => {
            return (
                <div key={uniqueKey(item.name, i)} className={styles.wrapper}>
                    <img src={item.url} className={styles.img} alt='знак' />
                    <p className={styles.text}>{item.name}</p>
                </div>
            );
        });

    return <div className={styles.contentWrapper}>{renderInfo()}</div>;
};
