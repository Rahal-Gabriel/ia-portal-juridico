import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { processarTexto } from "../api/iaService";
import "../styles/index.css"; // Certifique-se de que o caminho está correto

export default function PageOne() {
  const [texto, setTexto] = useState("");
  const [template, setTemplate] = useState("historia");
  const [resultado, setResultado] = useState("");

  const mutation = useMutation({
    mutationFn: processarTexto,
    onSuccess: (data) => {
      setResultado(data.resultado || JSON.stringify(data));
    },
    onError: (error: any) => {
      setResultado("Erro: " + error.message);
    },
  });

  const handleSubmit = () => {
    setResultado("");
    mutation.mutate({
      raw_data: texto,
      tipo_processamento: template,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 mb-6 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <h1 className="text-xl font-bold">
            🧠 IA Jurídica — Portal de Análise
          </h1>
        </div>
      </header>

      <main className=" mx-auto px-4 pb-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Imagem à esquerda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/Receba.png" alt="Logo" className="max-w-full h-auto" />
          </div>

          {/* Conteúdo à direita */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold mb-4">
              📜 Cole aqui o documento:
            </h2>

            <textarea
              className="w-full p-4 border border-gray-300 rounded resize-y mb-4 text-black"
              rows={10}
              placeholder="Cole aqui o conteúdo do documento jurídico..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />

            <select
              className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option value="historia">História</option>
              <option value="analisejusbr">Análise JUSBR</option>
              <option value="liminares">Liminares</option>
              <option value="iniciais">Iniciais</option>
              <option value="atas">Atas</option>
            </select>

            <button
              onClick={handleSubmit}
              disabled={mutation.status === "pending"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-semibold"
            >
              {mutation.status === "pending" ? "Processando..." : "Analisar"}
            </button>

            {resultado && (
              <div className="mt-8">
                <h2 className="text-lg font-bold mb-2">🎯 Resultado da IA:</h2>
                <div className="bg-white border border-gray-200 rounded p-4 shadow">
                  <pre className="whitespace-pre-wrap">{resultado}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
