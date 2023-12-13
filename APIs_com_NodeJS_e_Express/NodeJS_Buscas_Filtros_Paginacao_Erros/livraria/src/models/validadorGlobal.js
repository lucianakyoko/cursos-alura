import mongoose from "mongoose";

mongoose.Schema.Types.String.set('validate', {
  validator: (valor) => valor !== '',
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
});