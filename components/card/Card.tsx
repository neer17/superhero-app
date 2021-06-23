import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.scss'

const MARVEL_LOGO = 'Marvel Comics'
const DC_LOGO = 'DC Comics'
const DARKHORSES_LOGO = 'Dark Horse Comics'
const HEROES_LOGO = 'NBC - Heroes'
const NOT_FOUND = 'NOT FOUND'

function getLogos(publisher: string) {
  switch (publisher) {
    case MARVEL_LOGO:
      return {
        url: '/Marvel_Logo.svg.png',
        width: 50,
        height: 10,
      }
    case DC_LOGO:
      return {
        url: '/DC_Comics_logo.png',
        width: 20,
        height: 20,
      }
    case DARKHORSES_LOGO:
      return {
        url: '/dark_horse_comics.svg',
        width: 20,
        height: 20,
      }
    case HEROES_LOGO:
      return {
        url: '/dark_horse_comics.svg',
        width: 20,
        height: 20,
      }
    default:
      return {
        url: '/DC_Comics_logo.png',
        width: 20,
        height: 20,
      }
  }
}

export interface IAppProps {}

export default function Card({
  superheroData: {
    id,
    image,
    name,
    biography: { publisher },
  },
}: any) {
  return <Usage id={id} image={image} name={name} publisher={publisher} />
}

const Usage = ({ id, image, name, publisher }: any) => {
  const logo = getLogos(publisher)

  return (
    <Link href={`/${id}`}>
      <a>
        <div data-test-id="card-root" className={styles.cardRoot}>
          <div className={styles.image_wrapper}>
            <Image className={styles.image} src={`${image.url}`} width={300} height={300} />
          </div>
          <div className={styles.text_wrapper}>
            <div className={styles.name}>{name}</div>
            {/* <div className={styles.aliases}>{biography.aliases[0]}</div> */}
          </div>

          <div className={styles.logo}>
            <Image src={logo.url} width={logo.width} height={logo.height} />
          </div>
        </div>
      </a>
    </Link>
  )
}
