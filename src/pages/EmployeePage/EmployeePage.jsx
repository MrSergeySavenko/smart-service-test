import React, { useEffect, useState } from 'react';

import styles from './employee-page.module.scss';
import { SwitchButton } from '../../components/comp/switch-button/switch-button';
import { ImageBlock } from '../../components/comp/image-block/image-block';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../__data__/store/actions/actions';
import { InfoBlock } from '../../components/comp/info-block/info-block';
import { LinksFooter } from '../../components/comp/links-footer/links-footer';
import { useNavigate } from 'react-router-dom';

export const EmployeePage = () => {
    const { data } = useSelector((state) => state.smartService);

    const [width, setWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        // if (width < 560) {
        //     return handleNavigateToCompany();
        // }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [document.documentElement.clientWidth]);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleNavigateToCompany = () => {
        return navigate('/company');
    };

    return (
        <div className={styles.allWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.switchContainer}>
                    <SwitchButton text='о сотруднике' left={true} onClick={() => {}} />
                    <SwitchButton text='о компании' left={false} onClick={handleNavigateToCompany} />
                </div>
                <div className={styles.whiteBlockWrapper}>
                    <div className={styles.wrapper}>
                        <ImageBlock />
                        <InfoBlock infoArr={data?.items} infoText={data?.info} />
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
