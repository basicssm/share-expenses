import React, { useState }  from 'react';
import './App.css';
import { friendsMock, expensesMock } from './mocks';
import Friends from './components/Friends';
import Expenses from './components/Expenses';
import Button from './components/Button';
import FriendForm from './components/FriendForm';
import ExpenseForm from './components/ExpenseForm';
import { FriendType, ExpenseType } from './types';

function App() {
  const [ friends, setFriends ] = useState<FriendType[]>(friendsMock);
  const [ expenses, setExpenses ] = useState<ExpenseType[]>(expensesMock);
  const [ visibleFriendForm, setVisibleFriendForm ] = useState<Boolean>(false);
  const [ visibleExpenseForm, setVisibleExpenseForm ] = useState<Boolean>(false);

  const _showAddExpense:() => void = () => {
    setVisibleExpenseForm(true);
  };
  const _showAddFriend:() => void = () => {
    setVisibleFriendForm(true);
  };
  const addFriend:(newFriend:FriendType) => void = (newFriend) => {
    setFriends([...friends, newFriend]);
    setVisibleFriendForm(false);
  }
  const addExpense:(newExpense:ExpenseType) => void = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    setVisibleExpenseForm(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Share expenses and don't lose friends.
        </p>
      </header>
      <div className="wrapper">
        <Expenses expenses={expenses} friends={friends}/>
        <Friends  expenses={expenses} friends={friends}/>
        <nav>
          <Button label="Add expense" onClick={_showAddExpense}/>
          <Button label="Add friend"  onClick={_showAddFriend} />
        </nav>
      </div>

      { visibleFriendForm ? <FriendForm friends={friends} addFriend={addFriend} /> : '' }
      { visibleExpenseForm ? <ExpenseForm friends={friends} expenses={expenses} addExpense={addExpense} /> : '' }
    </div>
  );
}

export default App;
