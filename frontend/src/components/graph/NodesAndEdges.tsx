import { Position } from '@xyflow/react'
import { Node, Edge, MarkerType } from '@xyflow/react'
import { NodeData, EdgeData, TransactionDetails } from '@/types/graph.interface'
import transactions from '@/mocks/transactions_new.json'

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    borderRadius: '3rem',
    backgroundColor: '#fff',
    width: 200,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '6px',
  },
  animated: true,
}

const edgeDefaults = {
  animated: true,
  style: { stroke: 'black' },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: 'black',
  },
}

// const initialNodesMock: NodeData[] = [
//   {
//     id: '1',
//     data: {
//       label: '0x0b95993a39a363d99280ac950f5e4536ab5c5566',
//     },
//     type: 'circle',
//     details: { address: '0x0b95993a39a363d99280ac950f5e4536ab5c5566' },
//     position: { x: 0, y: 0 },
//   },
//   {
//     id: '2',
//     data: { label: '0x00000000219ab540356cBB839Cbe05303d7705Fa' },
//     details: { address: '0x00000000219ab540356cBB839Cbe05303d7705Fa' },
//     position: { x: 200, y: 0 },
//     type: 'normalAddress',
//   },
//   {
//     id: '3',
//     type: 'normalAddress',
//     data: { label: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b' },
//     details: { address: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b' },
//     position: { x: 200, y: 200 },
//   },
//   {
//     id: '4',
//     data: { label: '0x00000000219ab540356cBB839Cbe05303d623545' },
//     details: { address: '0x00000000219ab540356cBB839Cbe05303d623545' },
//     position: { x: 400, y: 250 },
//     type: 'normalAddress',
//   },
//   {
//     id: '5',
//     data: { label: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756Cc2' },
//     details: { address: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756Cc2' },
//     position: { x: 600, y: 100 },
//     type: 'redAddress',
//   },
//   {
//     id: '6',
//     data: { label: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756zzz' },
//     details: { address: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756zzz' },
//     position: { x: 0, y: 200 },
//     type: 'redAddress',
//   },
// ]
// const initialEdgesMock: EdgeData[] = [
//   {
//     id: '1->3',
//     source: '1',
//     target: '3',
//     details: {
//       block: 20612052,
//       hash: '0x9aaf7231bd7986369d993610a0b9a38fd5e88e0695cf325fddf781e5a424078e',
//       type: 2,
//       blockHash: '0x08c0ca871afd3051c85afda4960f03e946499f0ec4ab24c1d79c05a343c2aac1',
//       blockNumber: 20612052,
//       confirmations: 1019,
//       from: '0x1b9c17f71E1F99924f166484174acA3a0a2C9EC3',
//       gasPrice: '4662132764',
//       gas: '51816',
//       to: '0xABD4C63d2616A5201454168269031355f4764337',
//       value: '0',
//       nonce: 1,
//       data: '0xa9059cbb000000000000000000000000d7f46e0be18247ad954b33a04be8d8730eab7b8600000000000000000000000000000000000000000000002ecbe62c888e7e1c00',
//       r: '0x5187841313f4483db1c3e285f48fdbdef53d287b2fbfa3f01da583cde2642f6d',
//       s: '0x08458ada352fc815472bebefbfcc87612c3d7b8a356e9f598d5511343490c05b',
//       v: 1,
//       chainId: 1,
//     },
//     ...edgeDefaults,
//   },
//   {
//     id: '1->2',
//     source: '1',
//     target: '2',
//     details: {
//       block: 20612052,
//       hash: '0x9aaf7231bd7986369d993610a0b9a38fd5e88e0695cf325fddf781e5a424078e',
//       type: 2,
//       blockHash: '0x08c0ca871afd3051c85afda4960f03e946499f0ec4ab24c1d79c05a343c2aac1',
//       blockNumber: 20612052,
//       confirmations: 1019,
//       from: '0x1b9c17f71E1F99924f166484174acA3a0a2C9EC3',
//       gasPrice: '4662132764',
//       gas: '51816',
//       to: '0xABD4C63d2616A5201454168269031355f4764337',
//       value: '0',
//       nonce: 1,
//       data: '0xa9059cbb000000000000000000000000d7f46e0be18247ad954b33a04be8d8730eab7b8600000000000000000000000000000000000000000000002ecbe62c888e7e1c00',
//       r: '0x5187841313f4483db1c3e285f48fdbdef53d287b2fbfa3f01da583cde2642f6d',
//       s: '0x08458ada352fc815472bebefbfcc87612c3d7b8a356e9f598d5511343490c05b',
//       v: 1,
//       chainId: 1,
//     },
//     ...edgeDefaults,
//   },
//   {
//     id: '3->4',
//     source: '3',
//     target: '4',

