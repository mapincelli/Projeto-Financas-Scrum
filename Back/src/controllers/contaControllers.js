const ContaServices = require('../services/contaServices');

module.exports = {
  ADDD: async (req, res) => {
        let json = { erro: '', result: {} };
        let valor = req.body.valor;
        let cardData = req.body.cardData;
        console.log("Valores recebidos no add:", cardData +" valor: ",valor);
        if (valor && cardData) {
          try {
            // Chama o serviço para atualizar o saldo
            const novoSaldo = await ContaServices.ADDD(valor, cardData);

            // Inclui o novo saldo na resposta JSON
            json.result = {
              valor,
              novoSaldo
            };
          } catch (error) {
            json.erro = 'Erro ao atualizar o saldo da conta';
          }
        } else {
          json.erro = 'Campos não enviados';
        }

        res.json(json);
      },
  SUBD: async (req, res) => {
    let json = { erro: '', result: {} };
    let valor = req.body.valor;
    let cardData = req.body.cardData;
    console.log("Valores recebidos no sub:", cardData +" valor: ",valor);
    if (valor && cardData) {
      try {
        // Chama o serviço para atualizar o saldo
        const novoSaldo = await ContaServices.SUBD(valor, cardData);

        // Inclui o novo saldo na resposta JSON
        json.result = {
          valor,
          novoSaldo
        };
      } catch (error) {
        json.erro = 'Erro ao atualizar o saldo da conta';
      }
    } else {
      json.erro = 'Campos não enviados';
    }

    res.json(json);
  },
    SHOW: async (req, res) => {
        let json = { erro: '', result: [] };
        let userID = req.body.userID;
        console.log(userID);
        let saldo = await ContaServices.ShowSaldo(userID);
        let limite = await ContaServices.ShowLimite(userID);
        let gasto = await ContaServices.ShowGasto(userID);
        console.log("saldo: " + saldo + " limite: " + limite + " gasto: " + gasto);
        var conta = saldo + (limite-gasto);
        json.result = {
          novoSaldo: conta
        };
        res.json(json);

      },
      SUBC: async (req, res) => {
        let json = { erro: '', result: {} };
        let valor = req.body.valor;
        let cardData = req.body.cardData;
        console.log("Valores recebidos no add:", cardData +" valor: ",valor);
        if (valor && cardData) {
          try {
            // Chama o serviço para atualizar o saldo
            const novoSaldo = await ContaServices.SUBC(valor, cardData);

            // Inclui o novo saldo na resposta JSON
            json.result = {
              valor,
              novoSaldo
            };
          } catch (error) {
            json.erro = 'Erro ao atualizar o saldo da conta';
          }
        } else {
          json.erro = 'Campos não enviados';
        }

        res.json(json);
      },
  ADDC: async (req, res) => {
    let json = { erro: '', result: {} };
    let valor = req.body.valor;
    let cardData = req.body.cardData;
    console.log("Valores recebidos no sub:", cardData +" valor: ",valor);
    if (valor && cardData) {
      try {
        // Chama o serviço para atualizar o saldo
        const novoSaldo = await ContaServices.ADDC(valor, cardData);

        // Inclui o novo saldo na resposta JSON
        json.result = {
          valor,
          novoSaldo
        };
      } catch (error) {
        json.erro = 'Erro ao atualizar o saldo da conta';
      }
    } else {
      json.erro = 'Campos não enviados';
    }

    res.json(json);
  },
};
