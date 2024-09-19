import HomePage from "./HomePage";
import About from './About';
import Products from './Products';
import Navbar from "./Navbar";
import { abstractRender } from "./Abstract";

Navbar()
abstractRender()
const routes = {
    '/' : HomePage(),
    '/about' : About(),
    '/products' : Products(),
}

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
}

HomePage()
