import styles from './RockMainContent.module.css'

const RockMainContent = ({ updatePage }) => {

    const handleClick = (page) => {
        updatePage(page)
    }
    return (
        <>
            <div className={styles.rockButton}>
                <button onClick={() => handleClick(null)}> Go Back </button>
            </div>
            <div className={styles.rockContent}>
                <h3> Watch This My Dude ➡️ </h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Jwtyn-L-2gQ?si=R-8_JQZoHm4ptraN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

        </>
    )
}

export default RockMainContent