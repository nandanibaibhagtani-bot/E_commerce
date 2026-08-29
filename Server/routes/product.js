const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productFilePath = path.join(__dirname, '../data/product.json');

router.get('/', (req, res) => {
  try {
    const data = fs.readFileSync(productFilePath, 'utf8');
    const products = JSON.parse(data);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Cannot Load Product", error: error.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const data = fs.readFileSync(productFilePath, 'utf8');
    const products = JSON.parse(data);
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;