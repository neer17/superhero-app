import * as React from 'react'
import Image from 'next/image'

import styles from './Card.module.scss'

export interface IAppProps {}

export default function Card({ superheroData }) {
  // console.info(superheroData)
  return (
    <div className={styles.cardRoot}>
      <div className={styles.image_wrapper}>
        <Image src={`${superheroData.image.url}`} width={500} height={500} />
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.name}>{superheroData.name}</div>
        <div className={styles.aliases}> {superheroData.biography.aliases[0]}</div>
      </div>
    </div>
  )
}
