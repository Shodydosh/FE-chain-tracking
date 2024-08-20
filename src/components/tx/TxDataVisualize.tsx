import React from 'react'
import { TransactionsList } from '@/types/transaction.interface'

interface TxDataVisualizeProps {
  txList: TransactionsList
}

const TxDataVisualize: React.FC<TxDataVisualizeProps> = ({ txList }) => {
  return (
    <div>
      <h2>Transaction Data</h2>
      <table>
        <thead>
          <tr>
            <th>Txn Hash</th>
            <th>Type</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Added</th>
          </tr>
        </thead>
        <tbody>
          {txList &&
            txList.map((transaction) => (
              <tr key={transaction.txnHash}>
                <td>{transaction.txnHash}</td>
                <td>{transaction.type}</td>
                <td>{transaction.status}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.added ? 'Yes' : 'No'}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TxDataVisualize
