var express= require("express");
var app = express();

app.use(express.static("dist/ui-wallet-app"));

app.get("/", function (req, res) {
    res.redirect("/")
})
app.listen(8080);