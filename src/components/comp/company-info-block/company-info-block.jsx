import React from 'react';

import styles from './company-info-block.module.scss';
import { uniqueKey } from '../../../__data__/utils/utils';

export const CompanyInfoBlock = ({ infoArr }) => {
    const returnTypeOfHref = (name, type) => {
        switch (type) {
            case 'phone':
                return (
                    <a className={styles.href} href={`tel:${name}`}>
                        {name}
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

    return <div className={styles.contentWrapper}>{renderInfo()}</div>;
};
