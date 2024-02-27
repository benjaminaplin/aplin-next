import styles from '../../../styles/Home.module.css'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
    <a href='https://www.linkedin.com/in/benjaminaplin/'>
      <ImLinkedin size='64'/>
    </a>
    <a href='https://github.com/benjaminaplin'>
      <FaGithub size='64'/>
    </a>
    <div className={styles.contact}>
      <p>Ben Aplin</p>
      <p>benjaminaplin@gmail.com</p>
      <p>917 750 6949</p>
    </div>
  </footer>
  )
}