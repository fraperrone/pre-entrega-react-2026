


export default function Footer() {

    const empleados = [
        {
            nombre: "John Doe",
            puesto: "CEO",
            imagen: "https://via.placeholder.com/150"
        },
        {
            nombre: "Jane Smith",
            puesto: "CTO",
            imagen: "https://via.placeholder.com/150"
        },
        {
            nombre: "Mike Johnson",
            puesto: "CFO",
            imagen: "https://via.placeholder.com/150"
        }
    ]

    return (
        <footer className="footer">
            {/* informacion de la empresa (ficticia) */}
            <p>© 2024 My Website. All rights reserved.</p>
            <p>Contact us at info@mywebsite.com</p>
            <p>Follow us on social media!</p>

            {/* tarjeta de 3 empleados */}
            <div className="empleados">
                {empleados.map((empleado, index) => (
                    <div key={index} className="empleado">
                        <img src={empleado.imagen} alt={empleado.nombre} />
                        <h3>{empleado.nombre}</h3>
                        <p>{empleado.puesto}</p>
                    </div>
                ))}
            </div>
        </footer>
    )
}