import React from 'react'
import './calendario.css'

const Calendario = () => {
    return (
        <div>
            <div className='mes-e-ano'>
                <span className='mes-e-ano'>abril • 2024</span>
            </div>
            <div class="calendar">
                <div className='chevron-left'>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                </div>
                <div class="day">
                    <div class="ball">01</div>
                    <div class="day-of0-week">seg</div>
                </div>
                <div class="day">
                    <div class="ball">02</div>
                    <div class="day-of-week">ter</div>
                </div>
                <div class="day">
                    <div class="ball">03</div>
                    <div class="day-of-week">qua</div>
                </div>
                <div class="day">
                    <div class="ball">04</div>
                    <div class="day-of-week">qui</div>
                </div>
                <div class="day">
                    <div class="ball">05</div>
                    <div class="day-of-week">sex</div>
                </div>
                <div class="day">
                    <div class="ball">06</div>
                    <div class="day-of-week">sab</div>
                </div>
                <div class="day">
                    <div class="ball">07</div>
                    <div class="day-of-week">dom</div>
                </div>
                <div class="day">
                    <div class="ball">08</div>
                    <div class="day-of0-week">seg</div>
                </div>
                <div class="day">
                    <div class="ball">09</div>
                    <div class="day-of-week">ter</div>
                </div>
                <div class="day">
                    <div class="ball">10</div>
                    <div class="day-of-week">qua</div>
                </div>
                <div className='chevron-right'>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />  
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    )
};

export default Calendario;