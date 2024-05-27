import React from 'react';

import styles from './logo.module.scss';

export const Logo = ({ logo }) => {
    return <h1 className={styles.logo}>{logo}</h1>;
};
