import React from 'react';
import './eventosFutebol.css';

const EventosFutebol = () => {
    const eventos = [
        {
            campeonato: 'Campeonato Brasileiro',
            rodada: 'Rodada 10',
            horario: 'Hoje • 19:00',
            status: 'ENCERRADO',
            mandante: {
                nome: 'Flamengo',
                escudo: '/escudo_flamengo.png',
                placar: 2
            },
            visitante: {
                nome: 'Bragantino',
                escudo: '/escudo_bragantino.png',
                placar: 2
            }
        },
        {
            campeonato: 'Copa do Brasil',
            rodada: 'Quartas de Final',
            horario: 'Amanhã • 20:00',
            status: 'PRÓXIMO',
            mandante: {
                nome: 'Palmeiras',
                escudo: '/escudo_palmeiras.png',
                placar: null
            },
            visitante: {
                nome: 'Santos',
                escudo: '/escudo_santos.png',
                placar: null
            }
        },
        {
            campeonato: 'Campeonato Brasileiro Série B',
            rodada: 'Rodada 6 - Primeira fase',
            horario: '31/05 • 19:30',
            status: 'PRÓXIMO',
            mandante: {
                nome: 'Aymorés',
                escudo: '/escudo_aymores.png',
                placar: null
            },
            visitante: {
                nome: 'Valeriodoce',
                escudo: '/escudo_valeriodoce.png',
                placar: null
            }
        }
    ];

    return (
        <div className="eventos">
            {eventos.map((evento, index) => (
                <div key={index} className="eventos-jogos">
                    <div className="eventos-campeonato">
                        <div className="eventos-campeonato-nome">{evento.campeonato}</div>
                        <span className='eventos-campeonato-icone'><span className="material-symbols-outlined">arrow_forward</span></span>
                    </div>
                <div className="evento-caixa-jogo">
                    <div className="evento-caixa-jogo-campo">
                        <div className="primeira-caixa">
                            <div className="evento-caixa-jogo-campo_rodada">{evento.rodada}</div>
                            <div className="evento-caixa-jogo-campo_horario">{evento.horario}</div>
                            <div className="evento-caixa-jogo-campo_status-da-partida">{evento.status}</div>
                        </div>
                        <div className='equipe-mandante'>
                            <div className='equipe-escudo'>
                                <img src={evento.mandante.escudo} alt={`Escudo do ${evento.mandante.nome}`} className='equipe-mandante-escudo'/>
                            </div>
                            <div className="evento-caixa-jogo-campo_time-mandante">{evento.mandante.nome}</div>
                            <div className="evento-caixa-jogo-campo_placar-mandante">{evento.mandante.placar}</div>
                        </div>
                        <div className='equipe-visitante'>
                            <div className='equipe-escudo'>
                                <img src={evento.visitante.escudo} alt={`Escudo do ${evento.visitante.nome}`} className='equipe-visitante-escudo'/>
                            </div>
                            <div className="evento-caixa-jogo-campo_time-visitante">{evento.visitante.nome}</div>
                            <div className="evento-caixa-jogo-campo_placar-visitante">{evento.visitante.placar}</div>
                        </div>
                    </div>
                    <div className="evento-caixa-jogo-campo_dois">
                        <div className="evento-caixa-jogo-campo_dois_texto">Saiba como foi</div>
                        <span className='eventos-campeonato-icone'><span className="material-symbols-outlined">arrow_forward</span></span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);
};

export default EventosFutebol;


