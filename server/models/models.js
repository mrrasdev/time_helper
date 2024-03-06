const { DataTypes } = require(`sequelize`)
const sequelize = require('../db')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, uniqie: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    roles: { type: DataTypes.ARRAY(DataTypes.STRING) },
    taskIds: { type: DataTypes.ARRAY(DataTypes.INTEGER)}
})

const Task = sequelize.define('task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    userIds: { type: DataTypes.INTEGER, foreignKey: true },
    additionalFileSrc:{type: DataTypes.STRING},
    date: {type: DataTypes.DATE}
})


User.hasMany(Task)
Task.hasOne(User)

module.export = {
    User, Task
}