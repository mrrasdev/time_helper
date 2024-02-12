const { DataTypes } = require(`sequelize`)
const sequelize = require('./db')

// const User = sequelize.define(modelName: 'user', attributes:{
//     id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true}
// })

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, uniqie: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    roles: { type: DataTypes.ARRAY },
    taskIds: { type: DataTypes.ARRAY}
})

const Task = sequelize.define('task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    userIds: { type: DataTypes.INTEGER, foreignKey: true },
    additionalFileSrc:{type: DataTypes.STRING},
    date: {type: DataTypes.DATE}
})

const TasksDay = sequelize.define('taskDate', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date:{type: DataTypes.DATE ,  foreignKey: true },
    taskIds: { type: DataTypes.ARRAY},
})

const Note =  sequelize.define('taskDate', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
})