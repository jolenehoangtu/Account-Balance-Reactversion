import { Component } from 'react';
import Header from './components/Header';
import InputFields from './components/InputFields';
import DataDisplay from './components/DataDisplay';

class App extends Component {
  
  state = {
    inputType:"income",
    income:"income",
    expense:"expense",
    desc: "",
    amount: "",
    incomeList=[],
    expenseList=[]
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
      });}
      if (this.state.inputType==="expense"){
        const expenseList=this.state.expenseList;
        expenseList.push({desc,amount});
        this.setState({
          expenseList
        });
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
      }else if(arr==="expenseList"){
        const newList= this.state.expenseList.filter(i=>
          i.id !== item.id
        );
        this.setState({"expenseList":newList});
      }
    }
  }

  render() {
    return (
      <div>
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
          expenseSum={this.state.expenseTotal}
          incomeSum={this.state.incomeSum}
          date={this.state.date}
          handleDelete={this.handleDelete}
          />
        </main>
      </div>
        
    );
  }
  }
export default App;