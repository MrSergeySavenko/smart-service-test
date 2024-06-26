import React from 'react';
import { useSelector } from 'react-redux';

import { uniqueKey } from '../../__data__/utils/utils';
import styles from './links-footer.module.scss';

export const LinksFooter = () => {
    const { data } = useSelector((state) => state.smartService);

    const renderLinks = () =>
        data?.links.map((item, i) => {
            return (
                <a className={styles.link} href={item.link} target='_blank' key={uniqueKey(item.img, i)}>
                    <img src={item.img} className={styles.img} alt='картинка соцсетей' />
                </a>
            );
        });

    return (
        <div className={styles.wrapper}>
            <div className={styles.linksWrapper}>{renderLinks()}</div>
        </div>
    );
};
