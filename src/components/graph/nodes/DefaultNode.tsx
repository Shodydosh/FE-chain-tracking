'use client'
import React, { memo } from 'react'
import { Handle, useStore, Position, NodeProps } from '@xyflow/react'
import { User } from 'lucide-react'

const labelStyle: React.CSSProperties = {
  position: 'absolute',
  color: '#555',
  bottom: -15,
  fontSize: 8,
  alignContent: 'center',
  alignSelf: 'center',
}

const DefaultNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <>
      <div className="wrapper gradient gradient-normal shadow-md">
        <div className="inner">
          <User className="text-gray-600" />
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div style={labelStyle}>{data.label as React.ReactNode}</div>
    </>
  )
}

export default memo(DefaultNode)
