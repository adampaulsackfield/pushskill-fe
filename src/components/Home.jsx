import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { StyledHome } from '../styles/Home.style'

const Home = ({token}) => {
    const [name, setName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:9090/api/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => setName(res))
    }, [])

    console.log('name:', name)

  return (
    <StyledHome>
        <main>
            <header>
                <h1>Welcome back {'${user}'}</h1>
            </header>
            <div>
                <h3>Here's some people we think you'll love!</h3>
                <section>
                    <div>
                        <img src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip" alt="cat" />
                        <p>Here's some info about the person you'll like</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip" alt="cat" />
                        <p>Here's some info about the person you'll like</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip" alt="cat" />
                        <p>Here's some info about the person you'll like</p>
                    </div>
                </section>
            </div>
        </main>
    </StyledHome>
  )
}

export default Home
