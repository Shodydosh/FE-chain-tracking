import React from 'react'
import { NodeData } from '@/types/graph.interface'

import { Copy, MoreVertical, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import TxDataTableCard from './TxDataTableCard'

const AddressInfoCard = ({
  nodeData,
  balance,
}: {
  nodeData: NodeData
  balance: number
}) => {
  const AddressData = nodeData.details
  return (
    <Card className="overflow-hidden shadow-md" x-chunk="dashboard-05-chunk-4">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            {'Address ' + AddressData.address + "'s Info"}
          </CardTitle>
          <CardDescription className="break-all pr-6">
            {AddressData.address}
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Copy className="h-3.5 w-3.5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View on Etherscan</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Account Details</div>
          <ul className="grid gap-3">
            {/* <li className="flex items-center">
              <span className="text-muted-foreground w-1/4 ">Status:</span>
              <span>
                <Badge
                  variant="outline"
                  className="text-green-500 border-green-500 items-center align-middle h-6 gap-1 shadow-sm"
                >
                  <Check className="h-3 w-3" />
                  Success
                </Badge>
              </span>
            </li> */}
            <li className="flex items-center">
              <span className="text-muted-foreground w-1/4 ">Balance:</span>
              <span className="flex gap-1">
                <span>{balance}</span>
                <span>ETH</span>
              </span>
            </li>
            {/* <li className="flex">
              <span className="text-muted-foreground w-1/4 ">Timestamp:</span>
              <span className="grid">
                <span className="grid">2 days ago </span>
                <span>Aug-13-2024 12:09:59 PM UTC</span>
              </span>
            </li> */}
          </ul>
        </div>
        {/* <Separator className="my-4" />
        <div className="grid gap-3">
          <ul className="grid gap-3">
            <li className="flex items-center">
              <span className="text-muted-foreground w-1/4">Value:</span>
              <span className="flex gap-1">
                <span> {JSON.stringify(balance)}</span>
                <span>ETH</span>
              </span>
            </li>
            <li className="flex">
              <span className="text-muted-foreground w-1/4">Transaction Fee:</span>
              <span className="grid">
                <span>0.000028440984222 ETH $0.07</span>
              </span>
            </li>
            <li className="flex">
              <span className="text-muted-foreground w-1/4">Gas Price:</span>
              <span className="grid">
                <span className="grid">1.354332582 Gwei</span>
                <span className="opacity-50">(0.000000001354332582 ETH)</span>
              </span>
            </li>
          </ul>
        </div> */}
      </CardContent>

      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3 m-w-full">
        <div className="text-xs text-muted-foreground">
          {/* {JSON.stringify(nodeData, null, 2)} */}
          Updated <time dateTime="2023-11-23">2024</time>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AddressInfoCard
