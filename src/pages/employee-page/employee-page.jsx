import React, { useEffect } from 'react';

import groupImg from '../../assets/groupImg.svg';
import groupPhoneImg from '../../assets/groupPhone.svg';

import styles from './employee-page.module.scss';
import { SwitchButton } from '../../components/switch-button/switch-button';
import { ImageBlock } from './image-block/image-block';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../__data__/store/actions/actions';
import { InfoBlock } from './info-block/info-block';
import { LinksFooter } from '../../components/links-footer/links-footer';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/logo/logo';
import { Slider } from '../../components/slider/slider';
import { MobileBtn } from './mobile-btn/mobile-btn';
import { CompanyPage } from '../company-page/company-page';
import { useMobile } from '../../__data__/hooks/useMobile';

export const EmployeePage = () => {
    const { data } = useSelector((state) => state.smartService);

    const isMobile = useMobile();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //потом засунуть в катсомный хук

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleNavigateToCompany = () => {
        return navigate('/company');
    };

    const handleDownloadVcf = () => {
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
            {isMobile && (
                <>
                    <Logo logo={data?.info.logo} />
                    <Slider data={data} isMobile={isMobile} />
                </>
            )}
            <div className={styles.contentWrapper}>
                {isMobile ? (
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
                        {!isMobile && <ImageBlock data={data} isMobile={isMobile} />}

                        <InfoBlock infoArr={data?.items} infoText={data?.info} isMobile={isMobile} />
                    </div>
                    <div className={styles.footerWrapper}>
                        <div className={styles.line}></div>
                        <LinksFooter />
                    </div>
                </div>
                {isMobile && <CompanyPage />}
            </div>
        </div>
    );
};
