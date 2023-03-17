import React from 'react';
import Card from '../components/card'
import formGroup from '../components/form-group';

class CadastroUsuario extends React.Component{

    state = {
        nome : '',
        email : '',
        senha : '',
        senhaRepeticao : ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    render(){
        return (
            <div className='container'>
            <Card title='Cadastro de Usuario'>
                <div className='row'>
                    <div  className='col-lg-12'>
                            <div  className='bs-component'>
                                <formGroup label='Nome: *' htmlFor='inputNome'>
                                    <input type='text'
                                        id='inputNome'
                                        className='form-control'
                                        name='nome'
                                        onChange={e => this.setState({nome : e.target.value})}
                                        placeholder='Digite o Nome'/>
                                </formGroup>
                                <formGroup label='Email: *' htmlFor='inputEmail'>
                                    <input type='email'
                                        id='inputEmail'
                                        className='form-control'
                                        name='email'
                                        onChange={e => this.setState({email : e.target.value})}
                                        placeholder='Digite o E-mail'/>
                                </formGroup>
                                <formGroup label='Senha: *' htmlFor='inputSenha'>
                                    <input type='password'
                                        id='inputSenha'
                                        className='form-control'
                                        name='senha'
                                        onChange={e => this.setState({senha : e.target.value})}
                                        placeholder='Digite o Senha'/>
                                </formGroup>
                                <formGroup label='Repita a Senha: *' htmlFor='inputRepitaSenha'>
                                    <input type='password'
                                        id='inputRepitaSenha'
                                        className='form-control'
                                        name='senha'
                                        onChange={e => this.setState({senha : e.target.value})}
                                        placeholder='Digite sua senha novamente'/>
                                </formGroup>
                                <button onClick={this.cadastrar} type='button' className='btn btn-default'>Salvar</button>
                                <button type='button' className='btn btn-danger'>Cancelar</button>
                            </div>
                        </div>
                </div>
            </Card>
            </div>
        )
    }
}

export default CadastroUsuario