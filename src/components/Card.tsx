import { type Component, type JSX } from 'solid-js'

interface Props {
  children: JSX.Element
}

export const Card: Component<Props> = ({ children }) => {
  return (
    <article
      class="
        flex flex-col md:flex-row bg-white xs:shadow-xl xs:rounded-3xl overflow-hidden
        min-h-screen w-full xs:min-h-full xs:w-80 md:w-full
      "
    >
      {children}
    </article>
  )
}
