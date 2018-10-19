import app from './config/app'
import db from './config/db'

class Sync 
{
    public Start = async (lastId?: number) => {

        if(lastId == undefined || lastId == null) {
            lastId = 0
        }

        const sourceQuery = db.source.query('SELECT * FROM conversations WHERE id > ? LIMIT ?', [lastId, app.ROW_LIMIT])
    
        sourceQuery.on('error', (error) => {
    
            console.log('Error when select source: ')
            console.log(error.message)
    
        }).on('result', (row) => {
    
            const jsonString = JSON.stringify(row)
            const post = JSON.parse(jsonString)
    
            db.destination.query("INSERT INTO conversations SET ?", post, (error, results) => {
                
                if (error) {
                    console.log(error.message)
                    return
                }
    
                console.log('Id '.concat(results.insertId,' synced'))
            })
        })   
    }

    public Initial = async () => {
        this.Start()
    }

    public Resume = async () => {
  
        const destResult = db.destination.query('SELECT * FROM conversations ORDER BY id DESC LIMIT 1')
    
        destResult
        .on('error', (error) => {
            console.log(error.message)
        })
        .on('result', async (row) => {
            await this.Start(row.id)
        })
        .on('end', async (results) => {
         
        })
    }

    public delay = async (ms: number) => {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
    
}

export default new Sync()




