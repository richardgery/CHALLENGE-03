// buat router
const {Router} =  require("express")
// buat satpam ambil dr folder middleware
const satpam = require("./middleware/authmiddleware")

// buat petugas ambil dr folder middleware
const petugas = require("./middleware/featmiddleware")

// buat variabel utk manggil Router
const router = Router();

router.get("/", satpam, (req, res) => {
    // render dahsboard
    res.render("dashboard");
})

router.get("/list", petugas, (req, res) => {
    // render dahsboard
    res.render("list");
})

router.post("/login", (req, res) => {
    res.cookie("token", "token123")
    res.render("dashboard")
})


router.post("/list", (req, res) => {
    res.cookie("token")
    res.render("list")
})

module.exports = router;