const baseRoute = function () {
    return process.env.BASE_URL2 || '/';
}

module.exports = baseRoute();