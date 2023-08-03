import { Play } from 'phosphor-react'

import { HomeContainer, StartCountdownButton } from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countsdown } from './components/Countdown'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <NewCycleForm />
        <Countsdown />
        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
