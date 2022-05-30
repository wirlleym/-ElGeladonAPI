import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CarrinhoSchema = new Schema(
  {
    paletaId: { type: String, required: true },
    quantidade: { type: Number, required: true },
      },
  { versionKey: false },
);

const Carrinho = model('carrinho', CarrinhoSchema);

export default Carrinho;
