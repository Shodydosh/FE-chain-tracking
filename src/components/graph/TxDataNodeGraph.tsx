'use client'
import React, { useState, MouseEvent } from 'react'
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useEdgesState,
  MiniMap,
  SnapGrid,
  NodeTypes,
  Controls,
} from '@xyflow/react'
import { useNodesState } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { initialEdges, initialNodes } from './NodesAndEdges'
import { EdgeData, NodeData } from './NodesAndEdges'
import './overview.css'

const snapGrid: SnapGrid = [20, 20]
const connectionLineStyle = { stroke: '#fff' }

import CircleNode from './nodes/CircleNode'
import DefaultNode from './nodes/DefaultNode'
import RedNode from './nodes/RedNode'

const nodeTypes: NodeTypes = {
  circle: CircleNode,
  normalAddress: DefaultNode,
  redAddress: RedNode,
}

const nodeClassName = (node: NodeData): string => {
  return node.type ? node.type : 'normalAddress'
}
const edgeTypes = {}

export default function Flow() {
  const [infoNode, setInfoNode] = useState<NodeData>()
  const [infoEdge, setInfoEdge] = useState<EdgeData>()
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onNodeClick = (_: MouseEvent, node: NodeData) => {
    setInfoNode(node)
    console.log('click', node)
  }
  const onEdgeClick = (_: MouseEvent, edge: EdgeData) => {
    setInfoEdge(edge)
    console.log('click', edge)
  }

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
        <div
          className=" border-black rounded-md border-dotted border-2 shadow-lg"
          style={{ height: 1000 }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodeClick={onNodeClick}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onEdgeClick={onEdgeClick}
            snapToGrid={true}
            snapGrid={snapGrid}
            fitView
            connectionLineStyle={connectionLineStyle}
            attributionPosition="top-right"
          >
            <MiniMap zoomable pannable nodeClassName={nodeClassName} />
            <Controls />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="font-semibold text-xl">Info</h1>
        {infoNode && (
          <>
            <h1 className="font-semibold text-xl">Node Info</h1>
            <p>{JSON.stringify(infoNode)}</p>
          </>
        )}
        {infoEdge && (
          <>
            <h1 className="font-semibold text-xl">Edge Info</h1>
            <p>{JSON.stringify(infoEdge)}</p>
          </>
        )}
      </div>
    </main>
  )
}
