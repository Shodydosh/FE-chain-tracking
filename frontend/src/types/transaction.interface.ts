export interface Transaction {
    txnHash: string
    type: string
    status: string
    date: string
    amount: string
    added?: boolean // New field
  }

export type TransactionsList = Transaction[]
