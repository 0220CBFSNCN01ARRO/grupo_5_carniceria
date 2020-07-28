import React from 'react';
import PropTypes from 'prop-types'

NavbarItem.propTypes = {
    icon: PropTypes.string.isRequired,
    color : PropTypes.string,
    value: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
};
NavbarItem.defaultProps = {
    color: "primary"
}

function NavbarItem(props) {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href={props.url} id="alertsDropdown">
            <i className={`fas ${props.icon} fa-fw`}></i>
            {/* <!-- Counter - Alerts --> */}
            <span className={`badge badge-${props.color} badge-counter`}>{props.value}</span>
        </a>
    </li>
    );
}

export default NavbarItem;