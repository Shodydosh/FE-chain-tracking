'use client'
import React, { useState, useEffect } from 'react'
import { EdgeData, NodeData } from '@/types/graph.interface'
import TxDataNodeGraph from '@/components/graph/TxDataNodeGraph'
import AddressInfoCard from '../card/AddressInfoCard'
import TxInfoCard from '../card/TxInfoCard'
import { getAddressData } from '@/api/transactions/getAddressData'

const GraphContent = () => {
  const [nodeInfo, setNodeInfo] = useState<NodeData | null>(null)
  const [edgeInfo, setEdgeInfo] = useState<EdgeData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [addressData, setAddressData] = useState<any>(null) // Example data structure
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
    // Fetch address data async function
    const fetchAddressData = async () => {
      if (!nodeInfo || !nodeInfo.details || !nodeInfo.details.address) {
        console.log('No valid address found in nodeInfo')
        setLoading(false)
        return
      }

      const address = nodeInfo.details.address // Bitcoin address from nodeInfo
      console.log('🚀 ~ fetchAddressData ~ address:', address)
      const response = await getAddressData(address, 50, 0) // Fetch data with limit 50 and offset 0

      if (response) {
        console.log('🚀 ~ fetchAddressData ~ response:', response)
        setLoading(false)
        setAddressData(response)
      } else {
        console.log('Failed to fetch Bitcoin address data.')
        setLoading(false)
      }
    }

    if (nodeInfo) {
      fetchAddressData() // Call the fetch function if nodeInfo is available
    }
  }, [nodeInfo]) // Adding nodeInfo as a dependency to rerun the effect when it changes

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
          {loading && <div>Loading...</div>}
          {!loading && JSON.stringify(addressData)}
          {nodeInfo && <AddressInfoCard nodeData={nodeInfo} />}
          {edgeInfo && <TxInfoCard edgeData={edgeInfo} />}
        </div>
      </div>
    </main>
  )
}

export default GraphContent
