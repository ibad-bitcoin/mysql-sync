import * as dotenv from 'dotenv'

dotenv.config()

class Config {
    public RUN_INITIAL = false
    public SYNC_INTERVAL = parseInt(process.env.SYNC_INTERVAL) || 30*1000
    public ROW_LIMIT = parseInt(process.env.ROW_LIMIT) || 20000
    public DB_SOURCE = {
        host     : process.env.SOURCE_HOST,
        user     : process.env.SOURCE_USER,
        password : process.env.SOURCE_PASS,
        database : process.env.SOURCE_DB
    }
    public DB_DESTINATION = {
        host     : process.env.DEST_HOST,
        user     : process.env.DEST_USER,
        password : process.env.DEST_PASS,
        database : process.env.DEST_DB
    }
}

export default new Config()