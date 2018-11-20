import React from "react";
import "./DataDisplay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DataDisplay = props =>{
    let {expenseList, incomeList, handleDelete} = props;

const incomeDisplay =
incomeList !==[]
? incomeList.map((income,index)=> {
    let{ desc, amount, date}=income;
    return(
        <li key={index}>
            <span className="">
            {desc.toUpperCase()}
            </span>
            <span className="">
            {amount}
            </span>
            <span className="">{date}</span>
            <button className="" onClick={()=> {handleDelete("incomeList",income)}}><FontAwesomeIcon icon={faTrash}/></button>
        </li>
    );
})
:null;

const expenseDisplay=
expenseList !==[]
? expenseList.map((expense,index)=>{
    let {desc,amount,date} = expense;
    return(
        <li key={index}>
        <span className="">
            {desc.toUpperCase()}
            </span>
            <span className="">
            {amount}
            </span>
            <span className="">{date}</span>
            <button className="" onClick={()=> {handleDelete("expenseList",expense)}}><FontAwesomeIcon icon={faTrash}/></button>
        </li>

    );
})
: null;

const incomeSumCal=()=>{
    return incomeList.reduce((acc,curr)=>{
        return acc + parseFloat(curr.amount);
    },0);
};

const expenseSumCal=()=>{
    return expenseList.reduce((acc,curr)=>{
        return acc+ parseFloat(curr.amount);
     },0 );
};

const balanceCal=()=>{
    let balance = incomeSumCal()-expenseSumCal();
    return balance;
};



return(
    <div>
    <div id="wrapper">
        <div className="income">
            <div className="title-income"> Income</div>
            <ul className="datadisplay">{incomeDisplay}</ul>
            <div className="sum">Income Sum: {" "}<span>{incomeSumCal()}</span></div>
        </div>
        <div className="expense">
            <div className="title-expense"> Expense</div> 
            <ul className="datadisplay">{expenseDisplay}</ul>
            <div className="sum"> Expense Sum: {" "}<span>{expenseSumCal()}</span></div>
        </div>
        </div>  

        <div>
        <div className="total">Total Balance:{" "}{balanceCal()}</div>
        </div>
     
    </div>
);
};
export default DataDisplay;