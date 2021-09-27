import React from 'react';

type FriendData = {
    data: {
        id: number,
        name: string
    }
};

const Friend = ({ data: { id, name } }: FriendData) => <li id={`Friend${id}`}>{name}</li>;

export default Friend;