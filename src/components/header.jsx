import Image from "next/image"

import Styles from "@/styles/module/Header.module.css"

export default function Header() {
    return (
        <div className='w-full h-24 flex items-center bg-white shadow-xl'>
            <div className={Styles.child}>
                <Image
                    className={Styles.logo}
                    src={'/img/logo_bosch.png'}
                    width={180}
                    height={45}
                    alt='Logo da Bosch'
                />
            </div>
            <div className={Styles.child}>
                <select name="" id="" className={Styles.comboBox}>
                    <option value="1">Português - BR</option>
                    <option value="2">Espanhol</option>
                    <option value="3">Inglês</option>
                </select>
            </div>
        </div>
    )
}