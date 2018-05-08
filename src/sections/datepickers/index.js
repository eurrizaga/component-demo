import React, { Component } from 'react';
import { DatepickerBar, Datepicker, Card } from '@smartadtags/sta-components';
import {Controlled as CodeMirror} from 'react-codemirror2';
import config from '../../config';
import Moment from 'moment';

class newComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config,
        };
    }
    componentWillMount(){
        this.setState({
            'date': Moment('1/1/1990'),
            'startDate': Moment('9/1/1990'),
            'endDate': Moment('10/18/1990'),
            'configCustom': {
                'locale': 'fr'
            },
            'configCustom2': {
                'buttonConfig':{
                    'styles': {
                        'primary': {
                            'background': 'red',
                            ':focus': {
                                'background':'violet'
                            }
                        },
                        'third': {
                            'color': 'green'
                        }
                    }
                }
            }
        });
    }
    render(){
        return (
            <div>
                <Card title="Datepicker simple">
                    <div className="">
                        <p>Un datepicker de fecha única sin configuraciones. A falta de una fecha por defecto se selecciona la de hoy automáticamente.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container"><Datepicker /></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Datepicker />")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Datepicker simple con fecha controlada">
                    <div className="">
                        <p>Un datepicker de fecha única sin configuraciones con una fecha predefinida. La fecha siempre debe ser un objeto Moment.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container"><Datepicker date={this.state.date}/></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("date = Moment('1/1/1910');\n<Datepicker date={date} />")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Datepicker con color configurable">
                    <div className="">
                        <p>Se puede configurar el color primario del calendario mediante la propiedad locale en el atributo config.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container"><Datepicker config={this.state.configCustom2.buttonConfig}/></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("config = " + JSON.stringify(this.state.configCustom2) + "\n<Datepicker config={config}/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Datepicker con idioma específico">
                    <div className="">
                        <p>Se puede configurar el idioma del calendario mediante la propiedad locale en el atributo config.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container"><Datepicker config={this.state.configCustom}/></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("config = {\"locale\": \"fr\"}\n<Datepicker config={config}/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                

                <Card title="Datepicker doble">
                    <div className="">
                        <p>Un datepicker para rango de fechas sin configuraciones. A falta de atributos startDate y endDate se selecciona por defecto la de hoy para el rango.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container"><Datepicker dp-double/></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("<Datepicker dp-double />")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Datepicker doble con fecha controlada">
                    <div className="">
                        <p>Un datepicker para rango de fechas sin configuraciones. A falta de atributos startDate y endDate se selecciona por defecto la de hoy para el rango.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container"><Datepicker dp-double startDate={this.state.startDate} endDate={this.state.endDate} /></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("startDate = Moment('1/1/2000');\nendDate = Moment('9/9/2009');\n<Datepicker dp-double startDate={startDate} endDate={endDate}/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Barra Datepicker">
                    <div className="">
                        <p>Un componente datepicker de rango con atajos de fechas comunes y posibilidad de rango de fechas secundario comparativo.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container" style={{'background': '#ebedef', 'height': '350px'}}><DatepickerBar startDate={this.state.startDate} endDate={this.state.endDate} /></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("startDate = Moment('1/1/2000');\nendDate = Moment('9/9/2009');\n<DatepickerBar startDate={startDate} endDate={endDate}/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                <Card title="Barra Datepicker">
                    <div className="">
                        <p>Un componente datepicker de rango con atajos de fechas comunes y posibilidad de rango de fechas secundario comparativo.</p>
                        <div className="codemirror-container">
                            <strong>Vista previa</strong>
                            <div className="button-container" style={{'background': '#ebedef', 'height': '350px'}}><DatepickerBar startDate={this.state.startDate} endDate={this.state.endDate} config={this.state.configCustom2}/></div>
                            <strong>Código</strong>
                            <CodeMirror
                                value={("startDate = " + JSON.stringify(this.state.configCustom2)+"\n<DatepickerBar startDate={startDate} endDate={endDate}/>")}
                                options={this.state.config.codeEditorConfig}
                                onChange={(editor, data, value) => {
                                }}
                            />
                        </div>
                          
                    </div>
                </Card>

                {/*<DatepickerBar config={this.state.config.calendarConfig}/>
                <Card title="Datepicker demo" config={this.state.config.cardConfig}>

                    <h3>Datepicker simple</h3>
                    <Grid columns={2} divided style={{'textAlign': 'center'}}>
                        <Grid.Row>
                            <Grid.Column>
                                <h4>Fecha única</h4>
                                <Datepicker config={this.state.config.calendarConfig}/>
                            </Grid.Column>
                            <Grid.Column>
                                <h4>Rango de fechas</h4>
                                <Datepicker dp-double config={this.state.config.calendarConfig} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card>*/}
            </div>
            
        )
    }
}
export default newComponent;
    