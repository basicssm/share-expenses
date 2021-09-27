import React from 'react';

type ExpenseData = {
    data: {
        id: number,
        friend: number,
        description: string,
        date: string,
        amount: number
    }
};

const Friend = ({ data: { id, description, date, amount } }: ExpenseData) =>
    <li id={`Friend${id}`}>{`${description}: ${amount} €`}</li>;

export default Friend;