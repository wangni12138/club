const express = require('express');
const router = express.Router()
const MembersClubApiServer = require("../../service/MembersClubApiServer")
const { asyncHandler } = require(".././getSendResult")


router.get("/", asyncHandler(async (req, res) => {

    return await MembersClubApiServer.getUserAll()
}))



module.exports = router
