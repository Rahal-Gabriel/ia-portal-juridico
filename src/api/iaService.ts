import baseUrl from "./config";

interface ProcessarRequest {
  raw_data: string;
  tipo_processamento: string;
}

export async function processarTexto(data: ProcessarRequest) {
  const response = await baseUrl.post("/processar", data);
  return response.data;
}
