import {FaRegFilePdf} from "react-icons/fa6";
import React from "react";
import styles from './view_cv.module.scss'
import Link from "next/link";

export default function ViewCv() {
    return (
        <Link
            href='/CV_CesarReyes.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.btn_download}
        >
            <FaRegFilePdf/> Ver CV
        </Link>
    )
}