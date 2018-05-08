import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Layout } from '@smartadtags/sta-components';
import MainSection from './sections/main';
import ButtonSection from './sections/buttons';
import DatepickerSection from './sections/datepickers';
import InputSection from './sections/inputs';
import ModalSection from './sections/modals';
import LoginSection from './sections/login';
import TableSection from './sections/tables';
import MultiSelectSection from './sections/multi-selects';
import LayoutDemo from './sections/layout-demo';
import config from './config';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config,
            enableFilters : false,
        };
    }

    renderLink(children, key, target){
        //const path = ('/' + window.location.origin + '/' + target);
        return(<Link key={key} to={`${target}`}>{children}</Link>)
    }

    evalClick(cb) {
        if (cb && (typeof(cb) === 'function'))
            var result = cb();
    }

    toggleFilters(activate) {
      this.setState(previousState => {
         return {
             enableFilters: activate,
         };
       });
    }

    render() {
        return (
          <div className="App">

              <BrowserRouter basename={this.state.config.basename}>
                  <Layout config={this.state.config.layoutConfig} enableFilters={this.state.enableFilters} renderLink={this.renderLink} itemClicked={this.evalClick}>
                        <Switch>
                            <Route path={`/buttons`} component={ButtonSection}/>
                            <Route path={`/datepickers`} component={DatepickerSection}/>
                            <Route path={`/inputs`} component={InputSection}/>
                            <Route path={`/modals`} component={ModalSection}/>
                            <Route path={`/login`} component={LoginSection}/>
                            <Route path={`/table`} component={TableSection}/>
                            <Route path={`/multi-selects`} component={MultiSelectSection}/>
                            <Route path={`/layout-demo`}  render={() => <LayoutDemo enableFilters={this.toggleFilters.bind(this , true)} disableFilters={this.toggleFilters.bind(this, false)} />}/>
                            <Route path={`/`} component={MainSection} />
                        </Switch>
                  </Layout>
              </BrowserRouter>
          </div>
        );
    }
}

export default App;
