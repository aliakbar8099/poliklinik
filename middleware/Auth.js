const jwt = require("jsonwebtoken");

export function isLogin(req, res, data, user) {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "کاربر نا معتبر" });

    try {
        const decoded = jwt.verify(token.split("Bearer")[1].trim(), "randomString");
        req.user = decoded.user;
        user = []
        user.push(req.user)
        let findUser = data.user.find(i => i.NationalCode == req.user["NationalCode"])
        res.status(200).send({ user: req.user["NationalCode"], data: findUser });
        next();
    } catch (e) {
        res.status(401).send({ message: "کاربر نا معتبر" });
    }
}