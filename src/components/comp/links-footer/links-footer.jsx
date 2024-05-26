import React from 'react';

import styles from './links-footer.module.scss';
import { useSelector } from 'react-redux';

export const LinksFooter = () => {
    const { data } = useSelector((state) => state.smartService);

    const renderLinks = () =>
        data.links.map((item, i) => {
            return <img src={item.img} className={styles.img} />;
        });

    return (
        <div className={styles.wrapper}>
            <div className={styles.linksWrapper}>{renderLinks()}</div>
        </div>
    );
};
