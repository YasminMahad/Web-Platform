import React from 'react'

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
                    <Outlet />
                </main>
            </section>
        </div>
    )
}

export default Layout