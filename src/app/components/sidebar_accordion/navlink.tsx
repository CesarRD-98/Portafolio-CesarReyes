import Link from "next/link"
import styles from './navlink.module.scss'

type NavLinkProps = { href: string, label: string }

export function NavLink({ label, href }: NavLinkProps) {
    return (
        <Link href={href} className={styles.navlink}>
            {label}
        </Link>
    )
}