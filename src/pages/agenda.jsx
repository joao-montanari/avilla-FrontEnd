import Styles from '@/styles/Agenda.module.css'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import Header from '@/components/Header'
import Tabela from '@/components/tabela'
import Popup from '@/components/popup'

export default function Agenda() {
    const [verAula, setVerAula] = useState(false)
    const carrossel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth((carrossel.current?.scrollWidth - carrossel.current?.offsetWidth) + 25)
    }, [])

    return (
        <>
            <Head>
                <title>Avilla | Agenda</title>
            </Head>
            <main className='text-center mb-14'>
                <Header/>
                <Popup trigger={verAula} setTrigger={setVerAula}/>
                <h1 className='text-5xl p-10'>
                    Agenda da Semana
                </h1>
                <div className='w-full max-w-screen-2xl m-auto min-h-100 flex item-center justify-center border-2 border-black bg-gray-100'>
                    <motion.div 
                        className='cursor-grab overflow-hidden' 
                        whileTap={{ cursor:"grabbing" }}
                        ref={carrossel}
                    >
                        <motion.div
                            className='flex'
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                        >
                            
                            <Tabela setTrigger={setVerAula} dia_semana={'Segunda-Feira'}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Terça-Feira'}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Quarta-Feira'}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Quinta-Feira'}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Sexta-Feira'}/>

                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </>
    )
}