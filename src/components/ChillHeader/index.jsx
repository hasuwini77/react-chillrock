import styles from './ChillHeader.module.css'

const ChillHeader = ({ headerTitle, subTitle }) => {
    return (
        <header>
            <h1> {headerTitle}</h1>
            <p> {subTitle} </p>
        </header>

    )

}

export default ChillHeader