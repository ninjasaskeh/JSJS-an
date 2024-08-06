import { useState } from 'react'


const Header = ({name}) => {
  return(<h1>Hello {name ? name : 'world'}</h1>)
}

function App() {
  const students = ['juki', 'panjul', 'doni', 'samsul'];
            const [likes, setLikes] = useState(0)

            function handleClick() {
                setLikes(likes + 1 )
            }
            return( 
                <>
                    <Klasik name="klasik" />
                    <Header/>
                    <Header name='gugun' />
                    <ul>
                        {
                            students.map((student) => (
                                <li key={student}>{student}</li>
                            ))
                        }
                    </ul>
                    <button onClick={handleClick}>Like ({likes})</button>
                </>
            )
}

export default App
