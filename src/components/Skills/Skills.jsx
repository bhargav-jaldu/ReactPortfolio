import React, {useEffect} from 'react';
import styles from './skills.module.css';

import Aos from 'aos'
import "aos/dist/aos.css"

const Skills = () => {

  useEffect(() => {
    Aos.init({
        duration: 2000
    })
}, [])

  return <div className={styles.container} id="skills">
      <div class={styles.title}>
        <h1>Skills</h1>
    </div>

    <div className={styles.skills}>
      <div className={styles.languages} data-aos="fade-left">
        <h2>Languages: </h2>
        <div className={styles.items}>
          <h4>Java</h4>
          <h4>JavaScript</h4>
          <h4>PHP</h4>
        </div>
      </div>

      <div className={styles.languages} data-aos="fade-right">
        <h2>Web Develoment and Databases: </h2>
        <div className={styles.items}>
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>ReactJs</h4>
          <h4>NodeJs</h4>
          <h4>ExpressJs</h4>
          <h4>MySQL</h4>
        </div>
      </div>

      <div className={styles.languages} data-aos="fade-left">
        <h2>Core Subjects: </h2>
        <div className={styles.items}>
          <h4>Oops</h4>
          <h4>DBMS</h4>
          <h4>Computer Networks</h4>
          <h4>Operating Systems</h4>
        </div>
      </div>

      <div className={styles.languages} data-aos="fade-right">
        <h2>Developer Tools and Technologies: </h2>
        <div className={styles.items}>
          <h4>Git</h4>
          <h4>GitHub</h4>
          <h4>Vs Code</h4>
          <h4>IntelliJ Idea</h4>
        </div>
      </div>
    </div>
  </div>;
};

export default Skills;
