import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'
import { Post } from "./components/Post"


export function App() {
   return (
      <div>
        <Header />
        
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="Leone Lima"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit non accusantium in, amet voluptatem distinctio nesciunt modi nam cumque nisi ex quasi quas quibusdam at porro voluptatibus necessitatibus. Nostrum!"
            />

            <Post
              author="Leone Lima"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit non accusantium in, amet voluptatem distinctio nesciunt modi nam cumque nisi ex quasi quas quibusdam at porro voluptatibus necessitatibus. Nostrum!"
            />
          </main>
        </div>
       
      </div>
  )
}








