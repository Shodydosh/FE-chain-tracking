'use client'

import * as React from 'react'
import { useEffect, useState, useMemo } from 'react'
import { CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Check, X } from 'lucide-react'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  TableMeta,
  PaginationState,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { File, ListFilter } from 'lucide-react'

// Import the JSON data
import { DataTablePagination } from './DataTablePagination'
import transactions_json from '@/mocks/transactions.json'

// Extend the Transaction type to include the `added` field
export type Transaction = {
  txnHash: string
  type: string
  status: string
  date: string
  amount: string
  added?: boolean // New field
}

// Define a custom TableMeta type
interface CustomTableMeta extends TableMeta<Transaction> {
  toggleAdd: (transaction: Transaction) => void
}

const initialTransactions = transactions_json.map((txn) => ({
  ...txn,
  added: false,
}))

export const columns: ColumnDef<Transaction>[] = [
  {
    id: 'add',
    enableHiding: false,
    cell: ({ row, table }) => {
      const transaction = row.original
      const isAdded = transaction.added

      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                {!isAdded ? (
                  <Button
                    className="w-10"
                    variant="outline"
                    onClick={() =>
                      (table.options.meta as CustomTableMeta).toggleAdd(transaction)
                    }
                  >
                    +
                  </Button>
                ) : (
                  <Button
                    className="w-10"
                    variant="default"
                    onClick={() =>
                      (table.options.meta as CustomTableMeta).toggleAdd(transaction)
                    }
                  >
                    -
                  </Button>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isAdded ? 'Remove from story' : 'Add to story'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
  },
  {
    accessorKey: 'txnHash',
    header: 'Transaction Hash',
    cell: ({ row }) => <div className="truncate max-w-xs">{row.getValue('txnHash')}</div>,
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => <Badge variant="outline">{row.getValue('type') as string}</Badge>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const isConfirmed = status.toLowerCase() === 'confirmed'

      return (
        <Badge
          className={`gap-1 capitalize ${isConfirmed ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}
          variant="outline"
        >
          {isConfirmed ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <X className="h-3.5 w-3.5" />
          )}
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue('amount')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(transaction.txnHash)}
            >
              Copy transaction hash
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const TxDataTable = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [isClient, setIsClient] = useState(false)

  const [data, setData] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [totalCount, setTotalCount] = useState(0)
  const [{ pageIndex, pageSize }, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const table = useReactTable<Transaction>({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    manualSorting: true,
    onSortingChange: setSorting,

    manualPagination: true,
    onPaginationChange: setPagination,

    manualFiltering: true,
    onGlobalFilterChange: setSearch,

    pageCount: Math.ceil(totalCount / pageSize),
    state: {
      sorting,
      pagination,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    meta: {
      toggleAdd: (transaction: Transaction) => {
        console.log('🚀 ~ TxDataTable ~ Transaction:', transaction)
        setData((current) =>
          current.map((txn) =>
            txn.txnHash === transaction.txnHash ? { ...txn, added: !txn.added } : txn
          )
        )
      },
    } as CustomTableMeta, // Cast to CustomTableMeta
  })

  useEffect(() => {
    setIsClient(true)
    setTotalCount(table.getFilteredRowModel().rows.length)
  }, [])
  useEffect(() => {
    const params = new URLSearchParams({
      pageNumber: (pageIndex + 1).toString(),
      pageSize: pageSize.toString(),
      ...(sorting.length > 0 && {
        sortBy: sorting[0].id,
        sortOrder: sorting[0].desc ? 'desc' : 'asc',
      }),
    })

    // Simulate fetching data from JSON
    setIsLoading(true)

    const filteredData = transactions_json

    // Sort the data
    const sortedData = filteredData

    // Paginate the data
    const paginatedData = sortedData.slice(
      pageIndex * pageSize,
      (pageIndex + 1) * pageSize
    )

    setTimeout(() => {
      setData(paginatedData)
      setTotalCount(filteredData.length)
      setIsLoading(false)
    }, 500) // Simulate network delay
  }, [sorting])
  //pageIndex, pageSize,

  // Filter the transactions_json to get only those that are added
  const addedTransactions = data.filter((txn) => txn.added)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Filter by ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="gap-1 text-sm items-center">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {addedTransactions.length} of {table.getFilteredRowModel().rows.length}{' '}
          transaction(s) selected.
        </div>
        {/* <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div> */}
        <div className="py-4">
          <DataTablePagination table={table} totalCount={totalCount} />
        </div>
      </div>
      {isClient && (
        <div>
          <h2>Added Transactions</h2>
          <ul>
            {addedTransactions.map((txn) => (
              <li key={txn.txnHash}>
                {txn.txnHash} - {txn.type} - {txn.status} - {txn.date} - {txn.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TxDataTable
// TODO: fix lỗi pagination
// TODO: fix lỗi filter
// TODO: fix lỗi add to addedTransactions
