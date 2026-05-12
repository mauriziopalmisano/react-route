import { NavLink, Outlet } from 'react-router-dom'


function MainLayout() {

    const handleActive = ({ isActive }) => isActive ? "nav-link my-active" : "nav-link";

    return (
        <>
            <header>
                <nav className="navbar  bg-body-tertiary">
                    <div className="container-fluid">
                        <div className='d-flex justify-content-center gap-2'>
                            <NavLink className={handleActive}  to='/'>Home</NavLink>
                            <NavLink className={handleActive} to='chi_siamo'>Chi Siamo</NavLink>
                            <NavLink className={handleActive} to='prodotti'>Prodotti</NavLink>
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