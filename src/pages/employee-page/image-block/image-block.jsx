import React from 'react';

import styles from './image-block.module.scss';
import { Slider } from '../../../components/slider/slider';

export const ImageBlock = ({ data, isMobile }) => {
    const handleDownloadVcf = () => {
        const [surName, name, secondName] = data?.info.name.split(' ');

        const text = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `N:${surName};${name};${secondName}`,
            `FN:${name} ${secondName} ${surName}`,
            `TEL;CELL:${data?.items[0].name}`,
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
        <div className={styles.wrapper}>
            <Slider data={data} isMobile={isMobile} />
            <button onClick={handleDownloadVcf} className={styles.button}>
                добавить в контакты
            </button>
        </div>
    );
};
