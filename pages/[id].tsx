import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import axios from './../helpers/api'
import { API_BASE_URL } from './../helpers/constants'
import styles from './page.module.scss'

interface Props {}

export default function Page({
  data: {
    image,
    name,
    work: { occupation },
  },
}: Props): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={`${image.url}`} width={300} height={300} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.occupation}>{occupation}</div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const data = await (await axios.get(`${API_BASE_URL}/${id}`)).data
  return { props: { data } }
}
