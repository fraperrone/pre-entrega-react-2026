

export default function Item({ producto }) {
    return (
        <div className="item">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
        </div>
    )
}
