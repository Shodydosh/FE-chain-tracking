import React from 'react'
import TxDataVisualize from '../stories/TxDataVisualize'
import { TransactionsList } from '@/types/transaction.interface'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface TxDataVisualizeCardProps {
  txList: TransactionsList
}

const TxDataVisualizeCard: React.FC<TxDataVisualizeCardProps> = ({ txList }) => {
  console.log(txList)
  return (
    <>
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Story</CardTitle>
          <CardDescription>Story based on selected transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <TxDataVisualize txList={txList} />
        </CardContent>
      </Card>
    </>
  )
}

export default TxDataVisualizeCard
