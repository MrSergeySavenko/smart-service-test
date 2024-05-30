import React, { useEffect, useRef, useState } from 'react';

import groupImg from '../../assets/groupImg.svg';
import groupPhoneImg from '../../assets/groupPhone.svg';

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

    const handleDownloadVcf = (data) => {
        const [surName, name, secondName] = data?.info.name.split(' ');

        const text = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `N:${surName};${name};${secondName}`,
            `FN:${name} ${secondName} ${surName}`,
            `TEL;CELL:${data?.items[0].name}`,
            `TEL;TYPE=WORK:${data?.items[1].name}`,
            `EMAIL;TYPE=INTERNET:${data?.items[4].name}`,
            'END:VCARD',
        ].join('\n');

        const blob = new Blob([text], { type: 'text/vcard' });

        const link = document.createElement('a');

        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'SmartService.vcf');

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
                        <MobileBtn src={groupImg} type='button' onClick={handleDownloadVcf}>
                            сохранить визитку
                        </MobileBtn>
                        <MobileBtn src={groupPhoneImg} type='link' phone={data?.items[0].name}>
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
                        <div className={styles.line}></div>
                        <LinksFooter />
                    </div>
                </div>
                {width < 570 && <CompanyPage />}
            </div>
        </div>
    );
};
