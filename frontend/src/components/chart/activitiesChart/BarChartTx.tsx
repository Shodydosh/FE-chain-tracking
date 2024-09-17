'use client'

import * as React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'An interactive bar chart showing transaction types per month'

const chartData = [
  { date: '2024-04-01', receive: 122, sent: 70, callContract: 30 },
  { date: '2024-04-02', receive: 60, sent: 20, callContract: 17 },
  { date: '2024-04-03', receive: 90, sent: 50, callContract: 27 },
  { date: '2024-04-04', receive: 120, sent: 70, callContract: 52 },
  { date: '2024-04-05', receive: 180, sent: 90, callContract: 103 },
  { date: '2024-04-06', receive: 140, sent: 80, callContract: 81 },
  { date: '2024-04-07', receive: 100, sent: 90, callContract: 55 },
  { date: '2024-04-08', receive: 160, sent: 120, callContract: 129 },
  { date: '2024-04-09', receive: 30, sent: 20, callContract: 9 },
  { date: '2024-04-10', receive: 130, sent: 80, callContract: 51 },
  { date: '2024-04-11', receive: 145, sent: 95, callContract: 60 },
  { date: '2024-04-12', receive: 170, sent: 85, callContract: 75 },
  { date: '2024-04-13', receive: 210, sent: 110, callContract: 90 },
  { date: '2024-04-14', receive: 130, sent: 70, callContract: 45 },
  { date: '2024-04-15', receive: 115, sent: 65, callContract: 50 },
  { date: '2024-04-16', receive: 140, sent: 75, callContract: 55 },
  { date: '2024-04-17', receive: 220, sent: 120, callContract: 85 },
  { date: '2024-04-18', receive: 190, sent: 110, callContract: 65 },
  { date: '2024-04-19', receive: 150, sent: 80, callContract: 40 },
  { date: '2024-04-20', receive: 95, sent: 60, callContract: 25 },
  { date: '2024-04-21', receive: 140, sent: 90, callContract: 35 },
  { date: '2024-04-22', receive: 160, sent: 100, callContract: 45 },
  { date: '2024-04-23', receive: 130, sent: 85, callContract: 30 },
  { date: '2024-04-24', receive: 180, sent: 95, callContract: 60 },
  { date: '2024-04-25', receive: 150, sent: 80, callContract: 40 },
  { date: '2024-04-26', receive: 105, sent: 70, callContract: 20 },
  { date: '2024-04-27', receive: 200, sent: 120, callContract: 50 },
  { date: '2024-04-28', receive: 120, sent: 75, callContract: 30 },
  { date: '2024-04-29', receive: 180, sent: 110, callContract: 45 },
  { date: '2024-04-30', receive: 220, sent: 130, callContract: 60 },
  { date: '2024-05-01', receive: 140, sent: 80, callContract: 25 },
  { date: '2024-05-02', receive: 190, sent: 100, callContract: 50 },
  { date: '2024-05-03', receive: 160, sent: 85, callContract: 35 },
  { date: '2024-05-04', receive: 210, sent: 110, callContract: 55 },
  { date: '2024-05-05', receive: 230, sent: 120, callContract: 65 },
  { date: '2024-05-06', receive: 250, sent: 130, callContract: 70 },
  { date: '2024-05-07', receive: 180, sent: 90, callContract: 40 },
  { date: '2024-05-08', receive: 140, sent: 70, callContract: 30 },
  { date: '2024-05-09', receive: 160, sent: 80, callContract: 35 },
  { date: '2024-05-10', receive: 200, sent: 100, callContract: 50 },
  { date: '2024-05-11', receive: 180, sent: 90, callContract: 45 },
  { date: '2024-05-12', receive: 130, sent: 70, callContract: 25 },
  { date: '2024-05-13', receive: 190, sent: 110, callContract: 55 },
  { date: '2024-05-14', receive: 220, sent: 120, callContract: 60 },
  { date: '2024-05-15', receive: 150, sent: 80, callContract: 35 },
  { date: '2024-05-16', receive: 200, sent: 100, callContract: 50 },
  { date: '2024-05-17', receive: 240, sent: 130, callContract: 65 },
  { date: '2024-05-18', receive: 160, sent: 90, callContract: 40 },
  { date: '2024-05-19', receive: 170, sent: 95, callContract: 45 },
  { date: '2024-05-20', receive: 140, sent: 75, callContract: 30 },
  { date: '2024-05-21', receive: 210, sent: 110, callContract: 55 },
  { date: '2024-05-22', receive: 230, sent: 120, callContract: 60 },
  { date: '2024-05-23', receive: 150, sent: 85, callContract: 40 },
  { date: '2024-05-24', receive: 180, sent: 95, callContract: 45 },
  { date: '2024-05-25', receive: 190, sent: 100, callContract: 50 },
  { date: '2024-05-26', receive: 220, sent: 115, callContract: 55 },
  { date: '2024-05-27', receive: 210, sent: 110, callContract: 60 },
  { date: '2024-05-28', receive: 250, sent: 130, callContract: 65 },
  { date: '2024-05-29', receive: 190, sent: 100, callContract: 55 },
  { date: '2024-05-30', receive: 170, sent: 90, callContract: 40 },
  { date: '2024-05-31', receive: 200, sent: 110, callContract: 50 },
  { date: '2024-06-01', receive: 150, sent: 80, callContract: 25 },
  { date: '2024-06-02', receive: 220, sent: 120, callContract: 60 },
  { date: '2024-06-03', receive: 170, sent: 90, callContract: 35 },
  { date: '2024-06-04', receive: 210, sent: 100, callContract: 50 },
  { date: '2024-06-05', receive: 240, sent: 130, callContract: 65 },
  { date: '2024-06-06', receive: 180, sent: 100, callContract: 45 },
  { date: '2024-06-07', receive: 200, sent: 110, callContract: 50 },
  { date: '2024-06-08', receive: 220, sent: 120, callContract: 60 },
  { date: '2024-06-09', receive: 190, sent: 100, callContract: 55 },
  { date: '2024-06-10', receive: 210, sent: 110, callContract: 60 },
  { date: '2024-06-11', receive: 230, sent: 120, callContract: 65 },
  { date: '2024-06-12', receive: 250, sent: 130, callContract: 70 },
  { date: '2024-06-13', receive: 170, sent: 90, callContract: 35 },
  { date: '2024-06-14', receive: 190, sent: 100, callContract: 45 },
  { date: '2024-06-15', receive: 220, sent: 120, callContract: 60 },
  { date: '2024-06-16', receive: 240, sent: 130, callContract: 65 },
  { date: '2024-06-17', receive: 210, sent: 110, callContract: 55 },
  { date: '2024-06-18', receive: 200, sent: 100, callContract: 50 },
  { date: '2024-06-19', receive: 220, sent: 120, callContract: 60 },
  { date: '2024-06-20', receive: 250, sent: 130, callContract: 65 },
]

const chartConfig = {
  receive: {
    label: 'Receive',
    color: 'hsl(var(--chart-1))',
  },
  sent: {
    label: 'Sent',
    color: 'hsl(var(--chart-2))',
  },
  callContract: {
    label: 'Call Contract',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

export function BarChartTx() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('receive')

  const totals = React.useMemo(
    () => ({
      receive: chartData.reduce((acc, curr) => acc + curr.receive, 0),
      sent: chartData.reduce((acc, curr) => acc + curr.sent, 0),
      callContract: chartData.reduce((acc, curr) => acc + curr.callContract, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Transactions</CardTitle>
          <CardDescription>
            Showing transaction types for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['receive', 'sent', 'callContract'].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {totals[chart as keyof typeof totals].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart}
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  }}
                />
              }
            />
            {Object.keys(chartConfig).map((key) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={chartConfig[key as keyof typeof chartConfig].color}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
