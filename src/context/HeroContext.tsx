import React, { createContext, useState } from 'react'
import Hero from '../types/Hero'

export type HeroContextType = {
  setHeroList: (heros: Hero[]) => void
  heroList: Hero[]
}

export const HeroContext = createContext<HeroContextType>({} as HeroContextType)

export const HeroProvider: React.FC = ({ children }) => {
  const [heroList, setHeroList] = useState<Hero[]>([])

  const providerValue = { heroList, setHeroList }

  return (
    <HeroContext.Provider value={providerValue as HeroContextType}>
      {children}
    </HeroContext.Provider>
  )
}
