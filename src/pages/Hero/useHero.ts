import useFetch from 'use-http'
import { useParams } from 'react-router-dom'
import { API_ROOT } from '../../config'

export default function useHero() {
  const { heroId } = useParams()
  const { data: hero = [], error, loading } = useFetch(
    `${API_ROOT}/v1/public/characters/${heroId}&apikey=${process.env.REACT_APP_API_KEY}`,
    []
  )

  return { hero, error, loading }
}
