import React, { Component } from 'react';
import EmptyTable from './EmptyTable';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { Card, Table } from '@smartadtags/sta-components';
import config from '../../config';
class newComponent extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            config,
            tableData: {
                columnDefs: ['name', 'id', 'group', 'offer', 'li', 'imps', 'clicks', 'convs', 'revenue'],
                rowData: [
                    {name: 'Offer 1', active:true , id: 2, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 2', active:false , id:0, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 3', active:true , id: 1, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 4', active:true , id: 4, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 5', active:true , id: 5, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 6', active:true , id: 6, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 7', active:true , id: 7, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 8', active:true , id: 8, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 9', active:true , id: 9, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    {name: 'Offer 0', active:true , id: 10, group: '1/1', offer: '3/4', li: '21/25', imps: 1125000000, clicks: 1125000000, convs: 456, revenue: 365},
                    
                ],
                footer: [{name: '', id: '', group: '', offer: '', li: '', imps: '', clicks: '', convs: '', revenue: 352000}]
            },
            tableData2: {
                columnDefs: ['name', 'imps', 'convs', 'revenue'],
                rowData: [
                    {
                        'name': 'Offer Name', 
                        'active':true, 
                        'imps#1': 654351, 'imps#2': 745351, 
                        'convs#1': 654351, 'convs#2': 745351, 
                        'revenue#1': 654351, 'revenue#2': 745351, 
                        
                    },
                    {
                        'name': 'Offer Name', 
                        'active':false,
                        'imps#1': 542, 'imps#2': 879,
                        'convs#1': 542, 'convs#2': 879, 
                        'revenue#1': 542, 'revenue#2': 879,  
                    },
                    {
                        'name': 'Offer Name', 
                        'active':true ,
                        'imps#1': 5600, 'imps#2': 600,
                        'convs#1': 5600, 'convs#2': 600, 
                        'revenue#1': 5600, 'revenue#2': 600,  
                    },
                    {
                        'name': 'Offer Name', 
                        'active':true ,
                        'imps#1': 9885, 'imps#2': 6885,
                        'convs#1': 9885, 'convs#2': 6885,
                        'revenue#1': 9885, 'revenue#2': 6885,  
                    },
                    {
                        'name': 'Offer Name', 
                        'active':true,
                        'imps#1': 1985240789, 'imps#2': 985240789, 
                        'convs#1': 1985240789, 'convs#2': 985240789, 
                        'revenue#1': 1985240789, 'revenue#2': 985240789, 
                        
                    },
                    
                    
                ],
                compareGroups:{
                    '#1': {
                        'from': '01/03',
                        'to': '22/03'
                    },
                    '#2': {
                        'from': '23/03',
                        'to': '01/04'
                    }
                },
                footer: [{name: '', 'imps#1': '', 'imps#2': '', 'convs#1': '', 'convs#2': '',  'revenue#1': 352000,  'revenue#2': 352000}]
            },
            tableData3: {
                columnDefs: ['name', 'id', 'group', 'offer', 'li', 'imps', 'clicks', 'convs', 'revenue'],
                rowData: [],
                footer: [{name: '', id: '', group: '', offer: '', li: '', imps: '', clicks: '', convs: '', revenue: ''}]
            },
        }
    }
    render(){
        return (
                <div>
                    <Card title="Objetos de configuración de las tablas">
                        <div className="">
                            <p>Una tabla estándar.</p>
                            <div className="codemirror-container">
                                <strong>Vista previa</strong>
                                <div className="button-container" style={{'background': '#ebedef', 'height': '500px'}}>
                                <Table tableData={this.state.tableData}/>
                                </div>
                                <strong>Código</strong>
                                <CodeMirror
                                    options={this.state.config.codeEditorConfig}
                                    value={(`var tableData = ${JSON.stringify(this.state.tableData)}\n\n<Table tableData={tableData}/>`)}
                                    onChange={(editor, data, value) => {
                                    }}
                                />
                            </div>
                            
                        </div>
                    </Card>

                    <Card title="Tabla comparativa">
                        <div className="">
                            <p>Tabla que contiene el objeto compareGroups con fechas seteadas y columnas numeradas con <b>#</b> genera una tabla comparativa.</p>
                            <div className="codemirror-container">
                                <strong>Vista previa</strong>
                                <div className="button-container" style={{'background': '#ebedef', 'height': '450px'}}>
                                <Table tableData={this.state.tableData2}/>
                                </div>
                                <strong>Código</strong>
                                <CodeMirror
                                    options={this.state.config.codeEditorConfig}
                                    value={(`var tableData = ${JSON.stringify(this.state.tableData2)}\n\n<Table tableData={tableData}/>`)}
                                    onChange={(editor, data, value) => {
                                    }}
                                />
                            </div>
                            
                        </div>
                    </Card>

                    <Card title="Tabla sin filas">
                        <div className="">
                            <p>Tabla con el campo rowData vacío carga un componente propio en reemplazo de la tabla.</p>
                            <div className="codemirror-container">
                                <strong>Vista previa</strong>
                                <div className="button-container" style={{'background': '#ebedef', 'height': '450px'}}>
                                <Table tableData={this.state.tableData3} emptyTableDisplay={EmptyTable}/>
                                </div>
                                <strong>Código</strong>
                                <CodeMirror
                                    options={this.state.config.codeEditorConfig}
                                    value={(`var tableData = ${JSON.stringify(this.state.tableData3)}\n\n<Table tableData={tableData} emptyTableDisplay={EmptyTableComponent}/>`)}
                                    onChange={(editor, data, value) => {
                                    }}
                                />
                            </div>
                            
                        </div>
                    </Card>
                    
                    
                    
                    
                    
                </div>
            
        )
    }
}

export default newComponent;
    