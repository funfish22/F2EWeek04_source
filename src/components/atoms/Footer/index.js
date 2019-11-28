import React from 'react';
import styled from 'styled-components'

function Footer() {
    return(
        // eslint-disable-next-line react/jsx-no-target-blank
        <FooterRoot>Aga  練習作品｜圖片來源：<a style={{color: '#fff'}} target="_blank" href="https://tw.portal-pokemon.com/play/pokedex">https://tw.portal-pokemon.com/play/pokedex</a></FooterRoot>
    )
}

export default Footer;

const FooterRoot = styled.footer`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4BC9C9;
    color: #fff;
    margin-top: auto;
`;