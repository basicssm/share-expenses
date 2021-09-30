import React, { useState }  from 'react';
import { FriendType } from '../types';
import Button from './Button';

const FriendsForm = ({ friends, addFriend }: { friends: FriendType[], addFriend:(friend: FriendType) => void}) => {
    const [ friendName, setFriendName ] = useState<string>('');

    return (<>
        <h3>Add Friend:</h3>
        <input id="name" type="text" placeholder="Friend's name" onChange={e => setFriendName(e.target.value)}/>
        <Button label="Add" onClick={() => {
            if(!friendName) {
                alert('Friend\'s name is empty');
                return;
            }
            addFriend( { id: friends.length + 1, name: friendName});
        }}></Button>
    </>);
}

export default FriendsForm;