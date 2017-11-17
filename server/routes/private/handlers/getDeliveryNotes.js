const DeliveryNotes = require('../../../models/DeliveryNotes')
const Customers = require('../../../models/Customers')

function getDeliveryNotes( req, res ) {
 	DeliveryNotes.find({}, function(err, deliveryNote) {
    	Customers.populate(deliveryNote, {path: "customer_id"},function(err, deliveryNote){
        	res.json(deliveryNote);
        })
    })	
}

module.exports = getDeliveryNotes
