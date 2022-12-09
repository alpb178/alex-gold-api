const { v4: uuidv4 } = require('uuid');

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    // let's do a 20% discount everytime
    event.params.data.code = "AG-"+ uuidv4();
  },  
};