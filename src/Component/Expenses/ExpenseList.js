import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

export default function ExpenseList(props) {

    if (props.item.length === 0) {
        return <h2 className='expense-list-error'>Found no expenses</h2>
    }

    return (
        <div className='expense-list'>
            {props.item.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    )
}
