// import Head from 'next/head'
// import Image from 'next/image'
import { GetStaticProps } from 'next'

import Card from '../components/card/Card'

import { API_BASE_URL } from '../helpers/constants'
import staticData from './../data/data.json'

import styles from './index.module.scss'

export default function Home({ data }: any) {
  return (
    <div id={'index_page_root'} className={styles.home_root}>
      <section className={styles.left_part}></section>
      <section  className={styles.right_part}>
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
