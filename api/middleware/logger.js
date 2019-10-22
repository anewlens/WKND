module.exports = function(req, res, next) {
    console.log('REQUEST HERE:', req)
    console.log('RESPONSE HERE:', res) 
    next()
}