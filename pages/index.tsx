import Head from 'next/head'
import Image from 'next/image'

import Card from '../components/card/Card'

import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.home_root}>
      <section className={styles.left_part}></section>
      <section className={styles.right_part}>
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} />
        ))}
      </section>
    </div>
  )
}
