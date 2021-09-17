import React, { Component } from 'react'
import Select from 'react-select'

export const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const colourOptions = () => (
  <Select options={options} />
)

