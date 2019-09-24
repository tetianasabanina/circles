import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import faker from 'faker';

function Greetings(props){
    return(
        <div className="card">
            <div className="member" style={{backgroundImage: `url(${props.image})`}}></div>
            <h2>{props.name}</h2>
            <p>from {props.city}</p>
        
        </div>
    )
}

const greet = [
    <div>
        <Greetings name="Petr" city="StPetersburg" image={faker.image.avatar()} />
        <Greetings name="Mari" city="Tallinn" image={faker.image.avatar()}/>
        <Greetings name="Onni" city="Helsinki" image={faker.image.avatar()}/>
    </div>
]
ReactDOM.render(greet, document.getElementById('root'));

