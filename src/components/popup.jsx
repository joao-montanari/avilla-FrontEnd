import Image from "next/image"

export default function Popup(props){
    return (props.trigger) ? (
        <div className='w-96 max-w-xl min-h-72 bg-gray-200 p-4 rounded-xl shadow-2xl border border-gray-900 fixed text-left'>
            <div className="relative">
                <div className="items-center">
                    <button 
                        className='float-right'
                        onClick={() => props.setTrigger(false)}
                    >
                        <Image
                            src={'/img/close.png'}
                            width={25}
                            height={25}
                            alt='close'
                        />
                    </button>
                    <h1 className="text-3xl">
                        Aula: Treinamento 5s
                    </h1>
                </div>
                <br/>
                <div className="w-52 h-3.5 bg-gray-500 rounded-lg"></div>
                <h3 className="text-lg">
                    Instrutor: Vanessa Mendes Vieira da Silva
                </h3>
                <p>
                    Data: 24/02/2023
                </p>
                <p>
                    Sala: BTC-01
                </p>
                <br/>
                <h3 className="text-lg">
                    Horário:
                </h3>
                <ul className="list-disc pl-8">
                    <li>Início: 13:00</li>
                    <li>Término: 16:00</li>
                </ul>
            </div>
        </div>
    ) : ""
}