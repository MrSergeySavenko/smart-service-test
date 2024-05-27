import React from 'react';

import styles from './links-footer.module.scss';
import { useSelector } from 'react-redux';
import { uniqueKey } from '../../../__data__/utils/utils';

export const LinksFooter = () => {
    const { data } = useSelector((state) => state.smartService);

    const renderLinks = () =>
        data?.links.map((item, i) => {
            return (
                <img
                    key={uniqueKey(item.img, i)}
                    src={item.img}
                    className={styles.img}
                    alt='картинка соцсетей'
                />
            );
        });

    return (
        <div className={styles.wrapper}>
            <div className={styles.linksWrapper}>{renderLinks()}</div>
        </div>
    );
};
