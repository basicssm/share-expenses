import React from 'react';
import { FriendType, ExpenseType } from '../types';

const Friends = ({ expenses, friends }: { expenses: ExpenseType[], friends: FriendType[] }) => {
    type FriendWithAmount = FriendType & {amount: number};

    const totalExpenses:number = expenses.reduce((acc, { amount }) => acc + amount, 0);
    const friendsWithAmount: FriendWithAmount[] = friends.map((friend) => {
        const friendExpense = expenses.find((expense:ExpenseType) => expense.friend === friend.id)?.amount || 0;
        const amount = (totalExpenses / friends.length) - friendExpense;

        return {...friend, amount };
    });

    return (<>
        <h3>Balances:</h3>
        <ul>
        {
            friendsWithAmount.map(({ id, name, amount } : FriendWithAmount) => <li key={`Friend${id}`} className="friend">
                <span className="name">{name}:</span>
                <span className={`amount ${amount < 0 ? 'negative' : ''}`}>{amount} €</span>
            </li>)
        }
        </ul>
    </>);
}

export default Friends;