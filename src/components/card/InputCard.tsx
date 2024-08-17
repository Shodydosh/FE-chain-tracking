'use client'

import React, { useEffect } from 'react'

// ICONS
import { FileSearchIcon, ArrowRight } from 'lucide-react'
import { CalendarIcon } from '@radix-ui/react-icons'
import {
  EthereumCircleColorful,
  BnbCircleColorful,
  PolygonCircleColorful,
} from '@ant-design/web3-icons'
// COMPONENTS
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '../ui/separator'

const InputCard = () => {
  const [input, setInput] = React.useState<string>('')
  const [chain, setChain] = React.useState<string>('')
  const [startDate, setStartDate] = React.useState<Date>()
  const [endDate, setEndDate] = React.useState<Date>()

  useEffect(() => {
    console.log('Input:', input)
    console.log('Chain:', chain)
    console.log('Start Date:', startDate)
    console.log('End Date:', endDate)
  }, [input, chain, startDate, endDate])

  return (
    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="px-7">
        <CardTitle>Investigate by TxHash / Address</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="gap-2 flex">
          <Select onValueChange={(value) => setChain(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Chain</SelectLabel>
                <SelectItem value="ethereum">
                  <EthereumCircleColorful className="mr-2" />
                  Ethereum
                </SelectItem>
                <SelectItem value="bnb-smartchain">
                  <BnbCircleColorful className="mr-2" />
                  BNB Smartchain
                </SelectItem>
                <SelectItem value="polygon">
                  <PolygonCircleColorful className="mr-2" />
                  Polygon
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Input an address / transaction's hash"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex mt-2 justify-end">
          <div className="flex gap-2 items-center">
            {/* START DATE */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[240px] justify-start text-left font-normal',
                    !startDate && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, 'PPP') : <span>Select start date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <ArrowRight className="h-3.5 w-3.5" />
            {/* END DATE */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[240px] justify-start text-left font-normal',
                    !endDate && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, 'PPP') : <span>Select end date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="gap-0.5 grid justify-end">
        <Button size="default" variant="outline" className=" col-span-1 h-12 w-48 gap-1">
          <FileSearchIcon className="h-3.5 w-3.5" />
          <span className="xl:whitespace-nowrap">Track</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default InputCard
