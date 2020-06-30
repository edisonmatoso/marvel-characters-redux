import { useParams } from 'react-router-dom'
import Hero from '../../types/Hero'
import { useSelector, RootStateOrAny } from 'react-redux'

export default function useHero() {
  const { heroId } = useParams()
  const { heros }: { heros: Hero[] } = useSelector(
    (state: RootStateOrAny) => state.heros
  )

  const hero = heros && heros.find(({ id }) => id === parseInt(heroId))

  return { hero }
}
