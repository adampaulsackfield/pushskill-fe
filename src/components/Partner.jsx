import React from 'react'
import { StyledPartner } from '../styles/Partner.style'

const Partner = () => {
  return (
    <StyledPartner>
        <main>
            <section>
            <h1>Partner's Name</h1>
                <div>
                    <form>
                        <input type="text" placeholder='say something...' />
                    </form>
                </div>
            </section>
        </main>
    </StyledPartner>
  )
}

export default Partner