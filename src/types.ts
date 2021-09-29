export type ExpenseType = {
    id: number,
    friend: number,
    description: string,
    date: string,
    amount: number
};

export type FriendType = {
    id: number,
    name: string,
    amount: number
};