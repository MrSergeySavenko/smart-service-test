import React, { useEffect, useState } from 'react';

import styles from './employee-page.module.scss';
import { SwitchButton } from '../../components/comp/switch-button/switch-button';
import { ImageBlock } from '../../components/comp/image-block/image-block';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../__data__/store/actions/actions';
import { InfoBlock } from '../../components/comp/info-block/info-block';
import { LinksFooter } from '../../components/comp/links-footer/links-footer';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/shared/logo/logo';
import { Swiper } from '../../components/shared/swiper/swiper';
import { MobileBtn } from '../../components/comp/mobile-btn/mobile-btn';
import { CompanyPage } from '../CompanyPage/CompanyPage';

export const EmployeePage = () => {
    const { data } = useSelector((state) => state.smartService);

    const [width, setWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //потом засунуть в катсомный хук

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleNavigateToCompany = () => {
        return navigate('/company');
    };

    const handleDownloadVcf = () => {
        const text = 'Hellow';
        console.log('click');
        const link = document.createElement('a');

        link.href = new Blob([text], { type: 'plain/text' });
        link.setAttribute('download', `1.txt`);

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
    };

    return (
        <div className={styles.allWrapper}>
            {width <= 570 && (
                <>
                    <Logo logo={data?.info.logo} />
                    <Swiper data={data} width={width} />
                </>
            )}
            <div className={styles.contentWrapper}>
                {width <= 570 ? (
                    <div className={styles.buttonWrapper}>
                        <MobileBtn src='/groupImg.svg' onClick={handleDownloadVcf}>
                            сохранить визитку
                        </MobileBtn>
                        <MobileBtn src='/groupPhone.svg' onClick={() => {}}>
                            позвонить
                        </MobileBtn>
                    </div>
                ) : (
                    <div className={styles.switchContainer}>
                        <SwitchButton text='о сотруднике' left={true} onClick={() => {}} activePage={true} />
                        <SwitchButton
                            text='о компании'
                            left={false}
                            onClick={handleNavigateToCompany}
                            activePage={false}
                        />
                    </div>
                )}

                <div className={styles.whiteBlockWrapper}>
                    <div className={styles.wrapper}>
                        {width > 570 && <ImageBlock data={data} width={width} />}

                        <InfoBlock infoArr={data?.items} infoText={data?.info} width={width} />
                    </div>
                    <div className={styles.footerWrapper}>
                        <nav className={styles.line} />
                        <LinksFooter />
                    </div>
                </div>
                {width < 570 && <CompanyPage />}
            </div>
        </div>
    );
};
