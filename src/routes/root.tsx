import { Outlet } from "react-router-dom";

const  Root = () => {
    return (
        <>
            <div id="sidebar">
                <h1>Menu</h1>
                <nav>
                    <ul>
                        <li><a href={'/'}>Inicial</a></li>
                        <li><a href={'/noticias/'}>Noticias</a></li>
                        <li><a href={'/produto/'}>Produtos</a></li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Root;