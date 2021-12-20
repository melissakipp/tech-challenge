import styles from '@/styles/SplitScreen.module.scss'

export const SplitScreen = ({ left: Left, right: Right }) => {
    return (
        <section className={styles.Container}>
            <article className={styles.Pane}>
                <Left />
            </article>
            <article className={styles.Pane}>
                <Right />
            </article>
        </section>
    )
}
