const { v4: uuidv4 } = require('uuid');

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < 5; i++) {
        // Lee más sobre la elección del índice aleatorio en:
        // https://parzibyte.me/blog/2021/11/30/elemento-aleatorio-arreglo-javascript/
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }

    // let's do a 20% discount everytime
    event.params.data.code = "AG-"+ aleatoria;
  },  
};