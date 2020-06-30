import { useFetch } from 'use-http'
import { useState, useEffect, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Hero from '../../types/Hero'
import qs from 'query-string'
import ApiDefaultResponse from '../../types/ApiDefaultResponse'
import { API_ROOT } from '../../config'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { addHeroList } from '../../store/heros/actions'

export default function useListHero() {
  const dispatch = useDispatch()
  const { heros }: { heros: Hero[] } = useSelector(
    (state: RootStateOrAny) => state.heros
  )
  // eslint-disable-next-line
  let location = useLocation()
  const history = useHistory()
  const { name } = qs.parse(location.search)
  const [searchText, setSearchText] = useState<string | undefined>(
    name as string
  )

  const stringifiedParams = qs.stringify({
    name: searchText
  })
  const { get, abort, error, loading } = useFetch<ApiDefaultResponse<Hero[]>>(
    API_ROOT
  )

  const getData = useCallback(async () => {
    abort()
    const path = searchText
      ? `v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&${stringifiedParams}`
      : `v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}`
    const result = await get(path)

    if (result) {
      dispatch(addHeroList(result.data.results))
    }
  }, [stringifiedParams, get, searchText, dispatch, abort])

  useEffect(() => {
    history.push(`${location.pathname}?${stringifiedParams}`)
    getData()
  }, [stringifiedParams, history, location.pathname, getData])

  const handleSearch = (search: string) => {
    if (!search.length) {
      setSearchText(undefined)
    } else {
      setSearchText(search)
    }
  }

  return { error, loading, heros, searchText, handleSearch, abort }
}
