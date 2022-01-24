import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/pokemons">Pokemons</NavLink>
            </li>
            <li>
                <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li>
                <NavLink to="/about">Favorites</NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default Nav;