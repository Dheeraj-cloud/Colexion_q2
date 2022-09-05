import Head from 'next/head'
import styles from '../styles/Home.module.css'
const Blog = ()=>{
    return <> 
         <Head>
            <title>Blog</title>
           </Head>
           <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Blog page
        </h1>
      </main>
    </>
    
}

export default Blog