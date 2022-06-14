import Carrinho from '../models/carrinho.model.js'; //Importo a model

const carrinhoComprasService = async () => {
  const carrinho = await Carrinho.find();
  return carrinho;
};

const adicionarItemServiçe = async (newCarrinho) => {
  const adicionarCarrinho = await Carrinho.insertMany(newCarrinho);
  return adicionarCarrinho;
};

const deletarItemService = async () => {
  return await Carrinho.deleteMany();
};

module.exports = {
  carrinhoComprasService,
  adicionarItemServiçe,
  deletarItemService,
};
