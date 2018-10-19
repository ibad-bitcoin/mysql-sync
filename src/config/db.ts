import app from './app'
import * as mysql from 'mysql'

class DatabaseConnection {

    public source = mysql.createPool(app.DB_SOURCE);

    public destination = mysql.createPool(app.DB_DESTINATION)

}

export default new DatabaseConnection()
