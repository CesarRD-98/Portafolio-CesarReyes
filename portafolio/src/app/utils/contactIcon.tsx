import { ReactNode } from "react";
import { FaPhone, FaEnvelope } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'

export const contactIcon: Record<string, ReactNode> = {
    'phone': <FaPhone size={24} />,
    'linkedin': <FaLinkedin size={24} />,
    'email': <FaEnvelope size={24} />
}

export const contactType: Record<string, string> = {
    'phone': 'Teléfono',
    'linkedin': 'LinkedIn',
    'email': 'Correo'
}