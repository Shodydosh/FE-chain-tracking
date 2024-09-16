'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/lib/store'
import {
  addTransaction,
  removeTransaction,
} from '@/lib/features/transactions/transactionsSlice'
import { TransactionDetails } from '@/types/graph.interface'
import TESTT from './tt/page'
// Properly typed sampleTransaction
const sampleTransaction: TransactionDetails = {
  hash: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxx',
  type: 0,
  accessList: null,
  blockHash: '0x691870091de1e424c1f6470ef564919617864b3e6317feb28b70d23e6a73d934',
  blockNumber: 11423886,
  transactionIndex: 47,
  confirmations: 9204872,
  from: {
    address: '0xB84844becf02D9f9839f2e6860411E0083bf1c7b',
    type: 'EOA_active',
  },
  gasPrice: '65000000000',
  gasLimit: '21000',
  to: {
    address: '0x05f51AAb068CAa6Ab7eeb672f88c180f67F17eC7',
    type: 'contract_exchange',
  },
  value: '1000000000000000000',
  nonce: 14,
  data: '0x',
  r: '0x6e9520e95f457f04e9baae390131d93f375ec00c7c14fb23775f25544fc45f6b',
  s: '0x212f376011762ea6595abbbded0e25180ab7b733fa98cdfbeecaf58985a5092a',
  v: 38,
  creates: null,
  chainId: 1,
}

const TransactionList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const transactions = useSelector((state: RootState) => state.transactions.transactions)

  // Handler to add a new transaction
  const handleAddTransaction = () => {
    dispatch(addTransaction(sampleTransaction))
  }

  // Handler to remove a transaction
  const handleRemoveTransaction = (hash: string) => {
    dispatch(removeTransaction(hash))
  }

  return (
    <div className="grid">
      <h2>Transactions:</h2>
      <button onClick={handleAddTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.hash}>
            {tx.hash} - {tx.value} ETH - Type: {tx.type} - From: {tx.from.address} - To:{' '}
            {tx.to.address}
            <button onClick={() => handleRemoveTransaction(tx.hash)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="mt-2 bg-red-100">
        <TESTT></TESTT>
      </div>
    </div>
  )
}

export default TransactionList
