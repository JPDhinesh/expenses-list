import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item-description'>
                <h3>{props.title}</h3>
                <div className='expense-item-price'>${props.amount}</div>
            </div>
        </div>
    )
}
