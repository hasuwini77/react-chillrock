import styles from './MainContent.module.css';

const MainContent = ({ updatePage }) => {
    const handleClick = (page) => {
        updatePage(page);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <button onClick={() => handleClick('Chill Beats')}> Chill Beats </button>
                <button onClick={() => handleClick('Rock Music')}> Rock Music </button>
            </div>
        </div>
    );
};

export default MainContent;
