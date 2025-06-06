// pages/usuarios/perfil/[username].js 
import { useRouter } from 'next/router'; 
import Link from 'next/link'; 
 
function PaginaPerfilUsuario({ usuario }) { 
  const router = useRouter(); 
  const { username } = router.query; 
 
  if (router.isFallback) { // Necesario si getStaticPaths tiene fallback: true o 'blocking' 
    return <div>Cargando perfil...</div>; 
  } 
 
  if (!usuario) { 
    return ( 
      <div> 
        <p>Usuario con username '{username}' no encontrado.</p> 
        <Link href="/usuarios">Volver al listado de usuarios</Link> 
      </div> 
    ); 
  } 
 
  return ( 
    <div> 
      <h1>Perfil de: {usuario.nombre}</h1> 
      <p>Username: {username}</p> 
      <p>Email: {usuario.email}</p> 
      <p>Rol: {usuario.rol}</p> 
      <br /> 
      <Link href="/usuarios">Volver al listado de usuarios</Link> 
      <br /> 
      <Link href="/">Volver al Inicio</Link> 
    </div> 
  ); 
} 
 
// Si quieres usar getStaticProps para esta página dinámica: 
/* 
export async function getStaticPaths() { 
  // Simulación: normalmente obtendrías usernames de una API o BD 
  const paths = [ 
    { params: { username: 'usuarioEjemplo' } }, 
    { params: { username: 'anaCoder' } }, 
  ]; 
  return { paths, fallback: true }; // o 'blocking' o false 
} 
 
export async function getStaticProps({ params }) { 
  const { username } = params; 
  const usuariosSimulados = { 
    'usuarioEjemplo': { id: 'u001', nombre: 'Usuario Ejemplo', email: 
'ejemplo@test.com', rol: 'Miembro' }, 
 
 
    'anaCoder': { id: 'u002', nombre: 'Ana Coder', email: 'ana@test.com', 
rol: 'Admin' }, 
  }; 
  const usuario = usuariosSimulados[username] || null; 
 
  if (!usuario) { 
    return { notFound: true }; 
  } 
  return { props: { usuario }, revalidate: 60 }; 
} 
*/ 
 
// Usando getServerSideProps como en el ejemplo original: 
export async function getServerSideProps(context) { 
  const { username } = context.params; // Obtiene el username de la URL 
  // Simulación de carga de datos del usuario específico 
  const usuariosSimulados = { 
    'usuarioEjemplo': { id: 'u001', nombre: 'Usuario Ejemplo', email: 
'ejemplo@test.com', rol: 'Miembro' }, 
    'anaCoder': { id: 'u002', nombre: 'Ana Coder', email: 'ana@test.com', 
rol: 'Admin' }, 
  }; 
  const usuario = usuariosSimulados[username] || null; 
 
  // Si el usuario no se encuentra, puedes redirigir o devolver props indicando que no se encontró 
  if (!usuario) { 
    // Opción 1: Devolver props para que la página maneje el "no encontrado" 
    return { props: { usuario: null } };  
    // Opción 2: Devolver notFound para mostrar una página 404 (más común con getStaticProps) 
    // return { notFound: true }; 
  } 
 
  return { 
    props: { 
      usuario, 
    }, 
  }; 
} 
 
export default PaginaPerfilUsuario;