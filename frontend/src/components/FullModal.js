import Image from "next/image";
import styles from "@/styles/FullModal.module.scss";

export const FullModal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <div className={styles.modalBackground} onClick={onRequestClose}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalHeader}>
          <div className={styles.Logo}>
            <Image
              src="/assets/Logo.png"
              alt="Midwestern Logo"
              width={350}
              height={73}
            />
          </div>
          <button className={styles.modalBtn} onClick={onRequestClose}>
            home
          </button>
        </header>
        <main>{children}</main>
      </div>
    </div>
  ) : null;
};
