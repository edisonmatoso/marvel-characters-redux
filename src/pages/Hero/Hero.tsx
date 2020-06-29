import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import useHero from './useHero'

export default function Hero() {
  const { hero, error, loading } = useHero()
  console.log({ hero })
  return (
    <>
      <Link to="/">
        <Typography>Go back to list</Typography>
        {loading && (
          <Typography variant="caption">Loading hero info...</Typography>
        )}
      </Link>
    </>
  )
}
