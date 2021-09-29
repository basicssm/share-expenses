import React from 'react';
import { ExpenseType, FriendType } from '../types';
import moment from 'moment';

const Expenses = ({ expenses, friends }: { expenses: ExpenseType[], friends: FriendType[] }) => {
    type ExpenseParsed = ExpenseType & {friendName: string};
    const expensesParsed: ExpenseParsed[] = expenses.map((expense) => {
        const friendName = friends.find((f:FriendType) => f.id === expense.friend)?.name || '';

        return {...expense, friendName };
    });

    return (<>
        <h3> Expenses: </h3>
        <ul>
            {
            expensesParsed.map(({ id, description, amount, date, friendName } : ExpenseParsed) =>
                <li key={`Expense${id}`}>
                    <div>{friendName} {amount} €</div>
                    <div>{description} {_getWhenString(date)}</div>
                </li>
            )
            }
        </ul>
    </>);
};

const _getWhenString = (date:string) => {
    const today = moment();
    const dateExpense = moment(date);
    let scale = 'seconds';
    let diff = today.diff(dateExpense, 'seconds');

    if(diff >= 60) {
        diff = today.diff(dateExpense, 'minutes');
        scale = 'minutes';

        if(diff >= 60) {
            diff = today.diff(dateExpense, 'hours');
            scale = 'hours';

            if(diff >= 24) {
                diff = today.diff(dateExpense, 'days');
                scale = 'days';
            }
        }
    }

    return `${Math.abs(diff)} ${scale} ago`;
}


export default Expenses;