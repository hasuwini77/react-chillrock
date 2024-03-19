import { getImageURL } from "../../utils/function"
import styles from './RockFooter.module.css'

const RockFooter = () => {

    return (
        <div className={styles.imgDiv}>
            <img className={styles.footerImg} src={getImageURL('banner3.jpeg')} alt="banner" height='100%' />
        </div>
    )
}

export default RockFooter;