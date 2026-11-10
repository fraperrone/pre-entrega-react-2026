import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Mi Tienda</title>
        <meta
          name="description"
          content="Bienvenido a nuestra tienda en línea, donde encontrarás una amplia variedad de productos de calidad."
        />
        <meta
          name="keywords"
          content="productos, tienda, ecommerce"
        />
      </Helmet>

      <div className="container my-5">
        <h2 className="h2 text-center mb-4">¿Qué ofrecemos?</h2>
        <p className="text-center">
          En nuestra tienda online encontrarás una amplia variedad de productos
          seleccionados con la mejor calidad y precios competitivos. Comprá de
          manera rápida, segura y desde cualquier lugar, con envíos a todo el
          país.
        </p>
      </div>
    </>
  )
}
