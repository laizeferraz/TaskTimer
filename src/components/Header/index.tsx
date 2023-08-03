import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <a href="/" title="Timer">
          <Timer size={24} />
        </a>
        <a href="/history" title="History">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
