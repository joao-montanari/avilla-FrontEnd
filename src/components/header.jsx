import Image from "next/image"

import Styles from "@/styles/module/Header.module.css"

export default function Header() {
    return (
        <div className={Styles.container}>
            <Image
                className={Styles.logo}
                src={'/img/logo_bosch.png'}
                width={180}
                height={45}
                alt='Logo da Bosch'
            />
            <select name="" id="" className={Styles.comboBox}>
                <option value="">Português - BR</option>
                <option value="">Espanhol</option>
                <option value="">Inglês</option>
            </select>
        </div>
    )
}