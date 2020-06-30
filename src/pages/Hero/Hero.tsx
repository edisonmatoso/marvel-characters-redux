import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid, Button } from '@material-ui/core'
import useHero from './useHero'
import HeroForm from './HeroForm'

export default function Hero() {
  const { hero } = useHero()
  const [open, setOpen] = useState(false)
  return (
    <>
      {hero && (
        <HeroForm handleClose={() => setOpen(false)} hero={hero} open={open} />
      )}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography color="primary">Go back to list</Typography>
      </Link>

      {hero && (
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h3">{hero.name}</Typography>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            change hero name
          </Button>
          {hero.series.items.length ? (
            <ul>
              {hero.series.items.map((serie) => (
                <li key={serie.resourceURI}>{serie.name}</li>
              ))}
            </ul>
          ) : (
            <Typography variant="caption" color="primary">
              {hero.name} dont have a serie
            </Typography>
          )}
        </Grid>
      )}
    </>
  )
}
