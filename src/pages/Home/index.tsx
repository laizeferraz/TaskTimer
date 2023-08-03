import { Play } from 'phosphor-react'

import { HomeContainer, StartCountdownButton } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
