import React from "react";
import "./InputFields.css";
const InputFields = props =>{
    let {desc, amount,income, expense, inputType, handleInput, handleInputClick}=props;
    return(
        <div className="inputWrapper">
        <form onSubmit={handleInputClick}>
            <select value={inputType} className="select" onChange={handleInput}>
            <option value={income}> INCOME </option>
            <option value={expense}> EXPENSE </option>
            </select>
            <label htmlFor="desc"> Description</label> 
            <input
                type="text"
                id="desc"
                name="desc"
                className=""
                onChange={handleInput}
                value={desc}
                required
            />
            <label htmlFor="amount">Amount</label>
            <input
                type="number"
                id="amount"
                name="amount"
                className=""
                onChange={handleInput}
                value={amount}
                required
            />
            <button className="button"> ADD </button>
        </form>
        </div>
    );
}

export default InputFields;