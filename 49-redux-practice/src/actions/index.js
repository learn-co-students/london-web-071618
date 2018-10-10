import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, SHOW_ALL_PAINTINGS, SHOW_NATIONAL_PAINTINGS } from './types'
import artworks from '../data/artworks'

export function fetchPaintings () {
  return { type: FETCH_PAINTINGS, payload: artworks }
}

export function selectPainting (activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID }
}

export function deletePainting (activeID) {
  return { type: DELETE_PAINTING, id: activeID }
}

export function showAllPaintings () {
  return { type: SHOW_ALL_PAINTINGS }
}

export function showNationalPaintings () {
  return { type: SHOW_NATIONAL_PAINTINGS }
}

// deletePainting(1) // { type: 'DELETE_PAINTING', id: 1 }
