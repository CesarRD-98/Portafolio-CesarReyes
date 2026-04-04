import styles from './dashboardButton.module.scss'
import { FaHouse } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function DashboardButton() {
    const router = useRouter()
    const goToDashboard = () => {
        router.push('/admin/dashboard')
    }

    return (
        <li>
            <button className={styles.link} onClick={goToDashboard}>
                <FaHouse aria-hidden />
                Dashboard
            </button>
        </li>

    )
}