const comments = mysqlSequelize.import('../../../schemas/comments.js')

module.exports = async (id)=>{
    return(async()=>{
        try {
            let data = await comments.findAll({
                where:{
                    userName: id.id
                }
            })
            return data;
        } catch (error) {
            console.log("commets...........", error)
        }
    })()
}