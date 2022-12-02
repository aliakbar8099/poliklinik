const fs = require("fs");


function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function handler(req, res) {
  const { file, type = "png" } = req.body
  let namefile = makeid(12)

  if (req.method == "POST") {
    if (!file) {
      return res.status(400).send({ msg: "فایل وارد کنید" })
    }
    var base64Data = file.replace(/^data:image\/png;base64,/, "");

    fs.writeFile("./public/upload/" + namefile + "." + type, base64Data, 'base64', function (err) {
      console.log(err);
    });

    res.status(200).json({ url: "/upload/" + namefile + "." + type });
  }



}