// lib/apiHandler.ts
import transactions_json from '@/mocks/transactions.json'

export type Transaction = {
    txnHash: string
    type: string
    status: string
    date: string
    amount: string
    added?: boolean // New field
  }


// Function to fetch transactions
export const fetchTransactions = async () => {
  const transactions = transactions_json
  return transactions
}
