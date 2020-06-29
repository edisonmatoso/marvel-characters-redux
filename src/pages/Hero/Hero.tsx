import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid } from '@material-ui/core'
import useHero from './useHero'

export default function Hero() {
  const { hero } = useHero()
  // console.log({ hero })
  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography color="primary">Go back to list</Typography>
      </Link>

      {hero && (
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h3">{hero.name}</Typography>
          {hero.series.items.length ? (
            <ul>
              {hero.series.items.map((serie) => (
                <li key={serie.resourceURI}>{serie.name}</li>
              ))}
            </ul>
          ) : (
            <Typography variant="caption" color="primary">
              {hero.name} don't have a serie
            </Typography>
          )}
        </Grid>
      )}
    </>
  )
}
