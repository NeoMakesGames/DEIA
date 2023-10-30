import { useRouter } from "next/router";

export default function DetalleElemento() {
  const router = useRouter();
  const { id } = router.query;

  // Utiliza el valor de `id` para cargar los detalles del elemento con ese ID

  return (
    <div>
      <h1>Detalles del Elemento {id}</h1>
      {/* Muestra los detalles del elemento aquí */}
    </div>
  );
}
