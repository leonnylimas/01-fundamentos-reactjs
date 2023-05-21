import { Post } from "./Post"
import { Header } from "./components/Header"
import './style.css'

export function App() {
   return (
      <div>
        <Header />
        <Post 
          author="Leone Lima" 
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem illum maxime temporibus molestiae facilis repudiandae vitae itaque veniam impedit reiciendis nostrum non, sunt quisquam aliquid? Vitae impedit consequuntur doloremque nihil?" 
        />
        <Post
          author="Lael Lucca"
          content="Um post muito legal"
        />
       
      </div>
  )
}




