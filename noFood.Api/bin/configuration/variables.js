const variables ={
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://admin:nofood123456@nofood-03he0.mongodb.net/test?retryWrites=true'
    }
}

module.exports = variables;