// import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import Card from '../components/card/Card'

import { API_BASE_URL } from '../helpers/constants'
import staticData from './../data/data.json'

import styles from './index.module.scss'
import router from 'next/router'

export default function Home({ data }: any) {
  const [email, setEmail]: [string, any] = useState('')

  useEffect(() => {
    const userEmail = localStorage.getItem('email')
    if (userEmail != null && userEmail.length > 0) setEmail(userEmail)
    else router.replace('/login')
  }, [])

  const logout = () => {
    localStorage.clear()
    router.replace('/login')
  }

  return (
    <>
      {email.length == 0 ? (
        <div>LOADER</div>
      ) : (
        <div id={'index_page_root'} className={styles.home_root}>
          <section className={styles.left_part}>
            <div className={styles.detailsContainer}>
              <div className={styles.imageContainer}>
                <Image src={'/user_profile.png'} width={80} height={80} />
              </div>
              <div className={styles.details}>
                <h2 className={styles.nameContainer}>Neeraj Sewani</h2>
                <h2 className={styles.emailContainer}>{localStorage.getItem('email')}</h2>
              </div>
            </div>

            <h5 className={styles.logoutBtn} onClick={logout}>
              Logout
            </h5>
          </section>
          <section className={styles.right_part}>
            {data?.map((item: any) => (
              <Card key={item.id} superheroData={item} />
            ))}
          </section>
        </div>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { data: staticData },
  }
}
