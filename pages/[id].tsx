import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import axios from './../helpers/api'
import { API_BASE_URL } from './../helpers/constants'
import styles from './page.module.scss'

interface Props {}

export default function Page({ data: { image, name, biography } }: Props): ReactElement {
  return (
    <div className={styles.root}>
      <div data-testid="statsCard" className={styles.wrapper}>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsWrapper}>
            <div className={styles.name}>{name}</div>
            <h5 className={styles.occupation}>
              First Appearance:{' '}
              <h5 data-testid="firstAppearance" className={styles.value}>
                {biography['first-appearance']}
              </h5>
            </h5>
            <h5 className={styles.occupation}>
              Publisher:{' '}
              <h5 data-testid="publisher" className={styles.value}>
                {biography.publisher}
              </h5>
            </h5>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={`${image.url}`} width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const data = await (await axios.get(`${API_BASE_URL}/${id}`)).data
  return { props: { data } }
}
