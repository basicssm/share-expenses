import { ExpenseType, FriendType } from './types';

export const friendsMock: FriendType[] = [
  {
    id: 1,
    name: "Francisco Navarro",
    amount: 1500
  },
  {
    id: 2,
    name: "Carlos Barrón",
    amount: 44
  },
  {
    id: 3,
    name: "Claudia Caballero",
    amount: 0
  },
  {
    id: 4,
    name: "Fede Garcia",
    amount: 0
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
];
