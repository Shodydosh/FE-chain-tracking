import React from 'react'
import { Timeline } from 'antd'

const TxDataTimeline: React.FC = () => (
  <Timeline
    items={[
      {
        color: 'black',
        children: (
          <div>
            <p>May 8, 2022</p>
            <p>BAYC Theft 05:20</p>
          </div>
        ),
      },
      {
        color: 'black',
        children: (
          <div>
            <p>BAYC Sale 07:44</p>
            <div className="flex">
              <span className="mr-2">8398 BAYC</span>
              <span className="text-red-500">-101.18 ETH</span>
            </div>
          </div>
        ),
      },
      {
        color: 'black',
        children: (
          <div>
            <p>NFT Moved 07:45</p>
            <div className="flex">
              <span className="mr-2">8398 BAYC</span>
              <span className="text-green-500">+8398 BAYC</span>
            </div>
          </div>
        ),
      },
      {
        color: 'black',
        children: (
          <div>
            <p>NFT Moved 12:26</p>
            <div className="flex">
              <span className="mr-2">8398 BAYC</span>
              <span className="text-green-500">+8398 BAYC</span>
            </div>
          </div>
        ),
      },
      {
        color: 'black',
        children: (
          <div>
            <p>‘New Buyer’ agrees to return 13:08</p>
            <div className="flex">
              <span className="mr-2">8398 BAYC</span>
              <span className="text-red-500">-8398 BAYC</span>
            </div>
          </div>
        ),
      },
      {
        color: 'black',
        children: (
          <div>
            <p>‘New Buyer’ receive funds 13:16</p>
            <div className="flex">
              <span className="mr-2">1.005 ETH</span>
              <span className="text-green-500">+1.005 ETH</span>
            </div>
          </div>
        ),
      },
      {
        color: 'black',
        children: (
          <div>
            <p>Transaction 13:40</p>
            <div className="flex">
              <span className="mr-2">8398 BAYC</span>
              <span className="text-red-500">-8398 BAYC</span>
            </div>
          </div>
        ),
      },
      {
        color: 'gray',
        children: (
          <div>
            <p>NFT returned 13:44</p>
            <div className="flex">
              <span className="mr-2">8398 BAYC</span>
              <span className="text-green-500">+8398 BAYC</span>
            </div>
          </div>
        ),
      },
    ]}
  />
)

export default TxDataTimeline
