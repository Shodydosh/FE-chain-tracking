'use client'
import React, { memo } from 'react'
import { Handle, useStore, Position, NodeProps } from '@xyflow/react'
import { User } from 'lucide-react'

const labelStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: -15,
  fontSize: 8,
  alignContent: 'center',
  alignSelf: 'center',
}

const RedNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <>
      <div className="wrapper gradient gradient-yellow shadow-md">
        <div className="inner">
          <User className="text-yellow-600" />
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div className="text-yellow-600" style={labelStyle}>
        {data.label as React.ReactNode}
      </div>
    </>
  )
}

export default memo(RedNode)
