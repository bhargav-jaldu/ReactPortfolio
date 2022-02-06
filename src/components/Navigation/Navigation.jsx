import React, {useState} from 'react'
import styles from './nav.module.css'

const Navigation = () => {

    // const [showBurger, setShowBurger] = useState(false);
    const [showTimes, setShowTimes] = useState(false);
    const [showUl, setShowUl] = useState(false);

    const [home, setHome] = useState(true);
    const [education, setEducation] = useState(false);
    const [experience, setExperience] = useState(false);
    const [skills, setSkills] = useState(false);
    const [acheivements, setAcheivement] = useState(false);
    const [project, setProject] = useState(false);
    const [contact, setContact] = useState(false);

    const handleBurger = () => {
        // setShowBurger(false);
        // setShowTimes(true)
        setShowUl(!showUl)
        setShowTimes(true)
    }

    const handleTimes = () => {
        // setShowBurger(true);
        setShowTimes(false);
        // setShowUl(false)
        setShowUl(!showUl)
    }

    // const handleHome = () => {
    //     setHome(true);
    // }
    

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <div className={styles.text_typing}>
                    <h2>Portfolio</h2>
                </div>

            </div>

            {/* part2 */}
            <ul className={showUl ? styles.show : ''}>
                <li><a href="/#"> &nbsp;Home</a></li>
                <li><a href="#education" > &nbsp;Education</a></li>
                <li><a href="#exp"  > &nbsp;Experience</a></li>
                <li><a href="#skills" > &nbsp;Skills</a></li>
                <li><a href="#ace" > &nbsp;Acheiments</a></li>
                <li><a href="#pro" > &nbsp;Projects</a></li>
                <li><a href="#con"> &nbsp;Contact</a></li>
            </ul>
                {/* <button className={showBurger ? `${styles.burger} ${styles.show}` : styles.burger} ={handleBurger}><i class="fas fa-bars"></i></button> */}
                <button className={showTimes ? styles.times : `${styles.times} ${styles.show}`} onClick={handleBurger}><i className="fas fa-bars"></i></button>
                <button className={showTimes ? `${styles.times} ${styles.show}` : styles.times} onClick={handleTimes}><i class="fas fa-times"></i></button>   
        </nav>
    )
}

export default Navigation
