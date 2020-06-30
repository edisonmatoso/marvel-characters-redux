import Hero from '../../types/Hero'

export const ADD_HERO_LIST = 'ADD_HERO_LIST'
export const EDIT_HERO_NAME = 'EDIT_HERO_NAME'

type EditHeroPayload = {
  id: number
  name: string
}

type HeroPayload = {
  heros: Hero[]
}

interface AddHeroListAction {
  type: typeof ADD_HERO_LIST
  payload: HeroPayload
}

interface EditHeroNameAction {
  type: typeof EDIT_HERO_NAME
  payload: EditHeroPayload
}

export interface HerosState {
  heros: Hero[]
}

export type HeroActionTypes = AddHeroListAction | EditHeroNameAction
