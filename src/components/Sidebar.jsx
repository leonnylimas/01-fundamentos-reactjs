import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar (){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=50"
             />

             <div className={styles.profile}>
               <Avatar hasBorder src="https://github.com/leonnylimas.png"/>
                <strong>Leone Lima</strong>
                <span>Web Developer</span>
             </div>

             <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil 
                </a>
             </footer>
        </aside>
   
    )
}