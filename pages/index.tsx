// import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import Card from '../components/card/Card'

import { API_BASE_URL } from '../helpers/constants'
import staticData from './../data/data.json'

import styles from './index.module.scss'

export default function Home({ data }: any) {
  return (
    <div id={'index_page_root'} className={styles.home_root}>
      <section className={styles.left_part}>
        <div className={styles.detailsContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={'https://img.icons8.com/bubbles/2x/user-male.png'}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.details}>
            <h2 className={styles.nameContainer}>Neeraj Sewani</h2>
            <h2 className={styles.emailContainer}>test@example.com</h2>
          </div>
        </div>

        <h5 className={styles.logoutBtn}>Logout</h5>
      </section>
      <section className={styles.right_part}>
        {data?.map((item: any) => (
          <Card key={item.id} superheroData={item} />
        ))}
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { data: staticData },
  }
}
