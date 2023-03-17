import React from 'react'
import Card from '../components/card'
import formGroup from '../components/form-group'
class Login extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6' style={{ position: 'relative', left: '300px' }}>
                        <div className='bs-docs-section'>
                            <Card title="Login">
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='bs-component'>
                                            <fieldset>
                                                <formGroup label='Email: *' htmlFor='exampleInputEmail1'>
                                                    <input type='email'
                                                        className='form-control'
                                                        id='exampleInputEmail1'
                                                        aria-describedby='emailHelp'
                                                        placeholder='Digite o Email' />
                                                </formGroup>
                                                <formGroup label='Senha: *' htmlFor='exampleInputPassword1'>
                                                    <input type='password'
                                                        className='form-control'
                                                        id='exampleInputPassword1'
                                                        placeholder='Password'/>
                                                </formGroup>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login