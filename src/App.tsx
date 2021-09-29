import React, { useEffect, useState }  from 'react';
import './App.css';
import { friendsMock, expensesMock } from './mocks';
import Friends from './components/Friends';
import Expenses from './components/Expenses';
import { FriendType, ExpenseType } from './types';

function App() {
  const [ friends, setFriends ] = useState<FriendType[]>([]);
  const [ expenses, setExpenses ] = useState<ExpenseType[]>([]);

  useEffect(() => {
    setFriends(friendsMock);
    setExpenses(expensesMock);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Share expenses and don't lose friends.
        </p>
      </header>
      <Expenses expenses={expenses} friends={friends}/>
      <Friends friends={friends}/>
    </div>
  );
}

export default App;
