const Profile = mysqlSequelize.import('../../../schemas/Profile.js')

module.exports = async (params)=>{
    return(async()=>{
        try {
            let data = await Profile.findAll({
                where:{
                    username: params.id
                }
            })
            return data;
        } catch (error) {
            console.log("Profile.........", error)
        }
    })()
}