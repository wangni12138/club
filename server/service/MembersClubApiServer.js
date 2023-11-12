const MembersClub = require("../models/MembersClub")
const { Op } = require("sequelize")
const md5 = require("md5")


exports.getUserAll = async function () {
    
    const result=await MembersClub.findAll();
    return JSON.parse(JSON.stringify(result))
}