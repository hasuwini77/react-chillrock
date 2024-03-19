import styles from './ChillMainContent.module.css'

const ChillMainContent = ({ updatePage }) => {

    const handleClick = (page) => {
        updatePage(page)
    }
    return (
        <>
            <div className={styles.chillContent}>
                <h3> Watch This Below ⬇️ </h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7fQdRerqew?si=YGV-BkbZ_6USQ8Pt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className={styles.chillButton}>
                <button onClick={() => handleClick(null)}> Go Back </button>
            </div>
        </>
    )
}

export default ChillMainContent