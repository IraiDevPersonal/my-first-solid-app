import type { Component } from 'solid-js'
import { v4 as uuid } from 'uuid'
import { Card } from './components/Card'
import { CardResult } from './components/CardResult'
import { CardSummary } from './components/CardSummary'
import { type Summary } from './components/SummaryList'

const SUMMARY_LIST: Summary[] = [
  { id: uuid(), category: 'Reaccion', score: 99 },
  { id: uuid(), category: 'Memoria', score: 67 },
  { id: uuid(), category: 'Verbal', score: 79 }
]

const App: Component = () => {
  return (
    <main class='h-screen w-full xs:grid xs:place-content-center bg-neutral-200'>
      <Card>
        <CardResult score={79} message='Execente puntaje' title='Excelente' />
        <CardSummary list={SUMMARY_LIST} />
      </Card>
    </main>
  )
}

export default App
