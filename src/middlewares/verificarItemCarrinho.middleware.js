import Carrinho from '../models/carrinho.model.js';
import mongoose from 'mongoose';

const verificarItemCarrinhoMiddleware = (request, response, next) => {
    const carrinho = req.body;
    carrinho.forEach((item) => {
      if (!item || !item.paletaId || !item.quantidade) {
        return response
          .status(400)
          .send({ message: 'Envie o todos os campos do carrinho!' });
      }
    });
    next();
  };

  export default verificarItemCarrinhoMiddleware;
