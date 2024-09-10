import React from 'react'
import { Table, Tag } from 'antd'

interface Asset {
  asset: string
  type: 'debit' | 'credit'
}

interface Event {
  time: string
  description: string
  victimsWallets?: Asset[]
  suspect?: Asset[]
  newBuyer?: Asset[]
  vault?: Asset[]
  nftMarketplace?: Asset[]
  distributedSmartContract?: Asset[]
}

const data: { date: string; events: Event[] } = {
  date: 'May 8, 2022',
  events: [
    {
      time: '05:20',
      description: 'BAYC Theft',
      victimsWallets: [{ asset: '8398 BAYC', type: 'debit' }],
      suspect: [{ asset: '8398 BAYC', type: 'credit' }],
    },
    {
      time: '07:44',
      description: 'BAYC Sale',
      suspect: [
        { asset: '101.18 ETH', type: 'credit' },
        { asset: '8398 BAYC', type: 'debit' },
      ],
      newBuyer: [
        { asset: '106.5 ETH', type: 'debit' },
        { asset: '8398 BAYC', type: 'credit' },
      ],
    },
    {
      time: '07:45',
      description: 'NFT Moved',
      newBuyer: [{ asset: '8398 BAYC', type: 'debit' }],
      vault: [{ asset: '8398 BAYC', type: 'credit' }],
    },
    {
      time: '12:26',
      description: 'NFT Moved',
      vault: [{ asset: '8398 BAYC', type: 'debit' }],
      newBuyer: [{ asset: '8398 BAYC', type: 'credit' }],
    },
    {
      time: '13:08',
      description: "'New Buyer' agrees to return",
      nftMarketplace: [
        { asset: '0.005 ETH', type: 'credit' },
        { asset: '8398 BAYC', type: 'credit' },
      ],
      newBuyer: [
        { asset: '0.005 ETH', type: 'debit' },
        { asset: '8398 BAYC', type: 'debit' },
      ],
    },
    {
      time: '13:16',
      description: "'New Buyer' receives funds",
      newBuyer: [{ asset: '165.01 ETH', type: 'credit' }],
      nftMarketplace: [
        { asset: '0.005 ETH', type: 'debit' },
        { asset: '8398 BAYC', type: 'debit' },
      ],
      distributedSmartContract: [
        { asset: '165.01 ETH', type: 'debit' },
        { asset: '8398 BAYC', type: 'credit' },
      ],
    },
    {
      time: '13:40',
      description: 'Transaction',
      nftMarketplace: [
        { asset: '101.19 ETH', type: 'credit' },
        { asset: '8398 BAYC', type: 'credit' },
      ],
      distributedSmartContract: [
        { asset: '106.5 ETH', type: 'debit' },
        { asset: '8398 BAYC', type: 'debit' },
      ],
    },
    {
      time: '13:44',
      description: 'NFT returned',
      victimsWallets: [
        { asset: '106.5 ETH', type: 'debit' },
        { asset: '8398 BAYC', type: 'credit' },
      ],
      nftMarketplace: [
        { asset: '8398 BAYC', type: 'debit' },
        { asset: '0.005 ETH', type: 'debit' },
      ],
      distributedSmartContract: [{ asset: '1 ETH', type: 'credit' }],
    },
  ],
}

const TxDataVisualizeTest: React.FC = () => {
  const columns = [
    {
      title: 'Event',
      dataIndex: 'description',
      key: 'description',
      render: (description: string, event: Event) => (
        <>
          <h3 className="font-bold text-lg">{description}</h3>
          <p className="opacity-70">{event.time}</p>
        </>
      ),
    },
    {
      title: "Victim's Wallets",
      dataIndex: 'victimsWallets',
      key: 'victimsWallets',
      render: (assets: Asset[]) => (
        <>
          {assets.map((asset, index) => (
            <div key={index} className={index == 0 ? 'mb-2' : ''}>
              <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
                {asset.type === 'debit' ? '-' : '+'} {asset.asset}
              </Tag>
            </div>
          ))}
        </>
      ),
    },
    {
      title: 'Suspect',
      dataIndex: 'suspect',
      key: 'suspect',
      render: (assets: Asset[]) => (
        <>
          {assets.map((asset, index) => (
            <div key={index} className={index == 0 ? 'mb-2' : ''}>
              <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
                {asset.type === 'debit' ? '-' : '+'} {asset.asset}
              </Tag>
            </div>
          ))}
        </>
      ),
    },
    {
      title: 'New Buyer',
      dataIndex: 'newBuyer',
      key: 'newBuyer',
      render: (assets: Asset[]) => (
        <>
          {assets.map((asset, index) => (
            <div key={index} className={index == 0 ? 'mb-2' : ''}>
              <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
                {asset.type === 'debit' ? '-' : '+'} {asset.asset}
              </Tag>
            </div>
          ))}
        </>
      ),
    },
    {
      title: 'Vault',
      dataIndex: 'vault',
      key: 'vault',
      render: (assets: Asset[]) => (
        <>
          {assets.map((asset, index) => (
            <div key={index} className={index == 0 ? 'mb-2' : ''}>
              <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
                {asset.type === 'debit' ? '-' : '+'} {asset.asset}
              </Tag>
            </div>
          ))}
        </>
      ),
    },
    {
      title: 'NFT Marketplace',
      dataIndex: 'nftMarketplace',
      key: 'nftMarketplace',
      render: (assets: Asset[]) => (
        <>
          {assets.map((asset, index) => (
            <div key={index} className={index == 0 ? 'mb-2' : ''}>
              <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
                {asset.type === 'debit' ? '-' : '+'} {asset.asset}
              </Tag>
            </div>
          ))}
        </>
      ),
    },
    {
      title: 'Distributed Smart Contract',
      dataIndex: 'distributedSmartContract',
      key: 'distributedSmartContract',
      render: (assets: Asset[]) => (
        <>
          {assets.map((asset, index) => (
            <div key={index} className={index == 0 ? 'mb-2' : ''}>
              <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
                {asset.type === 'debit' ? '-' : '+'} {asset.asset}
              </Tag>
            </div>
          ))}
        </>
      ),
    },
  ]

  const tableData = data.events.map((event, index) => ({
    key: index,
    time: event.time,
    description: event.description,
    victimsWallets: event.victimsWallets || [],
    suspect: event.suspect || [],
    newBuyer: event.newBuyer || [],
    vault: event.vault || [],
    nftMarketplace: event.nftMarketplace || [],
    distributedSmartContract: event.distributedSmartContract || [],
  }))

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{data.date}</h2>
      <Table columns={columns} dataSource={tableData} pagination={false} className="" />
    </div>
  )
}

export default TxDataVisualizeTest
