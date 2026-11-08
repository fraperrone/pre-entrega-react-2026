
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function GenericTable({
  columnas = [],
  datos = [],
  onEditar,
  onEliminar
}) {

    console.log(datos)
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={columna}>
              {columna}
            </th>
          ))}
          <th className="text-center">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {datos.length > 0 ? (
          datos.map((dato) => (
            <tr key={dato.id}>

              {columnas.map((columna) => (
                <td key={columna}>
                  {dato[columna] ?? "-"}
                </td>
              ))}

              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">

                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => onEditar(dato)}
                  >
                    <i className="bi bi-pencil" />
                  </Button>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onEliminar(dato)}
                  >
                    <i className="bi bi-trash" />
                  </Button>

                </div>
              </td>

            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columnas.length + 1} className="text-center">
              No hay productos disponibles
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
