import mongodb, {MongoClient, Server} from 'mongodb'

export default class Registry {

    constructor(options){
        this.options = options
        this.initiateConnection()
    }

    initiateConnection(){
      let that = this
      console.log('connecting to ', this.options.dbUrl)
      MongoClient.connect(this.options.dbUrl, function(err, db) {
        console.log('new connection set')
        that.db = db
      })
    }

    isEmailTaken(email){
        let result = this.db.collection('user').find({
            email: email
        }, function(err, docs){
          console.log('docs', docs)
        })

        console.log('result', result)
    }

}
