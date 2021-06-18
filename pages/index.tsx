// import Head from 'next/head'
// import Image from 'next/image'
import { GetStaticProps } from 'next'

import axios from './../helpers/api'
import Card from '../components/card/Card'

import { API_BASE_URL } from '../helpers/constants'

import styles from './index.module.scss'

export default function Home({ data }: any) {
  return (
    <div className={styles.home_root}>
      <section className={styles.left_part}></section>
      <section className={styles.right_part}>
        {data?.map((item: any) => (
          <Card key={item.id} superheroData={item} />
        ))}
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = []

  for (let i = 1; i < 2; i++) {
    const response = await (await axios.get(`${API_BASE_URL}/${i}`)).data
    data.push(response)
  }
  
  return {
    props: { data },
  }
}
