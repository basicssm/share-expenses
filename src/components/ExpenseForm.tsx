import React, { useState }  from 'react';
import { FriendType, ExpenseType } from '../types';
import Button from './Button';

const ExpenseForm = ({ friends, expenses, addExpense }: { friends: FriendType[], expenses: ExpenseType[], addExpense:(expense: ExpenseType) => void}) => {
    const [ friendId, setFriendId ] = useState<number>(0);
    const [ expenseDescription, setExpenseDescription ] = useState<string>('');
    const [ expenseDate, setExpenseDate ] = useState<string>('');
    const [ expenseAmount, setExpenseAmount ] = useState<number>(0);

    return (<>
        <h3>Add Expense:</h3>
        <input id="description" type="text" placeholder="Description" onChange={e => setExpenseDescription(e.target.value)}/>
        <input id="amount" type="number" placeholder="Amount" onChange={e => setExpenseAmount(Number(e.target.value))}/>
        <input id="date" type="date" placeholder="Date" onChange={e => setExpenseDate(e.target.value)}/>
        <select onChange={e => setFriendId(Number(e.target.value))}>
            <option value="0">Select the friend</option>
            {friends.map(({ id, name }) => <option value={id}>{name}</option>)}
        </select>
        <Button label="Add" onClick={() => {
            if (!expenseDescription || !friendId || !expenseDate || !expenseAmount) {
                alert('Fill all fields, please');
                return;
            }
            addExpense( {
                id: expenses.length + 1,
                description: expenseDescription,
                friend: friendId,
                date: expenseDate,
                amount: expenseAmount
            });
        }}></Button>
    </>);
}

export default ExpenseForm;