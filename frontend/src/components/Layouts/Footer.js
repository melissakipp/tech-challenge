import { useReducer } from 'react'

import styles from '@/styles/Footer.module.scss'

import FetchStaticData from '../utils/helpers/useFetchNames'

function Footer() {
    const [visible, setVisible] = useReducer(visible => !visible, false)

    return (
        <footer className={styles.footer}>
            <h2>
                <span className={styles.underlineTitle}>Heading</span> One
            </h2>
            <p>
                Remove the duplicates in 2 Javascript objects and output the
                list of distinct names in an unordered list when{' '}
                <a className={styles.dataLink} onClick={setVisible}>
                    {' '}
                    this link
                </a>{' '}
                is clicked. If the operation has been completed already notify
                the user that this has already been done.
            </p>
            {/*  Default Hidden to Show FetchData */}
            {visible && (
                <div className={styles.dataBox} aria-live="polite">
                    <p className={styles.data__success}>Success!</p>
                    <FetchStaticData />
                    <button
                        className={styles.data__closeBtn}
                        onClick={setVisible}>
                        Close
                    </button>
                </div>
            )}
        </footer>
    )
}

export default Footer
