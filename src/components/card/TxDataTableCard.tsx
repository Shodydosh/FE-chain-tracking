import React from 'react'
import TxDataTable from '@/components/tx/TxDataTable'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const TxDataTableCard = () => {
  return (
    <>
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Recent transactions description</CardDescription>
        </CardHeader>
        <CardContent>
          <TxDataTable />
        </CardContent>
      </Card>
    </>
  )
}

export default TxDataTableCard
