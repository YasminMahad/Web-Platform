import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Transaction from './Transaction'

function Layout() {
    return (
        <div>
            <section className='layout'>

                <div className='header' >
                    <Header />

                </div>
                <div className='layout'>
                    <Sidebar />
                </div>

                
                <main className='content'>
                    <Transaction />
                </main>
            </section>
        </div>
    )
}

export default Layout