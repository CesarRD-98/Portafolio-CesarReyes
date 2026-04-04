'use client';

import styles from './avatar-admin.module.scss'
import Image from "next/image";
import { useProfile } from '@/app/hooks/profile/useProfile';

export default function AvatarAdmin() {
    const { data: profile } = useProfile();

    return (
        <div className={styles.avatar_container}>
            <div className={styles.avatar}>
                <Image className={styles.avatar_img} src='/dev-icon.png' alt='avatar' height={512} width={770} />
            </div>
            <p>{profile?.author}</p>
        </div>
    )
}



