require(`dotenv`).config()
const express = require("express")
const sequelize = require('./db')
const monule = require('./models/models')
const PORT = process.env.PORT || 5008
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json)
app.get('/',(req, res)=>{
    //res.status(200).json({message: 'messagge'})
    res.end( 'messagge')
})
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()