//     details: {
//       block: 20612052,
//       hash: '0x9aaf7231bd7986369d993610a0b9a38fd5e88e0695cf325fddf781e5a424078e',
//       type: 2,
//       blockHash: '0x08c0ca871afd3051c85afda4960f03e946499f0ec4ab24c1d79c05a343c2aac1',
//       blockNumber: 20612052,
//       confirmations: 1019,
//       from: '0x1b9c17f71E1F99924f166484174acA3a0a2C9EC3',
//       gasPrice: '4662132764',
//       gas: '51816',
//       to: '0xABD4C63d2616A5201454168269031355f4764337',
//       value: '0',
//       nonce: 1,
//       data: '0xa9059cbb000000000000000000000000d7f46e0be18247ad954b33a04be8d8730eab7b8600000000000000000000000000000000000000000000002ecbe62c888e7e1c00',
//       r: '0x5187841313f4483db1c3e285f48fdbdef53d287b2fbfa3f01da583cde2642f6d',
//       s: '0x08458ada352fc815472bebefbfcc87612c3d7b8a356e9f598d5511343490c05b',
//       v: 1,
//       chainId: 1,
//     },
//     ...edgeDefaults,
//   },
//   {
//     id: '4->5',
//     source: '4',
//     target: '5',
//     details: {
//       block: 20612052,
//       hash: '0x9aaf7231bd7986369d993610a0b9a38fd5e88e0695cf325fddf781e5a424078e',
//       type: 2,
//       blockHash: '0x08c0ca871afd3051c85afda4960f03e946499f0ec4ab24c1d79c05a343c2aac1',
//       blockNumber: 20612052,
//       confirmations: 1019,
//       from: '0x1b9c17f71E1F99924f166484174acA3a0a2C9EC3',
//       gasPrice: '4662132764',
//       gas: '51816',
//       to: '0xABD4C63d2616A5201454168269031355f4764337',
//       value: '0',
//       nonce: 1,
//       data: '0xa9059cbb000000000000000000000000d7f46e0be18247ad954b33a04be8d8730eab7b8600000000000000000000000000000000000000000000002ecbe62c888e7e1c00',
//       r: '0x5187841313f4483db1c3e285f48fdbdef53d287b2fbfa3f01da583cde2642f6d',
//       s: '0x08458ada352fc815472bebefbfcc87612c3d7b8a356e9f598d5511343490c05b',
//       v: 1,
//       chainId: 1,
//     },
//     ...edgeDefaults,
//   },
//   {
//     id: '2->5',
//     source: '2',
//     target: '5',
//     details: {
//       block: 20612052,
//       hash: '0x9aaf7231bd7986369d993610a0b9a38fd5e88e0695cf325fddf781e5a424078e',
//       type: 2,
//       blockHash: '0x08c0ca871afd3051c85afda4960f03e946499f0ec4ab24c1d79c05a343c2aac1',
//       blockNumber: 20612052,
//       confirmations: 1019,
//       from: '0x1b9c17f71E1F99924f166484174acA3a0a2C9EC3',
//       gasPrice: '4662132764',
//       gas: '51816',
//       to: '0xABD4C63d2616A5201454168269031355f4764337',
//       value: '0',
//       nonce: 1,
//       data: '0xa9059cbb000000000000000000000000d7f46e0be18247ad954b33a04be8d8730eab7b8600000000000000000000000000000000000000000000002ecbe62c888e7e1c00',
//       r: '0x5187841313f4483db1c3e285f48fdbdef53d287b2fbfa3f01da583cde2642f6d',
//       s: '0x08458ada352fc815472bebefbfcc87612c3d7b8a356e9f598d5511343490c05b',
//       v: 1,
//       chainId: 1,
//     },
//     ...edgeDefaults,
//   },
// ]

