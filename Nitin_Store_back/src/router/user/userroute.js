const { register, login } = require("../../controller/usercontroller");


module.exports = (router) => {
    router.post("/register", register);
    router.post("/login", login);
}