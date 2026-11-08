import { db} from './src/firebase/clienteFireBase.js';
import { collection, serverTimestamp, writeBatch, doc } from "firebase/firestore";

const products = [
  {
    name: "Camiseta Algodón Premium",
    description: "Camiseta de corte clásico, 100% algodón orgánico, suave y transpirable.",
    price: 24.99,
    category: "Ropa",
    stock: 50,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Zapatillas Deportivas Run Pro",
    description: "Zapatillas ligeras con amortiguación de gel, ideales para running y entrenamiento intensivo.",
    price: 89.95,
    category: "Calzado",
    stock: 25,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Auriculares Inalámbricos ANC",
    description: "Auriculares de diadema con cancelación activa de ruido y hasta 40 horas de batería.",
    price: 119.99,
    category: "Electrónica",
    stock: 15,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Mochila Urbana Impermeable",
    description: "Diseño ergonómico con compartimento acolchado para laptop de hasta 15.6 pulgadas.",
    price: 45.50,
    category: "Accesorios",
    stock: 30,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Reloj Inteligente FitVibe",
    description: "Monitoreo de ritmo cardíaco, oxígeno en sangre, sueño y más de 20 modos deportivos.",
    price: 69.00,
    category: "Electrónica",
    stock: 18,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Gafas de Sol Polarizadas",
    description: "Protección UV400 total con montura de policarbonato ligera y resistente.",
    price: 34.95,
    category: "Accesorios",
    stock: 40,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Teclado Mecánico RGB",
    description: "Teclado gamer con switches mecánicos layout en español e iluminación personalizable.",
    price: 79.99,
    category: "Electrónica",
    stock: 12,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Botella de Agua Térmica",
    description: "Acero inoxidable de doble capa, mantiene tus bebidas frías por 24h o calientes por 12h.",
    price: 19.99,
    category: "Hogar",
    stock: 60,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Sudadera con Capucha Classic",
    description: "Sudadera unisex con bolsillo tipo canguro, interior de felpa suave.",
    price: 39.99,
    category: "Ropa",
    stock: 45,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Ratón Ergonómico Inalámbrico",
    description: "Reduce la tensión en la muñeca, DPI ajustable y conexión dual Bluetooth/USB.",
    price: 29.50,
    category: "Electrónica",
    stock: 22,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Cafetera de Goteo Programable",
    description: "Capacidad para 12 tazas, temporizador automático y sistema antigoteo.",
    price: 49.99,
    category: "Hogar",
    stock: 10,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Lámpara de Escritorio LED",
    description: "Brazo flexible con 3 modos de color y regulación de brillo táctil.",
    price: 22.00,
    category: "Hogar",
    stock: 35,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Pantalones Vaqueros Slim Fit",
    description: "Jeans de mezclilla elástica para un ajuste cómodo y duradero.",
    price: 45.00,
    category: "Ropa",
    stock: 28,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Batería Externa 20000mAh",
    description: "Powerbank de alta capacidad con carga rápida y salidas dobles USB-C.",
    price: 32.99,
    category: "Electrónica",
    stock: 50,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Libreta de Notas Premium",
    description: "Tapas duras de cuero sintético, hojas de 100g rayadas y marcapáginas de cinta.",
    price: 14.50,
    category: "Accesorios",
    stock: 80,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Altavoz Bluetooth Portátil",
    description: "Sonido estéreo nítido, resistencia al agua IPX7 y 12 horas de reproducción.",
    price: 55.00,
    category: "Electrónica",
    stock: 14,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Tapete de Yoga Antideslizante",
    description: "Material ecológico TPE de 6mm de grosor con líneas de alineación corporal.",
    price: 27.99,
    category: "Deportes",
    stock: 40,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Kit de Mancuernas Ajustables",
    description: "Set total de 20kg con discos intercambiables y barra de unión acolchada.",
    price: 95.00,
    category: "Deportes",
    stock: 8,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Cojín Ergonómico para Silla",
    description: "Espuma viscoelástica de alta densidad, alivia la presión lumbar al trabajar.",
    price: 26.50,
    category: "Hogar",
    stock: 19,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  },
  {
    name: "Soporte Ajustable para Laptop",
    description: "Aluminio ventilado con 6 niveles de altura, ideal para evitar dolores de cuello.",
    price: 18.99,
    category: "Accesorios",
    stock: 44,
    imageUrl: "https://unsplash.com",
    createdAt: serverTimestamp()
  }
];

async function runSeeder() {
  console.log("Conectando a Firestore e iniciando carga...");
  
  const productsCollection = collection(db, "products");
  const batch = writeBatch(db);

  products.forEach((product) => {
    const newDocRef = doc(productsCollection); 
    batch.set(newDocRef, product);
  });

  try {
    await batch.commit();
    console.log("¡Productos inyectados con éxito directamente desde el script! ");
  } catch (error) {
    console.error("Error al ejecutar el seeder:", error);
    console.log("\nTip: Verifica que tus 'Reglas de Seguridad' en la consola de Firebase permitan la escritura.");
  } finally {
    process.exit(0);
  }
}

runSeeder();
