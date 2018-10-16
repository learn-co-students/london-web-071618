import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const MuseumPicker = ({ showAllPaintings, showNationalPaintings, filter }) => {
  return (
    <div className='row'>
      <div className='ui menu'>
        <div onClick={showAllPaintings} className={`${!filter && 'active'} item`}>All Museums</div>
        <div onClick={showNationalPaintings} className={`${filter && 'active'} item`}>National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  filter: state.filter
})

export default connect(mapStateToProps, actions)(MuseumPicker)
