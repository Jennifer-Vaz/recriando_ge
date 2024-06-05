import React from 'react';
import './calendario.css';

const Calendario = () => {

    const diasDaSemana = [
        { numero: '01', nome: 'seg' },
        { numero: '02', nome: 'ter' },
        { numero: '03', nome: 'qua' },
        { numero: '04', nome: 'qui' },
        { numero: '05', nome: 'sex' },
        { numero: '06', nome: 'sab' },
        { numero: '07', nome: 'dom' },
        { numero: '08', nome: 'seg' },
        { numero: '09', nome: 'ter' },
        { numero: '10', nome: 'qua' },
    ];

    return (
        <div>
            <div className='mes-e-ano'>
                <span className='mes-e-ano'>abril • 2024</span>
            </div>
            
            <div className="calendar">
                <div className='chevron-left'>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                </div>
                {diasDaSemana.map((dia, index) => (
                    <div key={index} className="day">
                        <div className="ball">{dia.numero}</div>
                        <div className="day-of-week">{dia.nome}</div>
                    </div>
                ))}
                <div className='chevron-right'>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    );
};

export default Calendario;
