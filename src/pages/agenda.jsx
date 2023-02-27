import Styles from '@/styles/Agenda.module.css'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import Header from '@/components/Header'
import Tabela from '@/components/tabela'
import Popup from '@/components/popup'

export async function getStaticProps() {
    const data = await fetch('http://localhost:8000/schedule/')
    const agenda = await data.json()

    return {
        props : { agenda }
    }
}

export default function Agenda({ agenda }) {
    const [verAula, setVerAula] = useState(false);
    const carrossel = useRef();
    const [width, setWidth] = useState(0);

    const [segunda, setSegunda] = useState([]);
    const [terca, setTerca] = useState([]);
    const [quarta, setQuarta] = useState([]);
    const [quinta, setQuinta] = useState([]);
    const [sexta, setSexta] = useState([]);

    useEffect(() => {

        agenda.map(agendamento => {
            var data = new Date(agendamento.data);
            var week = data.getDay();

            if (week === 0 && !(segunda.includes(agendamento))) {
                segunda.push(agendamento)
                setSegunda(segunda)
            } else if (week === 1 && !(terca.includes(agendamento))) {
                terca.push(agendamento)
                setTerca(terca)
            } else if (week === 2 && !(quarta.includes(agendamento))) {
                quarta.push(agendamento)
                setQuarta(quarta)
            } else if (week === 3 && !(quinta.includes(agendamento))) {
                quinta.push(agendamento)
                setQuinta(quinta)
            } else if (week === 4 && !(sexta.includes(agendamento))) {
                sexta.push(agendamento)
                setSexta(sexta)
            }
        })

        var data = new Date();
        // O primeiro dia é o dia do mês, menos o dia da semana
        var primeiro = data.getDate() - data.getDay(); 
        var primeiroDia = new Date(data.setDate(primeiro));
        var ultimoDia = new Date(data.setDate(data.getDate() + 6));
        console.log(primeiroDia)

        const dia = data.getDate()
        const mes = data.getMonth()
        console.log(dia, mes)

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
                            
                            <Tabela setTrigger={setVerAula} dia_semana={'Segunda-Feira'} aulas={segunda}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Terça-Feira'} aulas={terca}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Quarta-Feira'} aulas={quarta}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Quinta-Feira'} aulas={quinta}/>
                            <Tabela setTrigger={setVerAula} dia_semana={'Sexta-Feira'} aulas={sexta}/>

                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </>
    )
}