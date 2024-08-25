// import React from 'react'
// import { Table, Tag } from 'antd'
// import MockStoryTransactions from '@/mocks/storyTransactions.json'

// interface Asset {
//   asset: string
//   type: 'debit' | 'credit'
// }

// interface Event {
//   time: string
//   description: string
//   victimsWallets?: Asset[]
//   suspect?: Asset[]
//   newBuyer?: Asset[]
//   vault?: Asset[]
//   nftMarketplace?: Asset[]
//   distributedSmartContract?: Asset[]
// }

// const StoriesTable: React.FC = () => {
//   const columns = [
//     {
//       title: 'Event',
//       dataIndex: 'description',
//       key: 'description',
//       render: (description: string, event: Event) => (
//         <>
//           <h3 className="font-bold text-lg">{description}</h3>
//           <p className="opacity-70">{event.time}</p>
//         </>
//       ),
//     },
//     {
//       title: "Victim's Wallets",
//       dataIndex: 'victimsWallets',
//       key: 'victimsWallets',
//       render: (assets: Asset[]) => (
//         <>
//           {assets.map((asset, index) => (
//             <div key={index} className={index == 0 ? 'mb-2' : ''}>
//               <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
//                 {asset.type === 'debit' ? '-' : '+'} {asset.asset}
//               </Tag>
//             </div>
//           ))}
//         </>
//       ),
//     },
//     {
//       title: 'Suspect',
//       dataIndex: 'suspect',
//       key: 'suspect',
//       render: (assets: Asset[]) => (
//         <>
//           {assets.map((asset, index) => (
//             <div key={index} className={index == 0 ? 'mb-2' : ''}>
//               <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
//                 {asset.type === 'debit' ? '-' : '+'} {asset.asset}
//               </Tag>
//             </div>
//           ))}
//         </>
//       ),
//     },
//     {
//       title: 'New Buyer',
//       dataIndex: 'newBuyer',
//       key: 'newBuyer',
//       render: (assets: Asset[]) => (
//         <>
//           {assets.map((asset, index) => (
//             <div key={index} className={index == 0 ? 'mb-2' : ''}>
//               <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
//                 {asset.type === 'debit' ? '-' : '+'} {asset.asset}
//               </Tag>
//             </div>
//           ))}
//         </>
//       ),
//     },
//     {
//       title: 'Vault',
//       dataIndex: 'vault',
//       key: 'vault',
//       render: (assets: Asset[]) => (
//         <>
//           {assets.map((asset, index) => (
//             <div key={index} className={index == 0 ? 'mb-2' : ''}>
//               <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
//                 {asset.type === 'debit' ? '-' : '+'} {asset.asset}
//               </Tag>
//             </div>
//           ))}
//         </>
//       ),
//     },
//     {
//       title: 'NFT Marketplace',
//       dataIndex: 'nftMarketplace',
//       key: 'nftMarketplace',
//       render: (assets: Asset[]) => (
//         <>
//           {assets.map((asset, index) => (
//             <div key={index} className={index == 0 ? 'mb-2' : ''}>
//               <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
//                 {asset.type === 'debit' ? '-' : '+'} {asset.asset}
//               </Tag>
//             </div>
//           ))}
//         </>
//       ),
//     },
//     {
//       title: 'Distributed Smart Contract',
//       dataIndex: 'distributedSmartContract',
//       key: 'distributedSmartContract',
//       render: (assets: Asset[]) => (
//         <>
//           {assets.map((asset, index) => (
//             <div key={index} className={index == 0 ? 'mb-2' : ''}>
//               <Tag color={asset.type === 'debit' ? 'volcano' : 'green'} key={index}>
//                 {asset.type === 'debit' ? '-' : '+'} {asset.asset}
//               </Tag>
//             </div>
//           ))}
//         </>
//       ),
//     },
//   ]

//   const tableData = MockStoryTransactions.events.map((event, index) => ({
//     key: index,
//     time: event.time,
//     description: event.description,
//     victimsWallets: event.victimsWallets || [],
//     suspect: event.suspect || [],
//     newBuyer: event.newBuyer || [],
//     vault: event.vault || [],
//     nftMarketplace: event.nftMarketplace || [],
//     distributedSmartContract: event.distributedSmartContract || [],
//   }))

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">{MockStoryTransactions.date}</h2>
//       <Table columns={columns} dataSource={tableData} pagination={false} className="" />
//     </div>
//   )
// }

// export default StoriesTable
