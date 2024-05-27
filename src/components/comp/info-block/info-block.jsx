import React from 'react';

import styles from './info-block.module.scss';
import { uniqueKey } from '../../../__data__/utils/utils';
import { Logo } from '../../shared/logo/logo';

export const InfoBlock = ({ infoArr, infoText, width }) => {
    const renderInfo = () =>
        infoArr?.map((item, i) => {
            return (
                <div key={uniqueKey(item.name, i)} className={styles.wrapper}>
                    <img src={item.url} className={styles.img} alt='знак' />
                    <p className={styles.text}>{item.name}</p>
                </div>
            );
        });

    return (
        <div className={styles.infoWrapper}>
            {width <= 560 ? (
                <></>
            ) : (
                <>
                    <Logo logo={infoText?.logo} />
                    <nav className={styles.line} />
                </>
            )}
            <div className={styles.contentWrapper}>
                <p className={styles.name}>{infoText?.name}</p>
                <p className={styles.position}>{infoText?.position}</p>
                {width <= 560 ? <nav className={styles.titleLine} /> : <></>}
                <div className={styles.linksWrapper}>{renderInfo()}</div>
            </div>
        </div>
    );
};
