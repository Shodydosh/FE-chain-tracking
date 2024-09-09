'use client'
import React, { useState, useEffect } from 'react'
import TxDataNodeGraph from '@/components/graph/TxDataNodeGraph'
import AddressInfoCard from '../card/AddressInfoCard'
import TxInfoCard from '../card/TxInfoCard'
import { getEthereumWalletData } from '@/api/GetEthereumWalletData'
import GraphTxDataTableCard from './GraphTxDataTableCard'

import { EdgeData, NodeData } from '@/types/graph.interface'
import { getAddressBalance, getAddressTransactions } from '@/services/address'
import { Transaction } from '@/types/wallet.interface'

const GraphContent = () => {
  const [nodeInfo, setNodeInfo] = useState<NodeData | null>(null)
  const [edgeInfo, setEdgeInfo] = useState<EdgeData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [balance, setBalance] = useState<number>()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [lastUpdated, setLastUpdated] = useState<'node' | 'edge' | null>(null)

  const handleNodeClick = (nodeInfo: NodeData) => {
    setNodeInfo(nodeInfo)
    setEdgeInfo(null) // Xóa edgeInfo khi node được click
    setLastUpdated('node') // Đặt trạng thái cập nhật gần nhất là node
  }

  const handleEdgeClick = (edgeInfo: EdgeData) => {
    setEdgeInfo(edgeInfo)
    setNodeInfo(null) // Xóa nodeInfo khi edge được click
    setLastUpdated('edge') // Đặt trạng thái cập nhật gần nhất là edge
  }

  useEffect(() => {
    const fetchWalletData = async () => {
      if (nodeInfo?.details?.address) {
        try {
          setLoading(true) // Start loading when fetching begins
          const balanceData = await getAddressBalance(nodeInfo.details.address)
          const transactionsData = await getAddressTransactions(nodeInfo.details.address)
          console.log('🚀 ~ fetchWalletData ~ transactionsData:', transactionsData)
          console.log('🚀 ~ fetchWalletData ~ balanceData:', balanceData)
          setBalance(balanceData) // Set the fetched balance
          setTransactions(transactionsData) // Set the fetched transactions
        } catch (error) {
          console.error('Error fetching wallet data:', error)
        } finally {
          setLoading(false) // Stop loading after data is fetched
        }
      } else {
        setLoading(false) // Stop loading if no valid address is present
      }
    }
    console.log('NODE INFO:', nodeInfo)
    nodeInfo && fetchWalletData()
  }, [nodeInfo]) // Re-fetch if the address changes

  useEffect(() => {}, [balance])

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
        <div className="p-4">
          <TxDataNodeGraph
            onAddressClick={handleNodeClick} // Capture node click event
            onTxClick={handleEdgeClick} // Capture edge click event
          />
        </div>
        <div>
          {loading ? <div>Loading...</div> : <>NOT LOADING</>}
          {nodeInfo && (
            <>
              <AddressInfoCard nodeData={nodeInfo} balance={balance} loading={loading} />
            </>
          )}
          <div className="h-4"></div>
          {nodeInfo && !loading && transactions && (
            <>
              <GraphTxDataTableCard nodeData={nodeInfo} txs={transactions} />
            </>
          )}
          {edgeInfo && <TxInfoCard edgeData={edgeInfo} />}
        </div>
      </div>
    </main>
  )
}

export default GraphContent
