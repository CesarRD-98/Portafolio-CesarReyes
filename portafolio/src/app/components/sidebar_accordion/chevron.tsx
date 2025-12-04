import { FaChevronRight } from "react-icons/fa6"
import styles from './chevron.module.scss'

type ChevronProps = { open: boolean }

export function Chevron({ open }: ChevronProps) {
    return <FaChevronRight className={`${styles.chevron} ${open ? styles.chevron_open : ''}`} aria-hidden />
}