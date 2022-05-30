import { Router } from 'express';
import CarrinhoControllers from '../controllers/carrinho.controllers';
import verificarItemCarrinhoMiddleware from '../middlewares/verificarItemCarrinho.middleware';

const carrinhoRouter = Router();
const carrinhoControllers = new CarrinhoControllers();

carrinhoRouter.get('/carrinho-compras', carrinhoControllers.carrinhoComprasController)
carrinhoRouter.post(
  '/adicionar-item-carrinho',
  verificarItemCarrinhoMiddleware,
  carrinhoControllers.adicionarItemController,
);
carrinhoRouter.delete(
  '/finalizar-compra',
  carrinhoControllers.deletarItemCarrinhoController,
);

export default carrinhoRouter;
