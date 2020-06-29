import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  InputBase,
  CircularProgress
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useListHero from './useListHero'
import useStyles from './useStyles'
import { Link } from 'react-router-dom'

export default function ListHero() {
  const classes = useStyles()

  const { heroList, searchText, handleSearch, loading } = useListHero()
  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon color="primary" />
        </div>
        <InputBase
          placeholder="Search…"
          color="primary"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        {loading && <CircularProgress size={15} />}
      </div>
      <Grid container direction="row" justify="space-between">
        {heroList &&
          heroList.map((hero) => (
            <Link
              key={hero.id}
              to={`hero/${hero.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    title={hero.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="caption" color="primary">
                      {hero.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        {heroList?.length === 0 && (
          <Typography
            className={classes.centeredText}
            gutterBottom
            variant="caption"
            color="primary"
          >
            {searchText} not founded
          </Typography>
        )}
      </Grid>
    </>
  )
}
