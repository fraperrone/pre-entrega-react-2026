## Parte 2

Se conecta el proyecto a Firebase mediante una base de datos NoSQL y se incorpora el servicio de autenticación.

- Se agregan las páginas de inicio de sesión y registro público mediante email y contraseña.
- Se incorpora un panel para agregar, modificar y eliminar productos.
- Se implementa `AuthContext` para gestionar la autenticación mediante Context API.
- Se agregan modales y mensajes de alerta para informar el resultado de las operaciones.
- Se utiliza React-Bootstrap para lograr un diseño responsivo.

### Credenciales de prueba

- Usuario: `fperronerey`
- Contraseña: `admin1234`

**Nota:** El carrito es demostrativo. Al no contar con un sistema de pagos real, no modifica los datos de la base de datos.

### Fuentes

Se utilizó IA como apoyo para el formateo del código, la implementación de Context API, React-Bootstrap y la documentación.

### Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/fraperrone/pre-entrega-react-2026.git
```

2. Ingresar al directorio:

```bash
cd pre-entrega-react-2026
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección indicada por Vite.

**Nota:** El proyecto ya cuenta con la configuración de Firebase (`firebaseConfig`), por lo que no es necesario configurar variables de entorno adicionales.
