import { useFetch } from 'use-http'
import { useState, useEffect, useCallback } from 'react'
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom'
import Hero from '../../types/Hero'
import qs from 'query-string'
import ApiDefaultResponse from '../../types/ApiDefaultResponse'
import useDebounce from '../../hooks/useDebounce'
import { API_ROOT } from '../../config'

export default function useListHero() {
  const [heros, setHeros] = useState<Hero[]>()
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
  const { get, error, loading } = useFetch<ApiDefaultResponse<Hero[]>>(API_ROOT)

  const getData = useCallback(async () => {
    const path = searchText
      ? `v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&${stringifiedParams}`
      : `v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}`
    const response = await get(path)
    response && setHeros(response.data.results)
  }, [stringifiedParams, get])

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

  return { error, loading, heros, searchText, handleSearch }
}
