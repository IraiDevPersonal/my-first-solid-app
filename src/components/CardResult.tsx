import { type Component } from 'solid-js'

interface Props {
  score: number
  message: string
  title: string
}

export const CardResult: Component<Props> = ({
  message, score, title
}) => {
  return (
    <div
      class='bg-gradient-to-b from-indigo-500 to-indigo-700 text-white
      rounded-b-3xl md:rounded-3xl flex flex-col justify-center items-center
      gap-4 md:min-w-[280px] py-8 md:px-8'
    >
      <header>
        <h1 class='text-lg text-center text-indigo-200'>
          Tu puntaje
        </h1>
      </header>
      <section class='h-32 w-32 rounded-full grid place-content-center bg-indigo-700/70'>
        <span class='text-5xl font-semibold'>
          {score}
        </span>
        <small class='text-center text-indigo-300 font-light'>
          de 100
        </small>
      </section>
      <footer class='text-center'>
        <h5 class='text-xl mb-2'>{title}</h5>
        <p class='text-indigo-300 text-sm font-light'>{message}</p>
      </footer>
    </div>
  )
}
