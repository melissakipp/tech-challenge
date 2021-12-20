import Image from 'next/image'
import { useState } from 'react'

import styles from '@/styles/Header.module.scss'

import { FullModal } from '../FullModal'
import Contact from '../../pages/Contact'

function Header() {
    const [shouldShowModel, setShouldModal] = useState(false)
    return (
        <>
            <FullModal
                shouldShow={shouldShowModel}
                onRequestClose={() => {
                    setShouldModal(false)
                }}>
                <Contact />
            </FullModal>
            <header className={styles.header}>
                <div>
                    <Image
                        src="/assets/Logo.png"
                        alt="Midwestern Logo"
                        width={350}
                        height={73}
                    />
                </div>
                <nav className={styles.navbar}>
                    <ul className={styles.navList}>
                        <li
                            className={styles.navList__item}
                            onClick={() => setShouldModal(!shouldShowModel)}>
                            contact
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
