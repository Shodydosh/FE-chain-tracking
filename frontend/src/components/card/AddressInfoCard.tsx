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
import { Skeleton } from 'antd' // Import Ant Design Skeleton component
import { Badge } from '@/components/ui/badge'

const AddressInfoCard = ({
  nodeData,
  balance,
  loading,
}: {
  nodeData: NodeData
  balance: number | undefined
  loading: boolean // Add loading state as a prop
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
            <li className="flex items-center">
              <span className="text-muted-foreground w-1/4 ">Balance:</span>
              <span className="flex gap-1">
                {/* Skeleton loader for the balance */}
                {loading ? (
                  <Skeleton.Input active size="small" style={{ height: 12, width: 60 }} />
                ) : (
                  <>
                    <span>{balance}</span>
                    <span>ETH</span>
                  </>
                )}
              </span>
            </li>
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3 m-w-full">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">2024</time>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AddressInfoCard
