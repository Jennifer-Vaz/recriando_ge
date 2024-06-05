import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div>
            <div class="links-container">
                <a href="https://www.globo.com" class="link-globo">globo.com</a>
                <a href="https://g1.globo.com" class="link-g1">g1</a>
                <a href="https://globoesporte.globo.com" class="link-ge">ge</a>
                <a href="https://gshow.globo.com" class="link-gshow">gshow</a>
                <a href="https://globoplay.globo.com" class="link-globoplay">globoplay</a>
                <a href="https://globoesporte.globo.com/cartolafc" class="link-cartola">cartola</a>
                <a href="https://sportv.globo.com" class="link-sportv">sportv</a>
</div>
            </div>
            <div class="header_icone-menu">
                <div class='header_init'>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />  
                    <i class="material-symbols-outlined" >menu</i>
                    <span class="header_menu">MENU</span>
                    <span class="header_icone-ge">ge</span>
                    <span class="material-symbols-outlined">more_vert</span>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />  
                    <span ><img src="/icone.png" alt="Ícone" class="header_agenda-icone" /></span>
                </div>             
                <div class="header_agenda">
                        <span class="header_agenda-texto">AGENDA</span>
                </div>
                <div class="header_campo_busca">
                    <div class="header_campo_busca-texto">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                        <span class="material-symbols-outlined">search</span>BUSCAR</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
