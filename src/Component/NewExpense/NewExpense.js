import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (newExpenseData) => {
        let expenseData = {
            ...newExpenseData
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const setEditingHandler = () => {
        setIsEditing(true)
    }

    const setCancelEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && (<button type='button' onClick={setEditingHandler}>Add New Expense</button>)}
            {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={setCancelEditingHandler} />)}
        </div>
    )
}
