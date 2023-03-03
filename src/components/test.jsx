 export default function Test() {
    const lista = [
        'ola mundo',
        'ola pessoas',
        'ola planeta',
        'ola sol',
        'ola lua'
    ]

    return(
        <div className="w-auto h-auto m-auto border border-gray-900">
            <div className="border-b border-black w-auto h-10 flex">
                <ul className="flex">
                    <li className="border-r border-black h-full w-48 text-center py-1.5">
                        Horários
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        ADM1 (M)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        ADM2 (T)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        DS3 (T)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        DS4 (T)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        DS5 (M)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        DS6 (M)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        DS7 (T)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        MD3 (T)
                    </li>
                    <li className="border-r border-black h-full w-28 text-center py-1.5">
                        MEC 1º Ano
                    </li>
                    <li className="h-full w-28 text-center py-1.5">
                        MEC 2º Ano
                    </li>
                </ul>
            </div>
            <ul className="border-r border-black h-full w-48 grid">
                <li className="border-b border-black text-center py-2">
                    7:30
                </li>
                <li className="border-b border-black text-center py-2">
                    08:00
                </li>
                <li className="border-b border-black text-center py-2">
                    09:00
                </li>
                <li className="border-b border-black text-center py-2">
                    10:00
                </li>
                <li className="border-b border-black text-center py-2">
                    11:00
                </li>
                <li className="border-b border-black text-center py-2">
                    12:00
                </li>
                <li className="border-b border-black text-center py-2">
                    13:00
                </li>
                <li className="border-b border-black text-center py-2">
                    14:00
                </li>
                <li className="border-b border-black text-center py-2">
                    15:00
                </li>
                <li className="border-b border-black text-center py-2">
                    16:00
                </li>
                <li className="text-center py-2">
                    17:00
                </li>
            </ul>
        </div>
    )
 }