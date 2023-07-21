import joi from 'joi';

const ClientSchema = joi.object({
        nome: joi.string().min(1).required(),
        rua: joi.string().min(0),
        numero: joi.number().integer(),
        bairro: joi.string().min(0),
        cidade: joi.string().min(0),
        contato: joi.string().min(0),
        contato2: joi.string().min(0),
        formadepagamento: joi.string().valid('Boleto','Dinheiro/Pix').required(),
        valorCombinado: joi.number().required(),
        observacao: joi.string().min(0),
        vencimento: joi.number().integer().required() 
});

export default ClientSchema;