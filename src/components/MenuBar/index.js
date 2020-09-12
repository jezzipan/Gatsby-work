import React from "react"

import { HomeSmile as Home } from "@styled-icons/boxicons-regular/HomeSmile"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { ArrowFromLeft as Arrow } from "@styled-icons/boxicons-regular/ArrowFromLeft"
import { Lightbulb as Light } from "@styled-icons/fa-solid/Lightbulb"

import { GridAlt as Grid } from "@styled-icons/boxicons-regular/GridAlt"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar