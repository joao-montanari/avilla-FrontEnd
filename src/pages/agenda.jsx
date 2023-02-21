import Styles from '@/styles/Agenda.module.css'
import Head from 'next/head'

import Header from '@/components/Header'

export default function Agenda() {
    return (
        <>
            <Head>
                <title>Avilla | Agenda</title>
            </Head>
            <main className={Styles.main}>
                <Header/>
            </main>
        </>
    )
}