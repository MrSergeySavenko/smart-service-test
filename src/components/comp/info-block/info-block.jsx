import React from 'react';

import styles from './info-block.module.scss';
import { formatPhoneNum, uniqueKey } from '../../../__data__/utils/utils';
import { Logo } from '../../shared/logo/logo';

export const InfoBlock = ({ infoArr, infoText, width }) => {
    const returnTypeOfHref = (name, type) => {
        switch (type) {
            case 'phone':
                return (
                    <a className={styles.href} href={`tel:${name}`}>
                        {formatPhoneNum(name)}
                    </a>
                );
            case 'mail':
                return (
                    <a className={styles.href} href={`mailto:${name}`}>
                        {name}
                    </a>
                );
            default:
                return <p className={styles.text}>{name}</p>;
        }
    };

    const renderInfo = () =>
        infoArr?.map((item, i) => {
            return (
                <div key={uniqueKey(item.name, i)} className={styles.wrapper}>
                    <img src={item.url} className={styles.img} alt='знак' />
                    {returnTypeOfHref(item.name, item.type)}
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
                    <div className={styles.line}></div>
                </>
            )}
            <div className={styles.contentWrapper}>
                <p className={styles.name}>{infoText?.name}</p>
                <p className={styles.position}>{infoText?.position}</p>
                {width <= 560 ? <div className={styles.titleLine}></div> : <></>}
                <div className={styles.linksWrapper}>{renderInfo()}</div>
            </div>
        </div>
    );
};
