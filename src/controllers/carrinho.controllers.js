import CarrinhoServices from '../services/carrinho.services.js';  //importando o serviço

class CarrinhoController{
    async carrinhoComprasController(request, response) {
        const carrinhoCompras = await CarrinhoServices.carrinhoComprasService();
        if (carrinhoCompras.length == 0) {
        return response
            .status(404)
            .send({ message: 'Não existe nenhum item no carrinho!' });
        }
        res.send(carrinhoCompras);
    };
    
    async adicionarItemController(request, response) {
    const carrinho = req.body;
    const novoCarrinho = await carrinhoService.adicionarItemService(carrinho);
    res.status(201).send(novoCarrinho);
    };

    async deletarItemCarrinhoController(request, response) {
        await carrinhoService.deletarItemCarrinhoService();
    res.send({ message: 'Item Deletado com sucesso!' });
    };

}

export default CarrinhoController;
 