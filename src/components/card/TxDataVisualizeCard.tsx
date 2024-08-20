import React from 'react'
import TxDataVisualize from '../tx/TxDataVisualize'

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
          <CardTitle>Story</CardTitle>
          <CardDescription>Story based on selected transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <TxDataVisualize />
        </CardContent>
      </Card>
    </>
  )
}

export default TxDataTableCard
