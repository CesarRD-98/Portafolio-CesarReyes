import React from 'react'
import styles from './loading.module.scss'

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}></div>
            <p className={styles.text}>Cargando...</p>
        </div>
    )
}
