
const express = require('express');
const multer = require('multer');
const router = express.Router();
const auth = require("../controllers/auth.js");
const images = require('../controllers/image-controller.js');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', auth.getToken, auth.getUser, upload.single('image'), images.send); //FIXME REGEX
router.get('/:id', images.getAllbyListing);
router.get('/thumbnail/:id', images.getThumbnail);
router.get('/preview/:fileName', images.getPreview);

module.exports = router;