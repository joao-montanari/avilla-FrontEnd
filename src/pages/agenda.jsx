import Styles from '@/styles/Agenda.module.css'
import Head from 'next/head'
import { motion } from 'framer-motion'

import Header from '@/components/Header'
import Tabela from '@/components/tabela'

export default function Agenda() {
    return (
        <>
            <Head>
                <title>Avilla | Agenda</title>
            </Head>
            <main className='text-center bg-neutral-300'>
                <Header/>
                <h1 className='text-5xl p-10'>
                    Agenda da Semana
                </h1>
                <div className='w-full max-w-screen-2xl m-auto min-h-100 flex item-center justify-center border-2 border-black'>
                    <motion.div className='cursor-grab overflow-hidden' whileTap={{ cursor:"grabbing" }}>
                        <motion.div
                            className='flex'
                            drag="x"
                        >
                            
                            <Tabela dia_semana={'Segunda-Feira'} />
                            <Tabela dia_semana={'Terça-Feira'} />
                            <Tabela dia_semana={'Quarta-Feira'} />
                            <Tabela dia_semana={'Quinta-Feira'} />
                            <Tabela dia_semana={'Sexta-Feira'} />

                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </>
    )
}