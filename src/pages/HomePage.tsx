// src/pages/HomePage.tsx
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-zinc-900">
      <h1 className="text-3xl font-bold mb-6">
        Bem-vindo ao Portal Jurídico IA
      </h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-semibold"
        onClick={() => navigate("/pageOne")}
      >
        Acessar IA Jurídica
      </button>
    </div>
  );
}
