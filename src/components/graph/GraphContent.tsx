'use client'
import React, { useState } from 'react'
import { EdgeData, NodeData } from '@/types/graph.interface'
import TxDataNodeGraph from '@/components/graph/TxDataNodeGraph'
import AddressInfoCard from '../card/AddressInfoCard'

const GraphContent = () => {
  // State to store the clicked node or edge info
  const [nodeInfo, setNodeInfo] = useState<NodeData | null>(null)
  const [edgeInfo, setEdgeInfo] = useState<EdgeData | null>(null)

  // Handler for when a node is clicked
  const handleNodeClick = (nodeInfo: NodeData) => {
    setNodeInfo(nodeInfo)
  }

  // Handler for when an edge is clicked
  const handleEdgeClick = (edgeInfo: EdgeData) => {
    setEdgeInfo(edgeInfo)
  }

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
          {nodeInfo && JSON.stringify(nodeInfo)}
          {edgeInfo && JSON.stringify(edgeInfo)}
        </div>
      </div>
    </main>
  )
}

export default GraphContent
