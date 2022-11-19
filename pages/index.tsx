import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/AppBar'
import Head from 'next/head'
import { PingButton } from '../components/PingButton'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>Trakify</title>
        <meta
          name="description"
          content="Trakify"
        />
      </Head>
        <AppBar />
        <div className={styles.AppBody}>
          <PingButton/>
        </div>
    </div>
  );
}

export default Home;