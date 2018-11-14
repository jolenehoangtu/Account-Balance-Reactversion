import { Component } from 'react';
import Header from './components/Header';
import InputFields from './components/InputFields';
import DataDisplay from './components/DataDisplay';
import "./App.css";


class App extends Component {
  
  state = {
    inputType:"income",
    income:"income",
    expense:"expense",
    desc: "",
    amount: "",
   
  };

  handleInput=e=>{
    if (e.target.type==="select-one"){
      this.setState({
        inputType: e.target.value
      });
    }
    if (e.target.type ==="text"){
      this.setState({
        [e.target.name]:e.target.value
      });
    }
    if (e.target.name ==="amount"){
      this.setState({
        amount: partseFloat(e.target.value)
      });
    }
  };
  
  itemAdding= ()=>{
    const desc=this.state.desc;
    const amount=parseFloat(this.state.amount).toFixed(2);
    if (this.state.inputType ==="income"){
      const incomeList=this.state.incomeList;
      incomeList.push({desc, amount});
      this.setState({
        incomeList
      });
      localStorage.setItem(
        "incomeList",
        JSON.stringify(incomeList, undefined, 4)
      );
    }
      if (this.state.inputType==="expense"){
        const expenseList=this.state.expenseList;
        expenseList.push({desc,amount});
        this.setState({
          expenseList
        });
        localStorage.setItem(
          "expenseList",
          JSON.stringify(expenseList, undefined, 4)
        );
      }
    };
    
    handleInputClick=e=>{
      e.preventDefault();
      this.itemAdding();
    };

    handleDelete=(arr,item)=>{
      if (arr==="incomeList"){
        const newList = this.state.incomeList.filter(i=>
          i.id!==item.id);
          this.setState({"incomeList":newList});
          localStorage.setItem(
            "incomeList",
            JSON.stringify(newList, undefined, 4)
          );
      }else if(arr==="expenseList"){
        const newList= this.state.expenseList.filter(i=>
          i.id !== item.id
        );
        this.setState({"expenseList":newList});
        localStorage.setItem(
          "expenseList",
          JSON.stringify(newList, undefined, 4)
        );
  
      }
    }
  

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <InputFields
          inputType = {this.state.inputType}
          income={this.state.income}
          expense={this.state.expense}
          desc = {this.state.desc}
          amount = {this.state.amount}
          handleInput={this.handleInput}
          handleInputClick = {this.handleInputClick}
          />

          <DataDisplay
          expenseList={this.state.expenseList}
          incomeList={this.state.incomeList}
          expenseSum={this.state.expenseSum}
          incomeSum={this.state.incomeSum}
          handleDelete={this.handleDelete}
          />
        </main>
      </div>
        
      );
    }
  }

export default App;