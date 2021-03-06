import React, {useEffect} from 'react';
import styles from './experience.module.css';


import Aos from 'aos'
import "aos/dist/aos.css"


const Experience = () => {
  useEffect(() => {
    Aos.init({
        duration: 2000
    })
}, [])

  return <div className={styles.exp} id="exp">
      <div class={styles.title}>
        <h1>Experience</h1>
    </div>

    {/* matter */}
    <div className={styles.container}>
    <div className={styles.one} data-aos="fade-right">
      <div className={styles.flex}>
      <h1>Association for Computing Machinery (ACM) </h1>
      <h5>Sept 2020 - Present</h5>
      </div>
      <div className={styles.flex}>
      <h4>Technical Co-Lead</h4>
      <h5>Amaravathi, India</h5>
      </div>

      <p><i class="fas fa-angle-right"></i>&nbsp;Developed a Website For My Club in React JS and Node.js.</p>
      <p><i class="fas fa-angle-right"></i>&nbsp;Implemented reusable components to Make Code Clean.</p>
      <p><i class="fas fa-angle-right"></i>&nbsp;I used various Libraries Like Router, Axios, Aos.</p>

      <a href="https://acmvitap.in/" target="_blank"><button className={styles.button}>Check it Out</button></a>
    </div>
    </div>
  
{/* 2 */}
  <div className={styles.container}>
    <div className={styles.one} data-aos="fade-left">
      <div className={styles.flex}>
      <h1>VIT-AP Alumni </h1>
      <h5>Dec 2021 - Present</h5>
      </div>
      <div className={styles.flex}>
      <h4>ReactJs Developer</h4>
      <h5>Amaravathi, India</h5>
      </div>

      <p><i class="fas fa-angle-right"></i>&nbsp;Developing a VIT-AP's Alumni Official Website in React JS and Firebase.</p>
    </div>
    </div>
  </div>;
};

export default Experience;
