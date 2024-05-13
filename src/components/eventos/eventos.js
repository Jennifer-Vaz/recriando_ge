import React from 'react'
import './eventos.css'

const Eventos = () => {
    return (
        <div class="eventos">
            <div class="eventos-campeonato-nome">Nome do Campeonato</div>
            
            <div class="evento-caixa-jogo">
                <div class="evento-caixa-jogo-campo">
                    <div class="evento-caixa-jogo-campo_rodada">Rodada</div>
                    <div class="evento-caixa-jogo-campo_data">Data</div>
                    <div class="evento-caixa-jogo-campo_horario">Horário</div>
                    <div class="evento-caixa-jogo-campo_status-da-partida">Status da Partida</div>
                    <div class="evento-caixa-jogo-campo_time-mandante">Time Mandante</div>
                    <div class="evento-caixa-jogo-campo_placar-mandante">Placar Mandante</div>
                    <div class="evento-caixa-jogo-campo_time-visitante">Time Visitante</div>
                    <div class="evento-caixa-jogo-campo_placar-visitante">Placar Visitante</div>
                </div>

                <div class="evento-caixa-jogo-campo_dois">
                    <div class="evento-caixa-jogo-campo_dois_texto">Saiba como foi</div>
                </div>
            </div>

        <div class="eventos-botao-mostrar-eventos">
            <button class="mostrar-eventos">Mostrar mais eventos</button>
        </div>
    </div>
    );
};

export default Eventos;