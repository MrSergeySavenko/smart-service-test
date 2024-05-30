import React from 'react';

import styles from './company-name-block.module.scss';
import { useSelector } from 'react-redux';
import { Logo } from '../../shared/logo/logo';

export const CompanyNameBlock = ({ width }) => {
    const { data } = useSelector((state) => state.smartService);

    return (
        <>
            <div className={styles.wrapper}>
                {width > 570 && <Logo logo={data?.info.logo} />}
                <p className={styles.companyName}>{data?.info.companyName}</p>
                <p className={styles.description}>{data?.info.description}</p>
            </div>
            {width < 570 && <div className={styles.line}></div>}
        </>
    );
};