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
                <li key={`Expense${id}`} className="expense">
                    <div>
                        <span className="friend">{friendName}</span>
                        <span className="amount">{amount} €</span>
                    </div>
                    <div>
                        <span className="description">{description}</span>
                        <span className="date">{moment(date).fromNow()}</span>
                    </div>
                </li>
            )
            }
        </ul>
    </>);
};

export default Expenses;