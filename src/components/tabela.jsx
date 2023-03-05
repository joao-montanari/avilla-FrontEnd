import React from 'react'
import { useState } from 'react'
import Styles from '@/styles/module/Tabela.module.css'

import Popup from './popup'

export default function Tabela(props) {
    const [aulas, setAulas] = useState([]);

    props.aulas.map(agendamento => {
        if (agendamento.data ===  props.dia && !(aulas.includes(agendamento))) {
            aulas.push(agendamento);
            setAulas(aulas);
        }
    })

    console.log(aulas);

    return (
        <div className="w-max h-auto m-auto border border-gray-900 text-center m-10">
            <h1 className="text-2xl m-2">
                {props.dia_semana}
            </h1>
            <h3 className="text-lg m-2">
                {props.dia}
            </h3>
            <div className="border-b border-t border-black w-auto h-12 flex">
                <ul className="flex">
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        Horários
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        ADM1 (M)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        ADM2 (T)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        DS3 (T)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        DS4 (T)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        DS5 (M)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        DS6 (M)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        DS7 (T)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        MD3 (T)
                    </li>
                    <li className="border-r border-black h-full w-32 text-center py-3 font-bold bg-gray-200">
                        MEC 1º Ano
                    </li>
                    <li className="h-full w-32 text-center py-3 font-bold bg-gray-200">
                        MEC 2º Ano
                    </li>
                </ul>
            </div>
            <div className="flex">
                <ul className="border-r border-black h-full w-32 grid">
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        7:30
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        08:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        09:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        10:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        11:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        12:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        13:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        14:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        15:00
                    </li>
                    <li className="border-b border-black text-center py-4 font-bold text-xl bg-gray-200">
                        16:00
                    </li>
                    <li className="text-center py-4 font-bold text-xl bg-gray-200">
                        17:00
                    </li>
                </ul>
                <div className="flex">
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "ADM1 (M)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "ADM2 (T)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "DS3 (T)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "DS4 (T)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "DS5 (M)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "DS (6)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "DS7 (T)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "MD3 (T)" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className="w-32 border-r border-black">
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "MEC 1 Ano" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                    <div className='w-32'>
                        {
                            aulas.map((aula) =>(
                                (
                                    aula.turma == "MEC 2 Ano" ?
                                        <div className='border border-gray-900 text-center'>
                                            <p className='text-xs'>
                                                {aula.instrutor}
                                            </p>
                                            <p className='text-xs'>
                                                {aula.sala}
                                            </p>
                                        </div>
                                : null )
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}