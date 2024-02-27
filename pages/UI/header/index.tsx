import Link from 'next/link';
import styles from '../../../styles/Header.module.css'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link className={styles.headerItem} href="/">Home</Link>
      <Link className={styles.headerItem} href="/resume">Resume</Link>
    </div>
  )
}   