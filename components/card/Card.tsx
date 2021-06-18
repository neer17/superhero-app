import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.scss'

export interface IAppProps {}

export default function Card({ superheroData: { id, image, name, biography } }: any) {
  return <Usage id={id} image={image} name={name} />
}

const Usage = ({ id, image, name, biography }: any) => {
  return (
    <div className={styles.cardRoot}>
      <div className={styles.image_wrapper}>
        <Link href={`/${id}`}>
          <a>
            <Image className={styles.image} src={`${image.url}`} width={300} height={300} />
          </a>
        </Link>
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.name}>{name}</div>
        {/* <div className={styles.aliases}>{biography.aliases[0]}</div> */}
      </div>
    </div>
  )
}