function mapNodeType(nodeType: string | undefined): string {
  if (nodeType === 'contract') {
    return 'redAddress'
  } else if (nodeType === 'contract_exchange') {
    return 'circle'
  } else if (nodeType === 'miner') {
    return 'yellowAddress'
  } else return 'normalAddress'
}

function mapTransactionToNodeData(transactions: TransactionDetails[]): NodeData[] {
  const nodesMap: Record<string, NodeData> = {}
  const levelMap: Record<string, number> = {}
  const levelPositions: Record<number, number> = {} // Tracks the y position for each level
  let initialX = 50
  let initialY = 50
  const horizontalSpacing = 250 // Adjust the spacing between levels horizontally
  const verticalSpacing = 100 // Adjust the spacing between nodes vertically

  transactions.forEach((transaction) => {
    const fromNodeId = transaction.from.address
    const fromNodeClassify = mapNodeType(transaction.from.type)
    const toNodeId = transaction.to.address
    const toNodeClassify = mapNodeType(transaction.to.type)

    // Determine levels
    if (levelMap[fromNodeId] === undefined) {
      levelMap[fromNodeId] = 0 // Assign root level
    }
    if (levelMap[toNodeId] === undefined) {
      levelMap[toNodeId] = levelMap[fromNodeId] + 1 // Target node is one level further to the right from source node
    }

    // Calculate positions based on level
    if (!levelPositions[levelMap[fromNodeId]]) {
      levelPositions[levelMap[fromNodeId]] = initialY
    }

    if (!nodesMap[fromNodeId]) {
      nodesMap[fromNodeId] = {
        id: fromNodeId,
        data: { label: fromNodeId },
        type: fromNodeClassify,
        details: {
          address: fromNodeId,
          type: fromNodeClassify,
        },
        position: {
          x: initialX + levelMap[fromNodeId] * horizontalSpacing, // Horizontal position based on level
          y: levelPositions[levelMap[fromNodeId]], // Vertical position based on level
        },
      }
      levelPositions[levelMap[fromNodeId]] += verticalSpacing
    }

    if (!nodesMap[toNodeId]) {
      if (!levelPositions[levelMap[toNodeId]]) {
        levelPositions[levelMap[toNodeId]] = initialY
      }

      nodesMap[toNodeId] = {
        id: toNodeId,
        data: { label: toNodeId },
        type: toNodeClassify,
        details: {
          address: toNodeId,
          type: toNodeClassify,
        },
        position: {
          x: initialX + levelMap[toNodeId] * horizontalSpacing, // Horizontal position based on level
          y: levelPositions[levelMap[toNodeId]], // Vertical position based on level
        },
      }
      levelPositions[levelMap[toNodeId]] += verticalSpacing
    }
  })

  return Object.values(nodesMap)
}

function mapTransactionFields(transactions: TransactionDetails[]): EdgeData[] {
  return transactions.map((transaction) => {
    const { from, to, hash, ...otherDetails } = transaction
    return {
      id: hash,
      source: from.address,
      target: to.address,
      details: {
        ...otherDetails,
      },
      ...edgeDefaults,
    } as EdgeData
  })
}

const initialNodes = mapTransactionToNodeData(transactions)
const initialEdges = mapTransactionFields(transactions)
// const initialNodes = initialNodesMock
// const initialEdges = initialEdgesMock
console.log('initialEdges', initialEdges)
console.log('initialNodes', initialNodes)

export { initialEdges, initialNodes }
