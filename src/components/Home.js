import React from 'react'

const About = () => {
    const css = {
        background: " #222",
        padding: " 0 15px"
    };
    const submenu = {
        position: "absolute",
        backgroundcolor: "black",
        display: " none",

    }
    return (
        <nav style={css}>
            <ul class="menu">
                <li class="logo"><a href="#">Creative Mind Agency</a></li>
                <li class="item"><a href="#">Home</a></li>
                <li class="item"><a href="#">About</a></li>
                <li class="item has-submenu">
                    <a tabindex="0">Services</a>
                    <ul style={submenu} class="submenu">
                        <li class="subitem"><a href="#">Design</a></li>
                        <li class="subitem"><a href="#">Development</a></li>
                        <li class="subitem"><a href="#">SEO</a></li>
                        <li class="subitem"><a href="#">Copywriting</a></li>
                    </ul>
                </li>
                <li class="item has-submenu">
                    <a tabindex="0">Plans</a>
                    <ul class="submenu">
                        <li class="subitem"><a href="#">Freelancer</a></li>
                        <li class="subitem"><a href="#">Startup</a></li>
                        <li class="subitem"><a href="#">Enterprise</a></li>
                    </ul>
                </li>
                <li class="item"><a href="#">Blog</a></li>
                <li class="item"><a href="#">Contact</a>
                </li>
                <li class="item button"><a href="#">Log In</a></li>
                <li class="item button secondary"><a href="#">Sign Up</a></li>
                <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
            </ul>
        </nav>
    )
}

export default About