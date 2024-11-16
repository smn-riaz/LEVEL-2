"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parser
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/', userRouter);
app.use('/api/v1/course', courseRouter);
userRouter.post('/api/v1/users/create-user', (req, res) => {
    const user = req.body;
    // console.log(user);
    res.json({
        success: true,
        message: "User is created Successfully",
        data: user
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    res.json({
        success: true,
        message: "User is created Successfully",
        data: course
    });
});
const logger = (req, res, next) => {
    // console.log(req.url, req.method, req.hostname)
    next();
};
app.get('/', logger, (req, res, next) => {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
        // If error is not handled globally
        // res.status(400).json({
        //   success: false,
        //   message:"Failed to get data"
        // })
    }
});
app.post('/', (req, res) => {
    // console.log(req.body);
    res.json({
        message: "Successfully recieved data"
    });
});
app.get("/:userId/:subId", (req, res) => {
    console.log(req.params);
    res.json({
        user: req.params.userId,
        dev: req.params.subId
    });
});
app.get("/", (req, res) => {
    console.log(req.query);
    res.json();
});
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: ""
    });
});
//global error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
});
exports.default = app;
