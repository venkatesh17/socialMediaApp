const comments = require(appPath+'/models/socialMedia')


module.exports = async (req, res)=>{
    let response = Object.assign({},BasicResponse)

    let Comment = new comments()
    let result = await Comment.getcomments(req.query)
    .catch(err=>{
        response.message = false;
        res.status(403).json(response);
    })
    response.message = true;
    response.data = result;
    res.status(200).json(response);
}