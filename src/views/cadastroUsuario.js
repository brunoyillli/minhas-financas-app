import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom';

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <Card title='Cadastro de Usuario'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='bs-component'>
                            <FormGroup label='Nome: *' htmlFor='inputNome'>
                                <input type='text'
                                    id='inputNome'
                                    className='form-control'
                                    name='nome'
                                    onChange={e => this.setState({ nome: e.target.value })}
                                    placeholder='Digite o Nome' />
                            </FormGroup>
                            <FormGroup label='Email: *' htmlFor='inputEmail'>
                                <input type='email'
                                    id='inputEmail'
                                    className='form-control'
                                    name='email'
                                    onChange={e => this.setState({ email: e.target.value })}
                                    placeholder='Digite o E-mail' />
                            </FormGroup>
                            <FormGroup label='Senha: *' htmlFor='inputSenha'>
                                <input type='password'
                                    id='inputSenha'
                                    className='form-control'
                                    name='senha'
                                    onChange={e => this.setState({ senha: e.target.value })}
                                    placeholder='Digite o Senha' />
                            </FormGroup>
                            <FormGroup label='Repita a Senha: *' htmlFor='inputRepitaSenha'>
                                <input type='password'
                                    id='inputRepitaSenha'
                                    className='form-control'
                                    name='senhaRepeticao'
                                    onChange={e => this.setState({ senhaRepeticao: e.target.value })}
                                    placeholder='Digite sua senha novamente' />
                            </FormGroup>
                            <button onClick={this.cadastrar} type='button' className='btn btn-default'>Salvar</button>
                            <button onClick={this.cancelar} type='button' className='btn btn-danger'>Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)