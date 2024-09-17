import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mock_transactions from '@/mocks/transactions_new.json'
import { TransactionDetails } from '@/types/graph.interface'

interface TransactionState {
    transactions: TransactionDetails[];
}

const initialState: TransactionState = {
    // @ts-ignore
    transactions: mock_transactions
};

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions(state, action: PayloadAction<TransactionDetails[]>) {
            state.transactions = action.payload;
        },
        addTransaction(state, action: PayloadAction<TransactionDetails>) {
            state.transactions.push(action.payload);
        },
        removeTransaction(state, action: PayloadAction<string>) {
            state.transactions = state.transactions.filter(tx => tx.hash !== action.payload);
        },
    }
});

export const { setTransactions, addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
