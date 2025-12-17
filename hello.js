export default async function(inputs){
    return{
        body: {
            message : "Hello this is new Format of Serverless Functions",
            timeStamp : Date.now()
        },
        status: 200
    }
}