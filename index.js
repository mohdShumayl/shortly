const express = require('express');
const app = express();
const { connectToMonoDb } = require('./connection')
const path = require('path');
const cookieParser = require('cookie-parser')

const urlRoute = require('./routes/url.route')
const userRoute = require('./routes/user.route')
const staticRoute = require('./routes/staticRouter.route')

const {checkForAuthentication, restrictTo} = require("./middlewares/auth") 
const URL = require("./models/url.model")
const PORT = 8002;

connectToMonoDb("mongodb://127.0.0.1:27017/urlShortnerProject").then(() => console.log('MongoDB connected'))
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use(checkForAuthentication)

app.use('/url', restrictTo(["NORMAL", "ADMIN"]) ,urlRoute);

app.use('/',  staticRoute);

app.use('/user', userRoute);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    console.log(shortId)
    const entry = await URL.findOneAndUpdate(
        { shortID : shortId }, 
        {
            $push: {
                visitHistory:
                {
                    timestamp: Date.now(),
                },
            }
        }, 
        { new: true } // return the updated doc
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
})

app.get("/test",async(req, res)=>{
    const allUrls = await URL.find({});
    return res.render("home",{
        urls: allUrls,
        name: "Shumayl"
    })
})

app.listen(PORT, () => { console.log(`App is Running on PORT ${PORT}`) });