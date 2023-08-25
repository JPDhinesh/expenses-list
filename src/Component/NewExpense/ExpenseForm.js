import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterDate, setEnterDate] = useState('')
    const [enterAmount, setEnterAmount] = useState('')

    const enterTitleHandler = (event) => {
        setEnterTitle(event.target.value)
    }

    const enterDateHandler = (event) => {
        setEnterDate(event.target.value)
    }

    const enterAmountHandler = (event) => {
        setEnterAmount(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnterTitle('')
        setEnterDate('')
        setEnterAmount('')
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='expense-form'>
                <div className='expense-form-internal'>
                    <label>Title</label>
                    <input type='text' placeholder='Enter the expense name' value={enterTitle} onChange={enterTitleHandler}></input>
                </div>
                <div className='expense-form-internal'>
                    <label>Date</label>
                    <input type='date' value={enterDate} onChange={enterDateHandler}></input>
                </div>
                <div className='expense-form-internal'>
                    <label>Amount</label>
                    <input type='number' placeholder='Enter the amount' value={enterAmount} onChange={enterAmountHandler}></input>
                </div>
                <div className='expense-form-actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
