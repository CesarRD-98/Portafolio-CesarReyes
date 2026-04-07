'use client';

import Image from "next/image";
import { useProfile } from '@/app/modules/profile/hooks/useProfile';

export default function AvatarAdmin() {
    const { data: profile } = useProfile();

    return (
        <div className="flex items-center gap-3">

            {/* AVATAR */}
            <div className="
                    w-10 h-10 rounded-lg overflow-hidden
                    border border-neutral-200 dark:border-neutral-700
                    bg-neutral-100 dark:bg-neutral-800
                    flex items-center justify-center
                ">
                <Image
                    src={profile?.avatarUrl || '/default-avatar.png'}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            {/* INFO */}
            <div className="flex flex-col leading-tight">

                <span className="
                    text-sm font-medium
                    text-neutral-900 dark:text-white
                    ">
                    {profile?.author || 'Usuario'}
                </span>

                <span className="
                    text-xs text-neutral-500 dark:text-neutral-400
                    ">
                    Admin
                </span>

            </div>

        </div>
    );
}