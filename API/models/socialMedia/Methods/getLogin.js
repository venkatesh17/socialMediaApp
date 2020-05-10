const Login = mysqlSequelize.import('../../../schemas/Login.js')

module.exports = async (params) =>{
    return(async()=>{
                
        try{
            let data = await Login.findAll({
                where:{
                    username: params.id,
                    password: params.password
                }
            })
            return data;
        }catch(e){
            console.log(e);
            throw e
        }
    })()
}