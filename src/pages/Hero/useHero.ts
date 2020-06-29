import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { HeroContext } from '../../context/HeroContext'

export default function useHero() {
  const { heroId } = useParams()
  const { heroList } = useContext(HeroContext)

  const hero = heroList.find(({ id }) => id === parseInt(heroId))

  return { hero }
}
