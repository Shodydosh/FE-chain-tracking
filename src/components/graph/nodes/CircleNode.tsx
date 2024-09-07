'use client'
import React, { memo } from 'react'
import { Handle, useStore, Position, NodeProps } from '@xyflow/react'
import { User } from 'lucide-react'

const labelStyle: React.CSSProperties = {
  position: 'absolute',
  color: 'rgb(50, 110, 250)',
  bottom: -15,
  fontSize: 8,
  alignContent: 'center',
  alignSelf: 'center',
}

const CircleNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <>
      <div className="wrapper gradient gradient-input">
        <div className="inner">
          <User className="text-blue-600" />
        </div>
      </div>
      <Handle type="source" position={Position.Right} />
      <div style={labelStyle}>{data.label as React.ReactNode}</div>
    </>
  )
}

export default CircleNode
