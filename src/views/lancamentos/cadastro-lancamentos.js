import React from "react";

import Card from '../../components/card'
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import { withRouter } from 'react-router-dom'
import LancamentoService from "../../app/service/lancamentoService";
import * as messages from '../../components/toastr'
import LocalStorageService from "../../app/service/localStorageService";

class CadastroLancamentos extends React.Component {

    constructor() {
        super();
        this.service = new LancamentoService();
    }

    state = {
        id: null,
        descricao: '',
        valor: '',
        mes: '',
        ano: '',
        tipo: '',
        status: ''
    }

    submit = () => {

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')
        const { descricao, valor, mes, ano, tipo } = this.state;
        const lancamento = {
            descricao,
            valor,
            mes,
            ano,
            tipo,
            usuario: usuarioLogado.id
        }

        this.service.salvar(lancamento)
            .then(response => {
                this.props.history.push("/consulta-lancamentos")
                messages.mensagemSucesso('Lançamento cadastrado com sucesso!')
            }).catch(error => {
                messages.mensagemErro(error.response.data)
            })
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value })
    }

    render() {
        const tipos = this.service.obterListaTipos();
        const meses = this.service.obterListaMeses();

        return (
            <Card title="Cadastro de Lançamentos">
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input id="inputDescricao"
                                name="descricao"
                                onChange={this.handleChange}
                                type="text"
                                value={this.state.descricao}
                                className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input id="inputAno"
                                name="ano"
                                onChange={this.handleChange}
                                type="text"
                                value={this.state.ano}
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes"
                                lista={meses}
                                name="mes"
                                onChange={this.handleChange}
                                value={this.state.mes}
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputValor" label="Valor: *">
                            <input id="inputValor"
                                name="valor"
                                onChange={this.handleChange}
                                type="text"
                                value={this.state.valor}
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputTipo" label="Tipo: *">
                            <SelectMenu id="inputTipo"
                                lista={tipos}
                                name="tipo"
                                onChange={this.handleChange}
                                value={this.state.tipo}
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                            <input id="inputStatus"
                                name="status"
                                type="text"
                                value={this.state.status}
                                className="form-control" disabled />
                        </FormGroup>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button onClick={this.submit} className="btn btn-success">Salvar</button>
                        <button onClick={e => this.props.history.push("/consulta-lancamentos")}
                            className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroLancamentos);