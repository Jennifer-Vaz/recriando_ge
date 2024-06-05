import React, { useState } from 'react';
import EventosFutebol from '../eventosFutebol';
import EventoMaisEsportes from '../eventosMaisEsportes';
import './destaque.css';

const Destaque = () => {
    const [paginaAtual, setPaginaAtual] = useState(true);

    const handleClick = (pagina) => {
        setPaginaAtual(pagina);
    };

    return (
        <div className="destaque">
            <div className="destaque-menu">
                <button className="destaque-futebol" onClick={() => handleClick(true)}>FUTEBOL</button>
                <button className="destaque-mais-esportes" onClick={() => handleClick(false)}>MAIS ESPORTES</button>
            </div>
        {paginaAtual  && <EventosFutebol />}
        {!paginaAtual  && <EventoMaisEsportes />}
        </div>
    );
};

export default Destaque;
