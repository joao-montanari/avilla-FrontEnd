import Styles from '@/styles/Agenda.module.css'
import Head from 'next/head'

import Header from '@/components/Header'
import Tabela from '@/components/tabela'

export default function Agenda() {
    return (
        <>
            <Head>
                <title>Avilla | Agenda</title>
            </Head>
            <main className={Styles.main}>
                <Header/>
                <h1 className={Styles.title}>
                    Agenda do dia
                </h1>
                <Tabela/>
            </main>
        </>
    )
}