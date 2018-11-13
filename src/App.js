import React, { Component } from 'react';

import Header from './components/Header';
import InputFields from './components/InputFields';
import DataDisplay from './components/DataDisplay';
import BalanceDisplay from './components/BalanceDisplay';

class App extends Component {
  

  render() {
    return (
      <div>
        <Header/>
        <main>
          <InputFields
          desc = {this.state.desc}
          amount = {this.state.amount}
          income={this.state.income}
          expense={this.state.expense}
          inputType = {this.state.inputType}
          handleInput={this.handleInput}
          handleInputClick = {this.handleInputClick}
          />

          <DataDisplay
          
          />

          <BalanceDisplay
          
          />
          

        </main>
      </div>
        
       
       
  

    );
  }
}
export default App;