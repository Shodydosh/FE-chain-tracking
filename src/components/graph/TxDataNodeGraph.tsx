'use client'
import React, { useCallback } from 'react'
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useEdgesState,
  addEdge,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
  Connection,
  MiniMap,
  SnapGrid,
  NodeTypes,
} from '@xyflow/react'
import { useNodesState } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { initialEdges, initialNodes } from './NodesAndEdges'
import { EdgeData, NodeData } from './NodesAndEdges'
import './overview.css'

const snapGrid: SnapGrid = [20, 20]
const connectionLineStyle = { stroke: '#fff' }

import CircleNode from './nodes/CircleNode'
import ToolbarNode from './nodes/ToolbarNode'
import DefaultNode from './nodes/DefaultNode'
import RedNode from './nodes/RedNode'

const nodeTypes: NodeTypes = {
  circle: CircleNode,
  tools: ToolbarNode,
  normalAddress: DefaultNode,
  redAddress: RedNode,
}

const edgeTypes = {}

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)
      ),
    []
  )

  const onNodesDelete = useCallback(
    (deleted: NodeData[]) => {
      setEdges((eds) =>
        deleted.reduce((acc: EdgeData[], node: NodeData) => {
          const incomers = getIncomers(node, nodes, edges)
          const outgoers = getOutgoers(node, nodes, edges)
          const connectedEdges = getConnectedEdges([node], edges)

          const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge))

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
              details: {
                // Default details object
                event: '',
                time: '',
                details: {
                  sender: source,
                  sender_name: '', // Default or derived sender name
                  amount: 0, // Default amount
                  token: '', // Default token
                  receiver: target,
                  receiver_name: '', // Default or derived receiver name
                },
              },
            }))
          )

          return [...remainingEdges, ...createdEdges]
        }, edges)
      )
    },
    [nodes, edges]
  )

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
        <div
          className=" p-2 border-black rounded-md border-dotted border-2 shadow-lg"
          style={{ height: 800 }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodesChange={onNodesChange}
            onNodesDelete={onNodesDelete}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            snapToGrid={true}
            snapGrid={snapGrid}
            fitView
            connectionLineStyle={connectionLineStyle}
            attributionPosition="top-right"
          >
            <MiniMap
              nodeStrokeColor={(n) => {
                return '#0041d0'
              }}
              nodeColor={(n) => {
                if (n.type === 'selectorNode') return '#fff000'
                return '#fff'
              }}
            />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </main>
  )
}
