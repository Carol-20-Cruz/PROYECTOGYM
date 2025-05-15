// pages/productos/index.js
import Layout from '../../components/Layout';
import Link from 'next/link';

const productos = [
  { id: '1', nombre: 'Producto A', descripcion: 'Descripción del Producto A' },
  { id: '2', nombre: 'Producto B', descripcion: 'Descripción del Producto B' },
  { id: '3', nombre: 'Producto C', descripcion: 'Descripción del Producto C' },
];

export default function Productos() {
  return (
    <Layout>
      <h1>Listado de Productos</h1>
      <ul>
        {productos.map(p => (
          <li key={p.id}>
            <Link href={`/productos/detalle/${p.id}`}>
              <a>{p.nombre}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
