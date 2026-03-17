import type { WidgetProps } from './types'
import { CounterWidget } from './counter/CounterWidget'
import { JournalWidget } from './journal/JournalWidget'

type WidgetComponent = (props: WidgetProps) => JSX.Element | null

const REGISTRY: Record<string, WidgetComponent> = {
  counter: CounterWidget,
  journal: JournalWidget,
}

/** Get the widget component for a given type. Returns null if unknown. */
export function getWidget(type: string): WidgetComponent | null {
  return REGISTRY[type] ?? null
}
