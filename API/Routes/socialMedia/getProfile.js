const profile = require(appPath+"/models/socialMedia")

module.exports = async (req, res)=>{
    let response = Object.assign({}, BasicResponse)

    let Profile = new profile()
    let result = await Profile.getProfile(req.query)
    .catch(err=>{
        response.message = err;
        res.status(403).json(response)
    })
    response.success = true;
    response.message = result;
    res.status(200).json(response)
}