import React from "react";

const InputFields = props =>{
    let {desc, amount,income, expense, inputType, handleInput, handleInputClick}=props;
    return(
        <div ClassName="">
        <form className="" onSubmit={handleInputClick}>
            <select value={inputType} className="" onChange={handleInput}>
            <option value={income}> INCOME </option>
            <option value={expense}> EXPENSE </option>
            </select>
            <lable htmlFor="desc"> Description</lable> 
            <input
                type="text"
                id="desc"
                name="desc"
                className=""
                onChange={handleInput}
                value={desc}
                required
            />
            <lable htmlFor="amount">Amount</lable>
            <input
                type="number"
                id="amount"
                name="amount"
                className=""
                onChange={handleInput}
                value={amount}
                required
            />
            <button className=""> ADD </button>
        </form>
        </div>
    );
}

export default InputFields;