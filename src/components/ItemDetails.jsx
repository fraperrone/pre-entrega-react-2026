import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function ItemDetails() {
  const { id } = useParams()
  const { state } = useLocation()
  const { nombre, descripcion, precio } = state.producto

  return (
    <>
      <h1>Detalle de producto {id}</h1>

      <p>
        {' '}
        {nombre} - {precio}{' '}
      </p>
      <p> {descripcion} </p>
    </>
  )
}
