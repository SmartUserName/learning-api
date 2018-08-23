import React from 'react';
import PropTypes from 'prop-types';
import { urlHomeImg } from "./External-imgs.js";
import { Link } from "react-router-dom";

const Header = ({ src, onClick, children }) => {
    return (
        <div id="header">
            <h2 >
                <Link to="/">
                    <img alt="Home" className="IconStyle" src={urlHomeImg} />
                </Link>
                { children }
                    <img alt="refresh" className="IconStyle" src={ src } onClick={ onClick } />
            </h2>
        </div>
    )
};

Header.propTypes = {
    src: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Header;