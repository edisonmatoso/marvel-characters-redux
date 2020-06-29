import { useFetch } from 'use-http'
import { useState, useEffect, useCallback, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Hero from '../../types/Hero'
import qs from 'query-string'
import ApiDefaultResponse from '../../types/ApiDefaultResponse'
import useDebounce from '../../hooks/useDebounce'
import { API_ROOT } from '../../config'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { addHeroList } from '../../store/heros'

export default function useListHero() {
  const dispatch = useDispatch()
  const heroList: Hero[] = useSelector((state: RootStateOrAny) => state.heros)
  // eslint-disable-next-line
  let location = useLocation()
  const history = useHistory()
  const { name } = qs.parse(location.search)
  const [searchText, setSearchText] = useState<string | undefined>(
    name as string
  )
  const debounceSearchText = useDebounce(searchText, 500)
  const stringifiedParams = qs.stringify({
    name: debounceSearchText
  })
  const { get, error, loading, response } = useFetch<
    ApiDefaultResponse<Hero[]>
  >(API_ROOT)

  const getData = useCallback(async () => {
    const path = searchText
      ? `v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&${stringifiedParams}`
      : `v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}`
    const result = await get(path)

    response.ok && dispatch(addHeroList(result.data.results))
  }, [stringifiedParams, get, searchText])

  useEffect(() => {
    history.push(`${location.pathname}?${stringifiedParams}`)
    getData()
  }, [stringifiedParams, history, location.pathname, getData])

  const handleSearch = (search: string) => {
    if (!search) {
      setSearchText(undefined)
    }
    setSearchText(search)
  }

  return { error, loading, heroList, searchText, handleSearch }
}
