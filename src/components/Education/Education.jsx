import React, {useEffect} from 'react';
import styles from './education.module.css';
import btech from '../pngs/btech.png'
import college from '../pngs/college.png'
import school from '../pngs/school.png'

import Aos from 'aos'
import "aos/dist/aos.css"

const Education = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

  return <div className={styles.experience} id="education">
      <div class={styles.title}>
        <h1>Education</h1>
    </div>

    {/* matter */}
    <div className={styles.eduQu}>
        <div className={styles.btech} data-aos="fade-right">
            <div className={`${styles.btech} ${styles.box}`}>
                <img src={btech} alt="Image" className={styles.image} />
                <h1>B-Tech</h1>
                <h3>Computer Science & Engineering</h3>
                <h4>Vellore Institute of Technology, Amaravathi</h4>
                <p>Passing Year: 2023</p>
                <p>CGPA: 8.48 (till 4th Sem)</p>
            </div>
        </div>

        <div className={styles.btech} data-aos="zoom-out">
            <div className={`${styles.btech} ${styles.box}`}>
                <img src={college} alt="Image" className={styles.image} />
                <h1>Intermediate</h1>
                <h3>State Board of Intermediate</h3>
                <h4>Narayana, Vijayawada</h4>
                <p>Passing Year: 2019</p>
                <p>CGPA: 9.32</p>
            </div>
        </div>

        <div className={styles.btech} data-aos="fade-left">
            <div className={`${styles.btech} ${styles.box}`}>
                <img src={school} alt="Image" className={styles.image} />
                <h1>Schooling</h1>
                <h3>State Board</h3>
                <h4>Narayana, Repalle</h4>
                <p>Passing Year: 2017</p>
                <p>CGPA: 9.8 </p>
            </div>
        </div>
    </div>
  </div>
};

export default Education;
