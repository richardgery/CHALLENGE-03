const petugas = (req, res, next) => {
    // ngambil data dr cookies
    // utk tanda tanya jaga2 jika tdk ad cookie
    const token = req.cookies?.token;


    if(!token) return res.render("list")
    else return next()
}


module.exports = petugas