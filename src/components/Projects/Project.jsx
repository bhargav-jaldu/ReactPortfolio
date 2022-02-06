import React from 'react';
import styles from './project.module.css'
import weShare from '../pngs/weShare.png'
import memories from '../pngs/memories.png'
import movie from '../pngs/movie.png'

const Project = () => {
  return <div className={styles.container} id="pro">
      <div class={styles.title}>
        <h1>Projects</h1>
    </div>

    {/* projects */}
    <div className={styles.projects}>
        <div className={styles.box}>
            <div className={styles.image}>
                <img src={weShare} alt="weShare Image" />
            </div>
            <div className={styles.content}>
                    <h2>weShare</h2>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    Build a Social Media Application, Where User can Post, Like, Comment and Chat with other People .
                    </h4>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    Implemented CRUD Operations on a Post.
                    </h4>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    Implemented Routing Functionality, Used Socket.io to enable real-time communication.
                    </h4>

                    <a href="https://github.com/bhargav-jaldu/weShare" target="_blank"><button className={styles.button}>Code</button></a>
                </div>
        </div>

        <div className={styles.box}>
            <div className={styles.image}>
                <img src={memories} alt="Memories Image" />
            </div>
            <div className={styles.content}>
                    <h2>Memories</h2>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    The App is called ”Memories” and it is a simple social media app that allows users to post interesting events that happened
in their lives.
                    </h4>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    Used Ajax For Chat Functionality.
                    </h4>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    Used MySQL Database to Store Post Details.
                    </h4>

                    <a href="https://github.com/bhargav-jaldu/memories-app" target="_blank"><button className={styles.button}>Code</button></a>
                    <a href="https://php-memories.000webhostapp.com/" target="_blank"><button className={styles.button}>Code</button></a>
                </div>
        </div>

        <div className={styles.box}>
            <div className={styles.image}>
                <img src={movie} alt="Movies Image" />
            </div>
            <div className={styles.content}>
                    <h2>Movies App</h2>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    Getting Data From Movie db API
                    </h4>
                    <h4><i class="fas fa-chevron-right"></i>&nbsp;
                    Functionality: Search and Play a video.
                    </h4>

                    <a href="https://github.com/bhargav-jaldu/movie-app" target="_blank"><button className={styles.button}>Code</button></a>
                    <a href="https://bhargav-jaldu.github.io/movie-app/" target="_blank"><button className={styles.button}>Code</button></a>
                </div>
        </div>
    </div>
  </div>;
};

export default Project;
