import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { editHeroName } from '../../store/heros/actions'
import Hero from '../../types/Hero'
import { useEffect } from 'react'

const schema = yup.object().shape({
  name: yup.string().required('fill a name to hero')
})

const useHeroForm = (hero: Hero, handleClose: () => void) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset, errors } = useForm({
    validationSchema: schema
  })

  useEffect(() => {
    reset({ name: hero.name })
  }, [reset])

  const onSubmit = (data: any) => {
    dispatch(editHeroName(hero.id, data.name))
    handleClose()
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    reset,
    errors
  }
}

export default useHeroForm
