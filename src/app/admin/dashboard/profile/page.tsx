'use client'

import { useToastContext } from '@/app/context/toast/toast.provider';
import Image from 'next/image';
import { useProfile } from '@/app/hooks/profile/useProfile'
import Loading from '@/app/components/loading/loading'
import './profile-page.scss';

export default function ProfilePage() {
    const { showToast } = useToastContext()

    const { data: profile, isLoading, isError, error } = useProfile()

    if (isError) {
        showToast({
            title: "Error al cargar perfil",
            message: error instanceof Error ? error.message : "Error desconocido",
            type: "error"
        })
    }

    return (
        <section className="">
            <h4 className="">Perfil</h4>

            {isLoading && <Loading />}

            {profile && (
                <div className="profile__card">
                    <div className="profile__header">
                        <Image
                            src={profile.avatarUrl || '/default-avatar.png'}
                            alt="Avatar"
                            width={120}
                            height={120}
                            className="profile__avatar"
                        />

                        <div>
                            <h2>{profile.author}</h2>
                            <p className="profile__year">Año: {profile.year}</p>
                        </div>
                    </div>

                    <div className="profile__content">
                        <div>
                            <h4>Biografía corta</h4>
                            <p>{profile.shortBio}</p>
                        </div>

                        <div>
                            <h4>Biografía completa</h4>
                            <p>{profile.fullBio}</p>
                        </div>

                        <div>
                            <h4>Enfoque</h4>
                            <p>{profile.learningFocus}</p>
                        </div>
                    </div>

                    <div className="profile__footer">
                        <a href={profile.cvUrl} target="_blank">
                            Descargar CV
                        </a>

                        <span>
                            {profile.updatedAt
                                ? new Date(profile.updatedAt).toLocaleString('es-HN', {
                                    dateStyle: 'medium',
                                    timeStyle: 'short',
                                })
                                : '-'}
                        </span>
                    </div>
                </div>
            )}
        </section>
    )
}