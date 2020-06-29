import Hero from '../types/Hero'

export default function herosReducer(state = [], action: any) {
  if (action.type === 'ADD_HERO_LIST') {
    return [...state, ...action.heros]
  }
  return state
}

export const addHeroList = (heros: Hero[]) => {
  return {
    type: 'ADD_HERO_LIST',
    heros
  }
}
