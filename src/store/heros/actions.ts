import Hero from '../../types/Hero'
import { HeroActionTypes, ADD_HERO_LIST, EDIT_HERO_NAME } from './types'

export function addHeroList(heros: Hero[]): HeroActionTypes {
  return {
    type: ADD_HERO_LIST,
    payload: { heros: heros }
  }
}

export function editHeroName(id: number, name: string): HeroActionTypes {
  return {
    type: EDIT_HERO_NAME,
    payload: { id, name }
  }
}
