import type { FC } from "react"
import type { TooltipProps } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {}

export const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
        <p className="mb-1 font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}
