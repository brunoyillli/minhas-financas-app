import React from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends React.Component{

    goToHomePage = () => {
        this.props.history.push("/home")
    }

    render(){
        return (
            <div className='container text-center'>
                <h2>Bem vindo ao sistema Minhas Finanças</h2>
                Este é seu sistema para controle de finanças pessoais, clique no botão abaixo para acessar o sistema: <br/><br/>
                <div className='offset-md-4 col-md-4'>
                    <button style={{width: '100%'}} className='btn btn-default' onClick={this.goToHomePage}>
                        <i className='pi pi-send'></i> Acessar
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingPage)