import React, { useContext } from 'react'
import { Space } from '@mantine/core';
import styled from 'styled-components';

export const HeaderBar = styled.header`
    width: 100%;
    height: 70px;
    background: url(https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png) no-repeat;
    box-shadow: 0 0 25px 5px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    position: fixed;
    top: 0px;
`;

export const HeaderInner = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogo = styled.a`
    line-height: 1;
    font-weight: 500;
    font-size: 25px;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const LinksUnordered = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1.25rem;
    line-height: 1;
    text-decoration: none;
    color: rgb(11, 87, 114);
    display: list-item;
    text-align: -webkit-match-parent;
    font-family: Fira Sans,sans-serif;
    font-size: 17px;
    margin: 10px;
    padding: 0;
    list-style: none;
    display: inherit;
`;

export const Links = styled.a`
    font-family: Fira Sans,sans-serif;
    font-size: 17px;
    margin: 10px;
    padding: 0;
    list-style: none;
    display: inherit;
`;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 481px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

const Header = () => {
    return (
        <div>
        <HeaderBar>
            <Container>
            <HeaderInner>
                <a href="/" className="nav-logo">OnStyles</a>
                <LinksUnordered>
                <a href="/" className="nav-logo">Sign In</a>
                <a href="/" className="nav-logo">Sign Up</a>
                </LinksUnordered>
            </HeaderInner>
            </Container>
        </HeaderBar>
        <Space h="xl" />
        </div>
    )
}

export default Header
