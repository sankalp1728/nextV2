<<<<<<< HEAD:routes/superAdminRouter.js
const express = require("express");
const superAdminRouter = express.Router()
const superAdminController = require("../controllers/superAdminController")

superAdminRouter.post("/createSuperAdmin", superAdminController.createSuperAdmin)

=======
const express = require("express");
const superAdminRouter = express.Router()
const superAdminController = require("../controllers/superAdmin")

superAdminRouter.post("/createSuperAdmin", superAdminController.createSuperAdmin)

>>>>>>> b86f2bc81255e81ddd35ad18e1b2df43d08a71a1:routes/superAdmin.js
module.exports = superAdminRouter