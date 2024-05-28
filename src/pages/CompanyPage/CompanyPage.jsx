import React, { useEffect, useState } from 'react';

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

    const [width, setWidth] = useState(window.innerWidth);

    const navigate = useNavigate();

    const handleNavigateToEmployee = () => {
        return navigate('/employee');
    };

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        if (width <= 570) {
            return navigate('/empoloyee');
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    return (
        <div className={styles.allWrapper}>
            <div className={styles.contentWrapper}>
                {width > 570 && (
                    <div className={styles.switchContainer}>
                        <>
                            <SwitchButton
                                text='о сотруднике'
                                left={true}
                                onClick={handleNavigateToEmployee}
                                activePage={false}
                            />
                            <SwitchButton
                                text='о компании'
                                left={false}
                                onClick={() => {}}
                                activePage={true}
                            />
                        </>
                    </div>
                )}
                <div className={styles.whiteBlockWrapper}>
                    {width > 570 && <nav className={styles.line} />}
                    <div className={styles.wrapper}>
                        <CompanyNameBlock width={width} />
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
