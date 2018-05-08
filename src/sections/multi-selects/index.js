import React, { Component } from 'react';
import { MultipleSelect, Card , Button} from '@smartadtags/sta-components';
import axios from 'axios';
import config from '../../config';
class newComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config,
            data : [],
            value : [],
            loading : false
        };
    }

    componentDidMount() {
      this.randomData();
    }

    randomData() {
      var self = this;
      self.setState(previousState => {
         return { loading: true };
       });

      axios.get('http://api.icndb.com/jokes/random/25')
      .then(function (response) {
        var newData = [];
        var caca = 0;

        for (let item of response.data.value) {
          var newItem = {
            key : item.id,
            value : item.joke,
            text : item.joke
          };


          newData.push(newItem);
        }

        self.setState(previousState => {
           return {
             data : newData,
             value : [],
             loading: false
           };
         });
      })
    }

    onChangeHandler(ev,data) {
      this.setState(previousState => {
         return { value: data.value };
       });
    }

    renderValues(values) {
      var list = [];

      for (let value of values) {
          list.push(<li>{value}</li>)
      }

      return list;
    }

    render(){
        var options = [ { key: 'AL', value: 'AL', text: 'Alabama' }, { key: 'AR', value: 'AR', text: 'Argentina' }, { key: 'BR', value: 'BR', text: 'Brazil' }]

        return (
            <Card title="Multiple select" config={this.state.config.cardConfig}>
                <MultipleSelect onChange={this.onChangeHandler.bind(this)} value={this.state.value}  loading={this.state.loading} options={this.state.data} config={this.state.config.selectConfig}/>
                <br />
                <Button onClick={this.randomData.bind(this)}>Recargar datos</Button>
                <br />
                <br />
                <p>
                  Valores
                </p>

                {this.renderValues(this.state.value)}
            </Card>
        )
    }
}

export default newComponent;
