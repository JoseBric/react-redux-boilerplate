import { connect } from 'react-redux'
import { fetchItems } from 'Actions/itemActions'

import React from 'react'
import PropTypes from 'prop-types'

import './Items.scss'

/**
 * Container Component
 * 
 * Displays all posts
 */

const Items = ({ fetchItems, items, }) => {
  return (
    <div>
      Items
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.items.items
})

const mapDispatchToProps = {
  fetchItems,
}

Items.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
