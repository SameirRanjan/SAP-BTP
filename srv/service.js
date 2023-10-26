const cds = require('@sap/cds');
module.exports = cds.service.impl(async function() {
    const service = await cds.connect.to('Northwind');
    this.on('READ', 'Products',async req=>{
        try {let result = await service.tx(req).run(req.query);
            return result; 
            
        } catch (error) {
            req.error('500',error);
        }

    });
});