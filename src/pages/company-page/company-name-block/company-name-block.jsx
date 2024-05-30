import React from 'react';

import styles from './company-name-block.module.scss';
import { useSelector } from 'react-redux';
import { Logo } from '../../../components/logo/logo';

export const CompanyNameBlock = ({ isMobile }) => {
    const { data } = useSelector((state) => state.smartService);

    return (
        <>
            <div className={styles.wrapper}>
                {!isMobile && <Logo logo={data?.info.logo} />}
                <p className={styles.companyName}>{data?.info.companyName}</p>
                <p className={styles.description}>{data?.info.description}</p>
            </div>
            {isMobile && <div className={styles.line}></div>}
        </>
    );
};
