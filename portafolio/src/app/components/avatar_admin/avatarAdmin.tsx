import React from 'react'
import styles from './avatar-admin.module.scss'
import Image from "next/image";
import { useAuthContext } from '@/app/context/auth/auth.provider';

export default function AvatarAdmin() {
    const { user } = useAuthContext()

    return (
        <div className={styles.avatar_container}>
            <div className={styles.avatar}>
                <Image className={styles.avatar_img} src='/dev-icon.png' alt='avatar' height={512} width={770} />
            </div>
            <p>{user?.author}</p>
        </div>
    )
}



