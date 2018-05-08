import React, { Component } from 'react';
import { Input, Card } from '@smartadtags/sta-components';
import config from '../../config';
import {Controlled as CodeMirror} from 'react-codemirror2';
class newComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config,
        };
    }
    render(){
        return (
            <div> 
                <Card title="Text field básico">
                    <div className="">
                        <p>Un text input genérico sin configuración.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container"><Input/></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Input/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>
                
                <Card title="Text field con error">
                    <div className="">
                        <p>Un text input en estado de error.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Input error errorvalue="error hardcodeado"/>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Input error errorvalue=\"error hardcodeado\"/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Text field de aprobación">
                    <div className="">
                        <p>Un text input con un ícono de aprobación.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Input success/>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Input success/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Text field rechazado">
                    <div className="">
                        <p>Un text input con un ícono de rechazo.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Input reject/>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Input reject/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>
                <Card title="Text field de carga">
                    <div className="">
                        <p>Un text input con un spinner de carga.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Input loading/>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Input loading/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>
                <Card title="Text field con labels">
                    <div className="">
                        <p>Un text input con labels.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Input title="Label horizontal" info="Label vertical"/>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Input title=\"Label horizontal\" info=\"Label vertical\"/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>



                {/*<Card title="Text fields" config={this.state.config.cardConfig}>
                    <Input title="Normal" info="Vertical label example" config={this.state.config.inputConfig}/>
                    <Input title="Hover" config={this.state.config.inputConfig}/>
                    <Input focus title="Focus" config={this.state.config.inputConfig}/>
                    <Input error errorvalue="error hardcodeado" value="input semi-inutil" title="Error" config={this.state.config.inputConfig}/>
                    <Input title="Correct" placeholder="anton@valiranetwork.com" success="true" config={this.state.config.inputConfig}/>
                    <Input title="Checking" placeholder="anton@valiranetwork.com" loading="true" config={this.state.config.inputConfig}/>
                    <Input title="Wrong" placeholder="anton@valiranetwork.com" reject="true" config={this.state.config.inputConfig}/>
                </Card>*/}

            </div>
            
        )
    }
}
export default newComponent;
    