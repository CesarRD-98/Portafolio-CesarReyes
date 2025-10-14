import { FaRegFilePdf } from "react-icons/fa6";
import React from "react";
import styles from './view_cv.module.scss'

export default function ViewCv() {
    const viewCVbutton = () => {
        const link = document.createElement('a')
        link.href = '/CV_CesarReyes.pdf'
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.click()
    }
    return (
        <button
            className={styles.btn_download}
            onClick={viewCVbutton}
        ><FaRegFilePdf /> Ver CV</button>
    )
}