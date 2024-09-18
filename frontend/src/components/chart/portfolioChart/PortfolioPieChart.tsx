'use client'

import * as React from 'react'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A donut chart with text'

const chartData = [
  { asset: 'Ethereum', amount: 40, fill: 'var(--color-ethereum)' },
  { asset: 'Bitcoin', amount: 35, fill: 'var(--color-bitcoin)' },
  { asset: 'Polygon', amount: 15, fill: 'var(--color-polygon)' },
  { asset: 'Solana', amount: 7, fill: 'var(--color-solana)' },
  { asset: 'Other', amount: 3, fill: 'var(--color-other)' },
]

const chartConfig = {
  amount: {
    label: 'Portfolio',
  },
  ethereum: {
    label: 'Ethereum',
    color: 'hsl(var(--chart-1))',
  },
  bitcoin: {
    label: 'Bitcoin',
    color: 'hsl(var(--chart-2))',
  },
  polygon: {
    label: 'Polygon',
    color: 'hsl(var(--chart-3))',
  },
  solana: {
    label: 'Solana',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function PortfolioPieChart() {
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])

  return (
    <Card className="h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Blockchain Portfolio</CardTitle>
        <CardDescription>Asset Allocation in 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="asset"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalAmount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Assets
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Assets</div>
      </CardFooter>
    </Card>
  )
}
