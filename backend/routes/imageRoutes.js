const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, //dym7hxcfn
  api_key: process.env.CLOUD_API_KEY, // 787636154759444
  api_secret: process.env.CLOUD_API_SECRET //IdF6N7UqdHvi32_dKr22USTR8Tw
})

router.delete('/:public_id', async(req, res)=> {
  const {public_id} = req.params;
  try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
})


module.exports = router;