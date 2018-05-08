import React, { Component } from 'react';
import { Button, Grid, Card, ColorPickerGroup } from '@smartadtags/sta-components';
import {Controlled as CodeMirror} from 'react-codemirror2';
import config from '../../config';


class newComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config,
            modalOpen: false,
        };
        this.changeColor = this.changeColor.bind(this);
        this.toggleColorChangerVisible = this.toggleColorChangerVisible.bind(this);
        this.getCustomColorCode = this.getCustomColorCode.bind(this);
    }
    componentWillMount(){
        this.setState({
            'customColors': {
                'styles': {
                    'primary':{
                        'background': 'red',
                    },
                    'secondary':{
                        ':disabled': {
                            'color': 'green'
                        }
                    }
                }
                    
            }
        })
    }

    changeColor(ref, color){
        var configStyles = this.state.config;
        var auxStyles = configStyles;
        for (var i = 0; i < ref.length - 1; i++){
            auxStyles = auxStyles[ref[i]];
        }
        auxStyles[ref[i]] = color;
        this.setState({
            config: configStyles
        });
    }
    toggleColorChangerVisible(id){
        var newState;
        if (this.state.colorChanger === id)
            newState = null;
        else
            newState = id;
        this.setState({
            colorChanger: newState
        })
    }
    getCustomColorCode(){
        var out = "customColors = " + JSON.stringify(this.state.customColors);
        out += "\n<Button config={customColors}>Estándar</Button>\n<Button disabled type=\"secondary\" config={customColors}>Deshabilitado</Button>";
        return out;
    }
    render(){
        return (
            <div>
                <Card title="Botón estándar">
                    <div className="">
                        <p>Un botón libre de configuración. Al no tener un tipo definido, se determina como primario por defecto</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Button>Estándar</Button>
                                <Button disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button>Estándar</Button>\n<Button disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Botón primario">
                    <div className="">
                        <p>Un botón del tipo primario con sus colores por defecto.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Button type="primary">Estándar</Button>
                                <Button type="primary" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"primary\">Estándar</Button>\n<Button type=\"primary\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Botón secundario">
                    <div className="">
                        <p>Un botón del tipo secundario con sus colores por defecto.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Button type="secondary">Estándar</Button>
                                <Button type="secondary" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"secondary\">Estándar</Button>\n<Button type=\"secondary\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Botón terciario">
                    <div className="">
                        <p>Un botón del tipo terciario con sus colores por defecto.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Button type="third">Estándar</Button>
                                <Button type="third" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"third\">Estándar</Button>\n<Button type=\"third\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Botón BG Outline">
                    <div className="">
                        <p>Pensado para ser usado en fondos oscuros.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container" style={{"background": "black"}}>
                                <Button type="dark-outline">Estándar</Button>
                                <Button type="dark-outline" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"dark-outline\">Estándar</Button>\n<Button type=\"dark-outline\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Botón BG Filled">
                    <div className="">
                        <p>Pensado para ser usado en fondos oscuros.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container" style={{"background": "black"}}>
                                <Button type="dark-filled">Estándar</Button>
                                <Button type="dark-filled" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"dark-filled\">Estándar</Button>\n<Button type=\"dark-filled\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Botón Color + Shadow">
                    <div className="">
                        <p>Aplica gradientes sobre un color de fondo.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container" style={{"background": "rgb(0, 157, 255)"}}>
                                <Button type="shadowed">Estándar</Button>
                                <Button type="shadowed" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"shadowed\">Estándar</Button>\n<Button type=\"shadowed\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Configuración de colores">
                    <div className="">
                        <p>Se pueden modificar los atributos CSS de los colores de font y background en los botones mediante el uso del objeto config.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Button config={this.state.customColors}>Estándar</Button>
                                <Button type="secondary" disabled config={this.state.customColors}>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={(this.getCustomColorCode())}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Boton de Google">
                    <div className="">
                        <p>Se pueden modificar los atributos CSS de los colores de font y background en los botones mediante el uso del objeto config.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Button type="google" config={this.state.customColors}>Estándar</Button>
                                <Button type="google" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"google\" config={this.state.customColors}>Estándar</Button>\n<Button type=\"google\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Boton de Facebook">
                    <div className="">
                        <p>Se pueden modificar los atributos CSS de los colores de font y background en los botones mediante el uso del objeto config.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container">
                                <Button type="facebook">Estándar</Button>
                                <Button type="facebook" disabled>Deshabilitado</Button>
                            </div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Button type=\"facebook\">Estándar</Button>\n<Button type=\"facebook\" disabled>Deshabilitado</Button>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                

                <Card title="Modificación de colores dinámica">
                    <div className="buttons-demo">
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <h3>Primary</h3>
                                    <div>
                                        <Button type="primary" disabled config={this.state.config.buttonConfig}>Disabled</Button>
                                        <Button type="primary" config={this.state.config.buttonConfig}>Active</Button>
                                    </div>
                                    <ColorPickerGroup colors={ this.state.config.buttonConfig.styles.primary } options={this.state.config.buttonConfig.options} colorChange={(attr, color) => {const path = ['buttonConfig','styles', 'primary'].concat(attr); this.changeColor(path, color)}} />
                                </Grid.Column>
                                <Grid.Column>
                                    <h3>Secondary</h3>
                                    <Button type="secondary" disabled config={this.state.config.buttonConfig}>disabled</Button>
                                    <Button type="secondary" config={this.state.config.buttonConfig}>active</Button>
                                    <ColorPickerGroup colors={ this.state.config.buttonConfig.styles.secondary } options={this.state.config.buttonConfig.options} colorChange={(attr, color) => {const path = ['buttonConfig','styles', 'secondary'].concat(attr); this.changeColor(path, color)}} />
                                </Grid.Column>
                                <Grid.Column>
                                    <h3>Third</h3>
                                    <Button type="third" disabled config={this.state.config.buttonConfig}>Disabled</Button>
                                    <Button type="third" config={this.state.config.buttonConfig}>Active</Button>
                                    <ColorPickerGroup colors={ this.state.config.buttonConfig.styles.third } options={this.state.config.buttonConfig.options} colorChange={(attr, color) => {const path = ['buttonConfig','styles', 'third'].concat(attr); this.changeColor(path, color)}} />
                                </Grid.Column>
                            </Grid.Row>
                            {/*<Grid.Row>
                                <Grid.Column style={{'backgroundColor': 'black'}}>
                                    <h3 style={{'color': 'white'}}>Dark BG Outline </h3>
                                    <Button type="dark-outline" disabled config={this.state.config.buttonConfig}>Disabled</Button>
                                    <Button type="dark-outline" config={this.state.config.buttonConfig}>Active</Button>
                                </Grid.Column>
                                <Grid.Column style={{'backgroundColor': 'black'}}>
                                    <h3 style={{'color': 'white'}}>DarK filled BG</h3>
                                    <Button type="dark-filled" disabled config={this.state.config.buttonConfig}>Disabled</Button>
                                    <Button type="dark-filled" config={this.state.config.buttonConfig}>Active</Button>
                                </Grid.Column>
                                <Grid.Column style={{'backgroundColor': '#009dff'}}>
                                    <h3 style={{'color': 'white'}}>Color + Shadow</h3>
                                    <Button type="shadowed" disabled config={this.state.config.buttonConfig}>Disabled</Button>
                                    <Button type="shadowed" config={this.state.config.buttonConfig}>Active</Button>
                                </Grid.Column>
                            </Grid.Row>*/}
                        </Grid>
                    </div>
                </Card>

            </div>
            
        )
    }
}
export default newComponent;
    