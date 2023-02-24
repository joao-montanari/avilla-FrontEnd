
export default function Popup(){
    return (
        <div className='max-w-xl h-72 bg-gray-200 p-4 rounded-xl shadow-2xl'>
            <div className="flex border border-gray-900 items-center">
                <h1 className="text-3xl">
                    Aula: React
                </h1>
                <div className="w-5 h-5 border border-gray-900"></div>
            </div>
            <br/>
            <div className="w-52 h-3.5 bg-gray-500 rounded-lg"></div>
            <h3 className="text-lg">
                Instrutor: Vanessa Mendes Vieira da Silva
            </h3>
            <label>
                Data: 24/02/2023
            </label>
            <br/><br/>
            <h3 className="text-lg">
                Horário:
            </h3>
            <ul className="list-disc pl-8">
                <li>Início: 13:00</li>
                <li>Término: 16:00</li>
            </ul>
        </div>
    )
}