import React from 'react';

const HomeCard = (props) => (
    <div className="col-12 col-sm-6 col-md-4">
        <div className="card" style={{width: '18rem'}}>
            <img style={{ paddingTop :'3px', width: '150px', height: '100px' }} src="https://www.intelipost.com.br/wp-content/uploads/2017/07/como-os-indicadores-de-desempenho-ajudam-a-sua-gestao-de-entrega-e-atendimento.jpeg" className="card-img-top rounded mx-auto d-block" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary" onClick={props.action}>Go Somewhere</a>
            </div>
        </div>
    </div>
);
export default HomeCard;