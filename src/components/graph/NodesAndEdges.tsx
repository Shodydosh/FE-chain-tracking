import { Position } from '@xyflow/react'
import { Node, Edge, MarkerType } from '@xyflow/react'

export interface NodeData extends Node {
  details: {
    address: string
  }
}

export interface EdgeData extends Edge {
  details: {
    event: string
    time: string
    details: {
      sender: string
      sender_name: string
      amount: number
      token: string
      receiver: string
      receiver_name: string
    }
  }
}

// const nodeDefaults = {
//   sourcePosition: Position.Right,
//   targetPosition: Position.Left,
//   style: {
//     borderRadius: '3rem',
//     backgroundColor: '#fff',
//     width: 200,
//     height: 50,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '6px',
//   },
//   animated: true,
// }

const edgeDefaults = {
  animated: true,
  style: { stroke: 'black' },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: 'black',
  },
  label: '100 ETH',
}

const initialNodes: NodeData[] = [
  {
    id: '1',
    data: {
      label: '0x0b95993a39a363d99280ac950f5e4536ab5c5566',
    },
    type: 'circle',
    details: { address: '0x0b95993a39a363d99280ac950f5e4536ab5c5566' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: '0x00000000219ab540356cBB839Cbe05303d7705Fa' },
    details: { address: '0x00000000219ab540356cBB839Cbe05303d7705Fa' },
    position: { x: 200, y: 0 },
    type: 'normalAddress',
  },
  {
    id: '3',
    type: 'normalAddress',
    data: { label: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b' },
    details: { address: '0x4d9ff50ef4da947364bb9650892b2554e7be5e2b' },
    position: { x: 200, y: 200 },
  },
  {
    id: '4',
    data: { label: '0x00000000219ab540356cBB839Cbe05303d623545' },
    details: { address: '0x00000000219ab540356cBB839Cbe05303d623545' },
    position: { x: 400, y: 250 },
    type: 'normalAddress',
  },
  {
    id: '5',
    data: { label: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756Cc2' },
    details: { address: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756Cc2' },
    position: { x: 600, y: 100 },
    type: 'redAddress',
  },
  {
    id: '6',
    data: { label: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756zzz' },
    details: { address: '0xC02aaA323223FE8D0A0e5C4F27eAD9083C756zzz' },
    position: { x: 0, y: 200 },
    type: 'redAddress',
  },
]

const initialEdges: EdgeData[] = [
  {
    id: '1->3',
    source: '1',
    target: '3',
    details: {
      event: '',
      time: '8-5-2022T05:23',
      details: {
        sender: '1',
        sender_name: 'Ethereum Mainnet',
        amount: 6000000,
        token: 'ETH',
        receiver: '3',
        receiver_name: 'Polygon Network',
      },
    },
    ...edgeDefaults,
  },
  {
    id: '1->2',
    source: '1',
    target: '2',
    details: {
      event: '',
      time: '8-5-2022T07:44',
      details: {
        sender: '3',
        sender_name: 'Polygon Network',
        amount: 600,
        token: 'ETH',
        receiver: '2',
        receiver_name: 'Ethereum Sepolia',
      },
    },
    ...edgeDefaults,
  },
  {
    id: '3->4',
    source: '3',
    target: '4',

    details: {
      event: '',
      time: '8-5-2022T07:45',
      details: {
        sender: '3',
        sender_name: 'Polygon Network',
        amount: 344,
        token: 'ETH',
        receiver: '4',
        receiver_name: 'Alice',
      },
    },
    ...edgeDefaults,
  },
  {
    id: '4->5',
    source: '4',
    target: '5',
    details: {
      event: '',
      time: '8-5-2022T12:25',
      details: {
        sender: '4',
        sender_name: 'Polygon Network',
        amount: 243,
        token: 'ETH',
        receiver: '5',
        receiver_name: 'Tung',
      },
    },
    ...edgeDefaults,
  },
  {
    id: '2->5',
    source: '2',
    target: '5',
    details: {
      event: '',
      time: '8-5-2022T12:25',
      details: {
        sender: '2',
        sender_name: 'Polygon Network',
        amount: 243,
        token: 'ETH',
        receiver: '5',
        receiver_name: 'Tung',
      },
    },
    ...edgeDefaults,
  },
]

export { initialEdges, initialNodes }
