import { Link, Outlet } from 'react-router-dom'


function MainLayout() {
    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <div className='d-flex justify-content-center gap-2'>
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='chi_siamo'>Chi Siamo</Link>
                            <Link className="nav-link" to='prodotti'>Prodotti</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </>
    )
}
export default MainLayout