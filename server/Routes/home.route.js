const { Router } = require('express');
const homeRouter = Router();


homeRouter.get('/', (req, res) => {
    res.send({msg:'Home Routes'});
});

module.exports = { homeRouter };
