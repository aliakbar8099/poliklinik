import Cors from 'cors'
const jwt = require("jsonwebtoken");

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}


export function isLogin(req, res, trueLogin) {
    // Run the middleware
    runMiddleware(req, res, cors)

    const token = req.headers["authorization"];
    let isB = false;
    if (!token) return res.status(401).json({ message: "کاربر نا معتبر" });

    try {
        const decoded = jwt.verify(token.split("Bearer")[1].trim(), "randomString");
        req.user = decoded.user;
        isB = req.user["NationalCode"]
        // let findUser = data.user.find(i => i.NationalCode == req.user["NationalCode"])
        // res.status(200).send({ user: req.user["NationalCode"], data: findUser });
    } catch (e) {
        res.status(401).send({ message: "کاربر نا معتبر" });
    }

    return isB
}