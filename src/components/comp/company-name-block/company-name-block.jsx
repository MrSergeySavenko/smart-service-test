import React from 'react';

import styles from './company-name-block.module.scss';
import { useSelector } from 'react-redux';

export const CompanyNameBlock = () => {
    const { data } = useSelector((state) => state.smartService);

    return (
        <div className={styles.wrapper}>
            <p className={styles.logo}>{data?.info.logo}</p>
            <p className={styles.companyName}>{data?.info.companyName}</p>
            <p className={styles.description}>{data?.info.description}</p>
        </div>
    );
};
