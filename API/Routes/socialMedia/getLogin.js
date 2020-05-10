const login = require(appPath + '/models/socialMedia')

module.exports = async (req,res)=>{
    //let response = Object.assign({}, BasicResponse);
    let response = {
        success:false,
        data:'',
        message:undefined
    }
    let Login = new login()
 
    let result = await Login.getLogin(req.query)
    .catch((err)=>{
        response.message = err;
        res.status(403).json(response)
    })
    response.success = true
    response.data = result
    res.status(200).json(response)
}