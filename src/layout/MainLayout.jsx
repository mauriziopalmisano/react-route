import { NavLink, Outlet } from 'react-router-dom'


function MainLayout() {

    const handleActive = ({ isActive }) => isActive ? "nav-link text-white my-active" : "text-white nav-link";

    return (
        <>
            <div className='d-flex flex-column min-vh-100'>
                <header>
                    <nav className="navbar  bg-dark">
                        <div className="container-fluid">
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <img className='img-navbar' src='/navbar-logo.png' alt="logo" />
                                <NavLink className={handleActive} to='/'>Home</NavLink>
                                <NavLink className={handleActive} to='chi_siamo'>Chi Siamo</NavLink>
                                <NavLink className={handleActive} to='prodotti'>Prodotti</NavLink>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className='flex-grow-1'>
                    <Outlet />
                </main>
                <footer className='border-top border-primary bg-dark border-3 py-2'>
                    <div className="container text-center">
                        <small className="text-white">© 2026 FakeShop</small>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default MainLayout