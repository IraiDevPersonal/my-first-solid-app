import { type Component, For } from 'solid-js'
import { IconBrain, IconBrandLine, IconBrandSupabase } from '@tabler/icons-solidjs'

const COLOR_MAP = {
  Reaccion: 'bg-red-50 text-red-500',
  Memoria: 'bg-amber-50 text-amber-500',
  Verbal: 'bg-green-50 text-green-500'
}

const ICON_MAP = {
  Memoria: <IconBrain />,
  Reaccion: <IconBrandSupabase />,
  Verbal: <IconBrandLine />
}

export interface Summary {
  id: string
  category: keyof typeof COLOR_MAP
  score: number
}

interface Props {
  list: Summary[]
}

export const SummaryList: Component<Props> = ({ list = [] }) => {
  return (
    <ul class='space-y-4'>
      <For each={list}>
        {
          ({ category, score }) => (
            <li
              class={`
                flex items-center justify-between gap-2 p-4 rounded-lg font-semibold
                ${COLOR_MAP[category]}
              `}
            >
              <div class='flex items-center gap-2'>
                {ICON_MAP[category]}
                <span>{category}</span>
              </div>
              <div class='flex items-center gap-1.5 text-slate-900 font-normal text-sm'>
                <span class='font-bold'>{score}</span>
                <span>/</span>
                <span>100</span>
              </div>
            </li>
          )
        }
      </For>
    </ul>
  )
}
