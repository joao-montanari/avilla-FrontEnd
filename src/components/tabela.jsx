import React from 'react'
import { useState } from 'react'
import Styles from '@/styles/module/Tabela.module.css'

import Popup from './popup'

export default function Tabela(props) {
    return (
        <div className={Styles.main}>
            <h1 className='text-2xl m-2'>
                {props.dia_semana}
            </h1>
            <h3 className='m-2 text-lg'>
                Data: 24/02/2023
            </h3>
            <table class="w-full text-sm text-left">
                <thead class="text-base text-gray-800 uppercase border dark:border-gray-700">
                    <tr>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            Horário
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            ADM1 (M)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            ADM2 (T)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            DS3 (T)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            DS4 (T)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            DS5 (M)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            DS6 (M)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            DS7 (T)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            MD3 (T)
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            MEC 1º Ano
                        </th>
                        <th scope="col" class="px-6 py-3 border-r dark:border-gray-700 text-center bg-white">
                            MEC 2º Ano
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            07:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center justify-center my-1.5">
                            <button
                                className='w-5/6 h-12 border border-gray-900 rounded text-sm m-auto'
                                onClick={() => props.setTrigger(true)}
                            >
                                <p>Aula</p>
                                <p>Instrutor</p>
                            </button>
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                        
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-zinc-50 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            08:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            09:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-zinc-50 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            10:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            11:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">

                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-zinc-50 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            12:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            13:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-zinc-50 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            14:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            15:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-zinc-50 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            16:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                    <tr class="bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-lg text-gray-900 border-r dark:border-gray-700 text-center">
                            17:00
                        </th>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                        <td class="border-r dark:border-gray-700 text-center">
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}