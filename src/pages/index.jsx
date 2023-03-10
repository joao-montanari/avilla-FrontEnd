import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Header from '@/components/Header'
import Tabela from '@/components/tabela'
import Card from '@/components/card'
import Popup from '@/components/popup'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Avilla | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <h1>Ola Mundo!</h1>
        <Popup/>
      </main>
    </>
  )
}
