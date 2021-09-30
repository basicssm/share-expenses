import { ExpenseType, FriendType } from './types';

export const friendsMock: FriendType[] = [
  {
    id: 1,
    name: "Francisco Navarro"
  },
  {
    id: 2,
    name: "Carlos Barrón"
  },
  {
    id: 3,
    name: "Claudia Caballero"
  },
  {
    id: 4,
    name: "Nikolaa Verle"
  },
];

export const expensesMock: ExpenseType[] = [
  {
    id: 1,
    friend: 2,
    description: "Casa de campo",
    amount: 350,
    date: "2021-09-29",
  },
  {
    id: 2,
    friend: 3,
    description: "Comida asturiano",
    amount: 50,
    date: "2021-09-10",
  },
  {
    id: 3,
    friend: 4,
    description: "Cervezas",
    amount: 25,
    date: "2021-09-30 11:01:23",
  },
];
