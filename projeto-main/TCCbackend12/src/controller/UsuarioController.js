const Usuario = require("../model/Usuario");

module.exports = {
  async cadastrarUsuario(request, response) {
    const usuario = new Usuario(request.body);
    const cadastrar = await usuario.cadastrar();
    console.log(request.body);
    return response.json(cadastrar);
  },
};
  