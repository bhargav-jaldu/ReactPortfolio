import React, {useEffect} from 'react';
import styles from './header.module.css';

import Aos from 'aos'
import "aos/dist/aos.css"

const Header = () => {

  useEffect(() => {
    Aos.init({
        duration: 2000
    })
}, [])

  return <div className={styles.header} data-aos="zoom-out">
      <div className={styles.part1}>
        <div>
        <h3 className={styles.title}>Hello, I am </h3>
        <h1>Bhargav Jaldu</h1>
        </div>
        <p className={styles.content}>I am a third year student pursuing Computer science and Engineering @ VIT-AP University and I am interested in Web development and also doing competitive programming.</p>

<div className={styles.center}>
<button className={styles.learnMore}>
  <span className={styles.circle} aria-hidden="true">
  <span className={`${styles.icon} ${styles.arrow}`}></span>
  </span>
  <a href="https://drive.google.com/file/d/1R3UKV4zwqPymV4zdPdHGEu1GrY5Ddp1p/view?usp=sharing" target="_blank"><span className={styles.buttonText}>RESUME</span></a>
</button>
</div>

{/* social links */}
<div className={styles.socialMenu}>
        <ul>
        <li className={styles.linkedin}><a href="https://www.linkedin.com/in/bhargav-jaldu-697488196/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a className={styles.github} href="https://github.com/bhargav-jaldu" target="blank"><i className="fab fa-github"></i></a></li>
            <li className={styles.instagram}><a href="https://www.instagram.com/bhargavjaldu_123/" target="blank"><i className="fab fa-instagram"></i></a></li>
        </ul>
    </div>
      </div>
  </div>;
};

export default Header;
