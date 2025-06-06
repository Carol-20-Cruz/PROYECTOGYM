// components/usuarios/PerfilUsuarioMini.js 
import Link from 'next/link'; 
 
function PerfilUsuarioMini({ nombre, email, username }) { 
  return ( 
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: 
'10px', backgroundColor: '#f9f9f9' }}> 
<h3>{nombre} ({username})</h3> 
<p>Email: {email}</p> 
<Link href={`/usuarios/perfil/${username}`}>Ver perfil 
completo</Link> 
</div> 
); 
} 

export default function ProductoCard({ nombre, precio }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, borderRadius: 5 }}>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
    </div>
  );
}
