import { FaRegFilePdf } from "react-icons/fa6";
import styles from './view_cv.module.scss'
import { useUserContext } from "@/app/context/user_profile/user.provider";

export default function ViewCv() {
    const { user } = useUserContext();

    if(!user?.cvUrl || user.cvUrl === '') {
        return <div className={styles.no_cv}>No hay CV disponible</div>
    }

    const viewCVbutton = () => {
        const link = document.createElement('a')
        link.href = user.cvUrl || '#'
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.click()
    }
    return (
        <button
            className={styles.btn_download}
            onClick={viewCVbutton}
        >
            <FaRegFilePdf /> Ver CV
        </button>
    )
}