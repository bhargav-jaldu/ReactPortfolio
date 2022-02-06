import React from 'react';
import styles from './contact.module.css'

const Contact = () => {
  return <div className={styles.container} id="con">
      <div class={styles.title}>
        <h1>Contact</h1>
    </div>

    {/* social links */}
<div className={styles.socialMenu}>
        <ul>
        <li className={styles.linkedin}><a href="https://www.linkedin.com/in/bhargav-jaldu-697488196/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a className={styles.github} href="https://github.com/bhargav-jaldu" target="blank"><i className="fab fa-github"></i></a></li>
            <li className={styles.instagram}><a href="https://www.instagram.com/bhargavjaldu_123/" target="blank"><i className="fab fa-instagram"></i></a></li>
            <li className={styles.linkedin}><a href="mailto:bhargavvpjaldu@gmail.com" target="blank"><i class="fas fa-envelope"></i></a></li>
        </ul>
    </div>
  </div>;
};

export default Contact;
