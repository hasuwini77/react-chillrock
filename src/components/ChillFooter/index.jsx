import { getImageURL } from "../../utils/function"
import styles from './ChillFooter.module.css'

const ChillFooter = () => {

    return (
        <div className={styles.footer}>
            <img src={getImageURL('banner1.jpeg')} alt="banner" height='100%' />
        </div>
    )
}

export default ChillFooter;