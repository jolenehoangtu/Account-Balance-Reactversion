import React from "react";


const DataDisplay = props =>{
    let {expenseList, incomeList, handleDelete} = props;

const incomeDisplay =
incomeList !==[]
? incomeList.map((income,index)=> {
    let{ desc, amount}=income;
    return(
        <li key={index}>
            <span className="">
            {desc.toUpperCase()}
            </span>
            <span className="">
            {amount}
            </span>
            <button className="" onClick={()=> {handleDelete("incomeList",income)}}>DELETE</button>
        </li>
    );
})
:null;

const expenseDisplay=
expenseList !==[]
? expenseList.map((expense,index)=>{
    let {desc,amount} = expense;
    return(
        <li key={index}>
        <span className="">
            {desc.toUpperCase()}
            </span>
            <span className="">
            {amount}
            </span>
            <button className="" onClick={()=> {handleDelete("expenseList",expense)}}>DELETE</button>
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
        <div>
            <p> Income</p>
            <ul>{incomeDisplay}</ul>
            <div>Income Sum: {" "}<span>{incomeSumCal()}</span></div>
        </div>
        <div>
            <p> expense</p> 
            <ul>{expenseDisplay}</ul>
            <div> Expense Sum: {" "}<span>{expenseSumCal()}</span></div>
        </div>
        <div>Total Balance:{" "}<span>{balanceCal()}</span></div>
        <div>
            
        </div>
    </div>
);
};
export default DataDisplay;