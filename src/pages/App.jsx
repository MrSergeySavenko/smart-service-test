import React, { useEffect } from 'react';

import styles from './app.module.scss';
import { SwitchButton } from '../components/comp/switch-button/switch-button';
import { ImageBlock } from '../components/comp/image-block/image-block';
import { useDispatch } from 'react-redux';
import { fetchData } from '../__data__/store/actions/actions';
import { InfoBlock } from '../components/comp/info-block/info-block';
import { LinksFooter } from '../components/comp/links-footer/links-footer';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
        console.log('jopa');
    }, []);

    return (
        <div className={styles.allWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.switchContainer}>
                    <SwitchButton text='о сотруднике' left={true} />
                    <SwitchButton text='о компании' left={false} />
                </div>
                <div className={styles.whiteBlockWrapper}>
                    <div className={styles.wrapper}>
                        <ImageBlock />
                        <InfoBlock />
                    </div>
                    <div className={styles.footerWrapper}>
                        <nav className={styles.line} />
                        <LinksFooter />
                    </div>
                </div>
            </div>
        </div>
    );
};
