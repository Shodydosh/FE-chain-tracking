'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/lib/store'
import {
  addTransaction,
  removeTransaction,
} from '@/lib/features/transactions/transactionsSlice'
import { TransactionDetails } from '@/types/graph.interface'

// Properly typed sampleTransaction
const sampleTransaction: TransactionDetails = {
  hash: '0xSampleHash',
  type: 0,
  accessList: null,
  blockHash: '0x691870091de1e424c1f6470ef564919617864b3e6317feb28b70d23e6a73d934',
  blockNumber: 11423886,
  transactionIndex: 47,
  confirmations: 9204872,
  from: {
    address: 'xx',
    type: 'EOA_active',
  },
  gasPrice: '65000000000',
  gasLimit: '21000',
  to: {
    address: 'vasv',
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

const TESTT = () => {
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
    <div>
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
    </div>
  )
}

export default TESTT
