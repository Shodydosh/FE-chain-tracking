import React from 'react'
import Header from '@/components/core/Header'
import Sidebar from '@/components/core/Sidebar'

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:pb-4 sm:pl-14">
        <div className="sticky top-0 z-30 w-full">
          <Header />
        </div>
        {children}
      </div>
    </div>
  )
}
