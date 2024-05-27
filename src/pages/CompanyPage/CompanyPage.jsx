import React from 'react';

import styles from './company-page.module.scss';
import { SwitchButton } from '../../components/comp/switch-button/switch-button';
import { InfoBlock } from '../../components/comp/info-block/info-block';
import { LinksFooter } from '../../components/comp/links-footer/links-footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CompanyNameBlock } from '../../components/comp/company-name-block/company-name-block';
import { CompanyInfoBlock } from '../../components/comp/company-info-block/company-info-block';

export const CompanyPage = () => {
    const { data } = useSelector((state) => state.smartService);

    const navigate = useNavigate();

    const handleNavigateToEmployee = () => {
        return navigate('/employee');
    };

    return (
        <div className={styles.allWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.switchContainer}>
                    <SwitchButton text='о сотруднике' left={true} onClick={handleNavigateToEmployee} />
                    <SwitchButton text='о компании' left={false} onClick={() => {}} />
                </div>
                <div className={styles.whiteBlockWrapper}>
                    <nav className={styles.line} />
                    <div className={styles.wrapper}>
                        <CompanyNameBlock />
                        <CompanyInfoBlock infoArr={data?.companyItems} />
                    </div>
                    <div className={styles.footerWrapper}>
                        <nav className={styles.line} />
                        <LinksFooter />
                    </div>
                </div>
            </div>
        </div>
    );
};
