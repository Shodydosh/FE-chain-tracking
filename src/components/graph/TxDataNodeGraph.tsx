'use client'
import React, { useState, useEffect, useCallback } from 'react'
import ReactFlow, {
  Background,
  Connection,
  Controls,
  ReactFlowProvider,
  addEdge,
} from 'react-flow-renderer'

interface Transaction {
  event: string
  time: string
  details: {
    sender: string
    receiver: string
    amount: number
    token: string
    sender_name: string
    receiver_name: string
  }
}

interface Node {
  id: string
  position: { x: number; y: number }
  data: { label: string }
}

interface Edge {
  id: string
  source: string
  target: string
}

// Transform transaction data into nodes and edges
const transactionData: Transaction[] = [
  {
    event: '',
    time: '8-5-2022T05:23',
    details: {
      sender: '0x0b95993a39a363d99280ac950f5e4536ab5c5566',
      sender_name: 'Ethereum Mainnet',
      amount: 6000000,
      token: 'ETH',
      receiver: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      receiver_name: 'Polygon Network',
    },
  },
  {
    event: '',
    time: '8-5-2022T07:44',
    details: {
      sender: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      sender_name: 'Polygon Network',
      amount: 600,
      token: 'ETH',
      receiver: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
      receiver_name: 'Ethereum Sepolia',
    },
  },
  {
    event: '',
    time: '8-5-2022T07:45',
    details: {
      sender: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      sender_name: 'Polygon Network',
      amount: 344,
      token: 'ETH',
      receiver: '0x00000000219ab540356cBB839Cbe05303d623545',
      receiver_name: 'Alice',
    },
  },
  {
    event: '',
    time: '8-5-2022T12:25',
    details: {
      sender: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      sender_name: 'Polygon Network',
      amount: 243,
      token: 'ETH',
      receiver: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      receiver_name: 'Tung',
    },
  },
  {
    event: '',
    time: '8-5-2022T13:08',
    details: {
      sender: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      sender_name: 'Polygon Network',
      amount: 654,
      token: 'ETH',
      receiver: '0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf',
      receiver_name: 'Avalanche Network',
    },
  },
  {
    event: '',
    time: '8-5-2022T13:16',
    details: {
      sender: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      sender_name: 'Polygon Network',
      amount: 341,
      token: 'ETH',
      receiver: '0xjuwhg94gb54uouobgu4h5th45u325324532452',
      receiver_name: 'Phu',
    },
  },
  {
    event: '',
    time: '8-5-2022T13:16',
    details: {
      sender: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      sender_name: 'Polygon Network',
      amount: 134,
      token: 'ETH',
      receiver: '0x345234532452345234523486734528743205gf',
      receiver_name: 'Bob',
    },
  },
  {
    event: '',
    time: '8-5-2022T13:18',
    details: {
      sender: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b',
      sender_name: 'Polygon Network',
      amount: 32,
      token: 'ETH',
      receiver: '0x345234532452345234523486734528743205gf',
      receiver_name: 'Bob',
    },
  },
]

const transformDataToNodesAndEdges = (data: Transaction[]) => {
  const nodes: Node[] = []
  const edges: Edge[] = []
  const nodeMap: { [key: string]: string } = {}

  // Define row positions
  const rowPositions: { [key: string]: number } = {
    'Ethereum Mainnet': 0,
    'Polygon Network': 100,
    Other: 200,
  }

  data.forEach((transaction, index) => {
    const senderId = transaction.details.sender
    const receiverId = transaction.details.receiver
    const senderName = transaction.details.sender_name
    const receiverName = transaction.details.receiver_name

    // Determine row for sender
    const senderRow =
      rowPositions[senderName] !== undefined
        ? rowPositions[senderName]
        : rowPositions['Other']
    // Determine row for receiver
    const receiverRow =
      rowPositions[receiverName] !== undefined
        ? rowPositions[receiverName]
        : rowPositions['Other']

    if (!nodeMap[senderId]) {
      nodeMap[senderId] = `node-${Object.keys(nodeMap).length}`
      nodes.push({
        id: nodeMap[senderId],
        position: { x: 100 * index, y: senderRow },
        data: { label: senderName },
      })
    }

    if (!nodeMap[receiverId]) {
      if (senderName === 'Ethereum Mainnet') {
        nodeMap[receiverId] = `node-${Object.keys(nodeMap).length}`
        nodes.push({
          id: nodeMap[receiverId],
          position: { x: 0, y: receiverRow }, //TODO: TEMP
          data: { label: receiverName },
        })
      } else {
        nodeMap[receiverId] = `node-${Object.keys(nodeMap).length}`
        nodes.push({
          id: nodeMap[receiverId],
          position: { x: 200 * (index - 3), y: receiverRow }, //TODO: TEMP
          data: { label: receiverName },
        })
      }
    }

    edges.push({
      id: `edge-${nodeMap[senderId]}-${nodeMap[receiverId]}-${index}`, // Ensure unique edge ID
      source: nodeMap[senderId],
      target: nodeMap[receiverId],
    })
  })

  return { nodes, edges }
}

const Flow = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])

  useEffect(() => {
    const { nodes, edges } = transformDataToNodesAndEdges(transactionData)
    setNodes(nodes)
    setEdges(edges)
  }, [])

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
        <div style={{ height: 800 }}>
          <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </main>
  )
}

export default () => (
  <ReactFlowProvider>
    <Flow />
  </ReactFlowProvider>
)
