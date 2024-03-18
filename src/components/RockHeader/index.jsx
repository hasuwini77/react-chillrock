import styles from './RockHeader.module.css'

const RockHeader = ({ headerTitle, subTitle }) => {
    return (
        <header>
            <h1> {headerTitle}</h1>
            <p> {subTitle} </p>
        </header>

    )

}

export default RockHeader