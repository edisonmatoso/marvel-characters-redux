import React from 'react'
import { Dialog, DialogContent, TextField, Button } from '@material-ui/core'
import useHeroForm from './useHeroForm'
import Hero from '../../types/Hero'

type HeroFormProps = {
  hero: Hero
  handleClose: () => void
  open: boolean
}

export default function HeroForm({ hero, handleClose, open }: HeroFormProps) {
  const { handleSubmit, register, errors } = useHeroForm(hero, handleClose)
  return (
    <Dialog
      open={open}
      color="primary"
      title="Change hero name"
      onClose={handleClose}
    >
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            inputRef={register()}
            error={errors.name}
            helperText={errors.name?.message}
            autoFocus
            name="name"
            margin="dense"
            type="text"
            label="Hero name"
          />
          <Button type="submit" variant="outlined" color="primary">
            Change
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
