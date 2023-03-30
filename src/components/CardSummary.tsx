import { type Component } from 'solid-js'
import { SummaryList, type Summary } from './SummaryList'

interface Props {
  list: Summary[]
}

export const CardSummary: Component<Props> = ({ list }) => {
  return (
    <div class='p-6 flex flex-col gap-4'>
      <header>
        <h1 class='text-lg font-bold'>Resumen</h1>
      </header>
      <section>
        <SummaryList list={list} />
      </section>
      <footer>
        <button
          class='
            rounded-full flex justify-center px-3 py-3 bg-slate-700
            text-white hover:bg-slate-600 outline-none w-full md:min-w-[280px]
          '
        >
          Continuar
        </button>
      </footer>
    </div>
  )
}
