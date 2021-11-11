const Product = require('../models/product');

module.exports.getProducts = async (req, res)=> {
    try {
        const getRecords = await Product.find({});
       
        res.send(getRecords);
      } catch (error) {
          res.status(400).send(error);
      }
}

module.exports.createProducts = async (req, res)=> {
    try {
             const addingRecords = new Product(req.body)
             const insertProduct = await addingRecords.save();
             res.status(201).send(insertProduct);
           } catch (error) {
               res.status(400).send(error);
           }
}

module.exports.deleteProducts = async (req, res)=> {
    try {
              const _id = req.params.id;  
              const getRecord = await Product.findByIdAndDelete(_id);
             
              res.send(getRecord);
            } catch (error) {
                res.status(500).send(error);
            }
}

module.exports.updateProducts = async (req,res)=> {
    try {
              const _id = req.params.id;  
              const getRecord = await Product.findByIdAndUpdate(_id, req.body ,{
                  new: true
              });
             
              res.send(getRecord);
            } catch (error) {
                res.status(500).send(error);
            }
}