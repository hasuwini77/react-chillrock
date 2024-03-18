import styles from './Footer.module.css'
const Footer = () => {

    const currentDate = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p> Copyright {currentDate} ® Edwin Andermyr</p>
        </footer>
    )

}

export default Footer; 