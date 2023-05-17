const axios = require("axios");
const { index, server } = require("./index"); // Importar o objeto "server" também

describe("Authentication API", () => {
  beforeAll(() => {
    // Iniciar o servidor antes de executar os testes
    server.listen(3002);
  });

  afterAll(() => {
    // Encerrar o servidor após a conclusão dos testes
    server.close();
  });

  it("should authenticate a user", async () => {
    // Dados de exemplo para o teste
    const userData = {
      username: "lucas",
    };

    // Realizar a requisição de autenticação
    const response = await axios.post("http://localhost:3001/authenticate", userData);

    // Verificar se a resposta tem o status esperado
    expect(response.status).toBe(200);

    // Verificar se a resposta contém os dados esperados
    expect(response.data).toHaveProperty("username", userData.username);
    expect(response.data).toHaveProperty("secret", userData.username);
    expect(response.data).toHaveProperty("first_name", userData.username);
  });
});
