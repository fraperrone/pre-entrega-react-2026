import { useState } from 'react'

export default function BuscadorComponent({ onBuscar }) {
  const [busqueda, setBusqueda] = useState('')

  const handleBuscar = (e) => {
    const valor = e.target.value
    setBusqueda(valor)
    onBuscar(valor)
  }

  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Buscar..."
      onChange={handleBuscar}
      value={busqueda}
    />
  )
}
