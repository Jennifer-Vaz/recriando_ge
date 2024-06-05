import React from 'react';
import './eventosMaisEsportes.css';

const EventoMaisEsportes = () => {
    const eventos = [
        {
            campeonato: 'Taça Conmebol Libertadores',
            rodada: 'Rodada 5',
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
            },
            link: 'saiba-como-foi'
        },
        {
            campeonato: 'Campeonato Brasileiro Feminino',
            rodada: 'Rodada 5',
            horario: 'Hoje • 19:00',
            status: 'ENCERRADO',
            mandante: {
                nome: 'Corinthians',
                escudo: '/escudo_corinthians.png',
                placar: 1
            },
            visitante: {
                nome: 'Ponte Preta',
                escudo: '/escudo_pontepreta.png',
                placar: 2
            },
            link: 'saiba-como-foi'
        },
        {
            campeonato: 'Campeonato Brasileiro Feminino',
            rodada: 'Rodada 6',
            horario: 'Hoje • 21:00',
            status: 'ENCERRADO',
            mandante: {
                nome: 'Grêmio',
                escudo: '/escudo_gremio.png',
                placar: 0
            },
            visitante: {
                nome: 'Internacional',
                escudo: '/escudo_internacional.png',
                placar: 1
            },
            link: 'onde-assistir'
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

export default EventoMaisEsportes;
