import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousels from '../components/carousel'
import Youtube from '../components/youtube'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Home Page
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
       
       <Carousels/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Youtube/>

       

      </main>
    </div>
  )
}
