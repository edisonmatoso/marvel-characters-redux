import Hero from '../../types/Hero'
import {
  HeroActionTypes,
  HerosState,
  ADD_HERO_LIST,
  EDIT_HERO_NAME
} from './types'

const initialState: HerosState = {
  heros: []
}

export default function herosReducer(
  state = initialState,
  action: HeroActionTypes
) {
  switch (action.type) {
    case ADD_HERO_LIST:
      return action.payload

    case EDIT_HERO_NAME:
      return state.heros.map((hero: Hero) => {
        if (hero.id === action.payload.id) {
          hero.name = action.payload.name
        }
        return hero
      })
    default:
      return state.heros
  }
}
