import React from 'react';
import ReactDOM from 'react-dom';
import { InputComponent } from 'infinite-autocomplete';
import { InfinityAutoComplete } from 'react-infinite-autocomplete';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const data = require('./newdata').map(d => ({ text: d.Location, value: d.OwnerID }));

class CustomInput extends InputComponent {
  render() {
    return '<input style="background: red;"/>';
  }
}

class App extends React.Component {
  render() {
    return <div>
      <h1>Its working</h1>
      <InfinityAutoComplete
        data={data}
        customizedInput={CustomInput} />
    </div>
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



