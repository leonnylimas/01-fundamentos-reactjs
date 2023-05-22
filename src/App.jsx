import { Post } from "./Post"
import { Header } from "./components/Header"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
   return (
      <div>
        <Header />
        
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
          <Post
            author="Leone Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, iure quae earum porro perferendis totam doloribus iste delectus quidem ratione mollitia voluptatum ab atque, est aliquam cum, aperiam maiores." 
          />
          <Post
            author="Lael Lucca"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, iure quae earum porro perferendis totam doloribus iste delectus quidem ratione mollitia voluptatum ab atque, est aliquam cum, aperiam maiores." 
          />
          </main>
        </div>
       
      </div>
  )
}






