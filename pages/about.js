import styles from '../styles/Home.module.css'
import Head from 'next/head'
const About = ()=>{
    return (
        <> 
           <Head>
            <title>About</title>
           </Head>
           <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to about page
        </h1>
      </main>
           
        </>
        
       
    )
}

export default About