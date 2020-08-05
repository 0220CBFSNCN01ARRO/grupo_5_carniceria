import React from 'react';
import avatar from "../assets/images/dummy-avatar.jpg"
import NavbarItem from './NavbarItem'
const links = [
    {
        icon: "fa-bell",
        value: 3,
        color: "warning",
        url: "/"
    },
    {
        icon: "fa-envelope",
        value: 7,
        color: "danger",
        url: "/"
    }
]


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
            {
                // links.map(link => <NavbarItem icon= {link.icon} value={link.value} color={link.color} url={link.url} /> )
                links.map((onelink,i) => <NavbarItem key={i}{...onelink} /> )
            }

            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                    <img className="img-profile rounded-circle" src= {avatar} width="60" alt= "avatar"/>
                </a>
            </li>

        </ul>

    </nav>
    );
}

export default Navbar;