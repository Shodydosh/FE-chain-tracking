import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import InputCard from '../card/InputCard'
import AddressInfoCard from '../card/AddressInfoCard'
import PortfolioTableCard from '../card/PortfolioTableCard'

const AddressContent = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div>
        <AddressInfoCard />
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <PortfolioTableCard />
      </div>
    </main>
  )
}

export default AddressContent
