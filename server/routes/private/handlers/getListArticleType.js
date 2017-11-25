const PricesList = require('../../../models/PricesList')

async function listArticlesType( req, res ) {
  const {list} = req.params
  if(list === 'type'){
    const listType = await PricesList.listUnicType()
    res.status(200).json(listType);  
   }else if (list === 'leather'){
    const listLeather = await PricesList.listUnicleather()
    res.status(200).json(listLeather);  
   }
}

module.exports = listArticlesType


