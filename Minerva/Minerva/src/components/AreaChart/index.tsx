import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts'

const data = [
  { month: 'Jan', value: '123423' },
  { month: 'Fev', value: '345010' },
  { month: 'Mar', value: '535325' },
  { month: 'Abr', value: '134920' },
  { month: 'Mai', value: '431022' },
  { month: 'Jun', value: '455332' },
  { month: 'Jul', value: '786632' },
  { month: 'Ago', value: '234763' },
  { month: 'Set', value: '456352' },
  { month: 'Out', value: '768632' },
  { month: 'Nov', value: '964832' },
  { month: 'Dez', value: '100043' },
]

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width='100%' height='90%'>
      <AreaChart data={data}>
        <defs>
          <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#2451B7' stopOpacity={0.4} />
            <stop offset='75%' stopColor='#2451B7' stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey='value' stroke='#2451B7' fill='url(#color)' />

        <XAxis dataKey='month' axisLine={false} tickLine={false} />

        <YAxis
          dataKey='value'
          axisLine={false}
          tickLine={false}
          tickCount={12}
          tickFormatter={number => {
            return Number(number).toLocaleString('pt-AO', {
              style: 'currency',
              currency: 'AOA',
            })
          }}
          width={112}
        />

        <Tooltip />

        <CartesianGrid opacity={0.1} vertical={false} strokeDasharray='3 3' />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
