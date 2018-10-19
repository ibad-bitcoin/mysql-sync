import app from './config/app'
import sync from './sync'

(async () => { 
    
    if(app.RUN_INITIAL) {
        sync.Initial()
    }

    while (true) {
        await sync.Resume()
        await sync.delay(app.SYNC_INTERVAL)
    }
    
})();