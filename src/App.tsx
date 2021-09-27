import React, { useEffect, useState }  from 'react';
import './App.css';
import List from './components/list';

function App() {
  const friendsMock: {id: number, name: string }[] = [
    {
      id: 1,
      name: 'Francisco Navarro',
    }, {
      id: 2,
      name: 'Carlos Barrón'
    }, {
      id: 3,
      name: 'Claudia Caballero'
    }, {
      id: 4,
      name: 'Fede Garcia'
    }
  ];
  const expensesMock: { id: number, friend: number, description: string, amount: number, date:string }[] = [
    {
      id: 1,
      friend: 2,
      description: 'Casa de campo',
      amount: 350,
      date: ''
    },{
      id: 2,
      friend: 3,
      description: 'Comida asturiano',
      amount: 350,
      date: ''
    }
  ];

  const [ isLoading, setIsLoading ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    setIsLoading(false);
    setExpenses(expensesMock);
    setFriends(friendsMock);
  }, [expensesMock, friendsMock])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Share expenses and don't lose friends.
        </p>
      </header>
      {isLoading 
       ? <p>loading data...</p>
      : <>
          <List items={expenses} typeItem="expense" />
          <List items={friends} typeItem="expense" />
        </>
      }
    </div>
  );
}

export default App;
