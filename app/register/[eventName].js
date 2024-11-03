import BackButton from "@/components/BackButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RegisterEvent() {
  const router = useRouter();
  const { eventName } = router.query;

  const categories = [
    { id: 1, name: "Infantil", price: 500 },
    { id: 2, name: "Juvenil", price: 1000 },
    { id: 3, name: "Adulto", price: 1500 },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dni: "",
    phone: "",
    email: "",
    selectedCategory: categories[0].id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedCategory = categories.find(
      (category) => category.id === parseInt(form.selectedCategory)
    );

    try {
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedCategory }),
      });

      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point; // Redirige al link de pago de Mercado Pago
      } else {
        alert("Error al generar el enlace de pago");
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton label="Atrás" className="mb-4" />

      <h1 className="text-3xl font-bold mb-4">
        Inscripción para {eventName || "Evento"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Nombre</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Apellido</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">DNI</label>
          <input
            type="text"
            name="dni"
            value={form.dni}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Celular</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Correo de contacto</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Categoría</label>
          <select
            name="selectedCategory"
            value={form.selectedCategory}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} - ${category.price}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ir a Pagar
        </button>
      </form>
    </div>
  );
}
