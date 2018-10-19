import * as mysql from 'mysql'

class DatabaseConnection {

    public source = mysql.createPool({
        host     : 'localhost',
        user     : 'chat_usr',
        password : 'secret',
        database : 'chatindodax'
    });

    public destination = mysql.createPool({
        host     : 'localhost',
        user     : 'chat_usr',
        password : 'secret',
        database : 'chatsync'
    })
    
}

export default new DatabaseConnection()
