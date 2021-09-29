import React from 'react';
import { FriendType } from '../types';

const Friends = ({ friends }: { friends: FriendType[] }) =>
    <>
        <h3>Balances:</h3>
        <ul>
        {
            friends.map(({ id, name, amount } : FriendType) => <li key={`Friend${id}`}>{name}: {amount} €</li>)
            }
        </ul>
    </>;

export default Friends;