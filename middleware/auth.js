const jwt = require('jsonwebtoken');
const { PrismaClient } = require('prisma/prisma-client');
const prisma = new PrismaClient();

const auth = async (req, res, next) => {

    console.log('req', req)
    console.log('AUTHAUTT========', req.headers)

    try {
        let token = req.headers.authorization?.split(' ')[1]; //cut 'bearer' word
        console.log("TOKEN", token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id
            }
        });
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({message: 'Не авторизован'});
    }
}

module.exports = {
    auth
}
