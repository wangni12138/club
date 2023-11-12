const Mock = require("mockjs")

const result = Mock.mock({
    "data|10": [
        {
            "id|+1":1,
            "club_name":"Sunset",
            "club_level":"3" ,
            "register_time":"@date",
            "Valid_date":"300",
            "privilege":"all products 20% off",
            "club_license":"Copyright © 2023 Sample Application. Built with ReactNative.",
            "members_number":"4309",
            "club_avatar":"https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
}).data
const MembersClub = require("../models/MembersClub")
MembersClub.bulkCreate(result)