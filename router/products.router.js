const express  = require('express');
const faker =require('faker');
const productsService = require ('./../services/products.service');

const router = express.Router();
const service = new productsService();


router.get('/', async(req, res) => {
  const productos= await service.find();
  res.json(productos);
 });

 router.get ('/filter', (req, res)=>{
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res, netx) =>{
  try{
    const {id} = req.params;
  const products = await service.findOne(id);
  res.json(products);
  }catch(error){
    netx(error);
  }
  /*if(id=== 999){
  res.status (400).json({
    message: 'not found'

  });
}
else{
  res.status(200).json({
  id,
  nombre:'Producto 2',
  precio: 2000
})
}*/
});


router.post ('/',async (req,res) =>{
  const body =req.body;
   const newProduct = await service.create(body);
   res.status(201).json(newProduct);
  /*const { id } = req.params;
  res.status(201).json({
    message: 'created',
    data:body,
  })*/
});

router.patch ('/:id',  async(req,res) =>{
 try{ const body =req.body;
  const { id } = req.params;
  const product = await service.update(id, body);
  res.json(product);
 } catch (error){
  res.status(404).json({
    message:error.message
  });
 }
  /*({
    message: 'update',
    data:body,
    id,
  })*/
});
router.delete ('/:id', async(req,res) =>{
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
 /* res.json({
    message: 'Delete',
    id,
  })*/
});

module.exports = router;
