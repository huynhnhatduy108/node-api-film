const router = require("express-promise-router")();
const typeController = require("./../controllers/type");


router.route('/')
    .get(typeController.getListType)
    .post(typeController.createType)

router.route('/:id')
    .get(typeController.getType)
    .put(typeController.updateType)
    .delete(typeController.deleteType)

module.exports = router;
