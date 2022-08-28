const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
/* 
    #swagger.responses[200] = {
        description: "Echo a message",
        schema: {
            echo: 'Your Message Here!'
        }
    }
    #swagger.parameters['echo'] = {
        in: 'query',
        required: true,
        description: 'Your Message to ECHO'
    }  
*/
if (!req.query.echo) {
    return next(new Error('echo query param is required!'))
    
}
return res.status(200).send({
    echo: req.query.echo
})
});

module.exports = router;
