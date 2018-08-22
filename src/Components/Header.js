import React from "react";
import PropTypes from "prop-types";

const Header = ({ src, onClick, children }) => {
    return (
        <div id="header">
            <h2 >
                { children }
                <a href="# ">
                    <img alt="" className="IconStyle" src={ src } onClick={ onClick } />
                </a>
            </h2>
        </div>
    )
};

Header.propTypes = {
    src: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default Header;