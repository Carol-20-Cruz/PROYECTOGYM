import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header style={{ padding: '1rem', backgroundColor: '#0070f3', color: 'white' }}>
        <nav>
          <Link href="/"><a style={{ marginRight: '1rem', color: 'white' }}>Home</a></Link>
          <Link href="/productos"><a style={{ marginRight: '1rem', color: 'white' }}>Productos</a></Link>
          <Link href="/usuarios"><a style={{ color: 'white' }}>Usuarios</a></Link>
        </nav>
      </header>
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #ccc' }}>
        © 2025 Mi Aplicación Next.js
      </footer>
    </>
  );
}