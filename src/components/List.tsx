import React from 'react';
import Friend from './Friend';
import Expense from './Expense';

type ListProps = {
    items: [],
    typeItem: string
};

const List = ({ items, typeItem }: ListProps) => <ul>
    {items.map((item) => typeItem === 'friend' ? <Friend data={item}/> : <Expense data={item} />)}
</ul>;

export default List;