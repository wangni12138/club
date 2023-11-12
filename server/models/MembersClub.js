const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const MembersClub = sequelize.define("MembersClub",
    {
        club_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        club_level: {
            type: DataTypes.STRING,
            allowNull: false
        },
        register_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Valid_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        privilege: {
            type: DataTypes.STRING,
            allowNull: false
        },
        club_license: {
            type: DataTypes.STRING,
            allowNull: false
        },
        members_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        club_avatar: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        paranoid: true
    }
)
module.exports = MembersClub