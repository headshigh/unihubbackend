"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routing = express_1.default.Router();
const postcontroller_1 = require("../controllers/postcontroller");
const commentcontrller_1 = require("../controllers/commentcontrller");
const usercontroller_1 = require("../controllers/usercontroller");
routing.route("/posts").post(postcontroller_1.createPost).get(postcontroller_1.getHomePosts);
routing.route("/posts/:id").get(postcontroller_1.getonepost);
routing.route("/posts/like/:id").post(postcontroller_1.likepost);
routing.route("/posts/unlike/:id").post(postcontroller_1.unlikepost);
routing.route("/register").post(usercontroller_1.register);
routing.route("/login").post(usercontroller_1.login);
routing.route("/comment/:id").get(commentcontrller_1.getcomments);
routing.route("/comment/:id").post(commentcontrller_1.createcomment);
routing.route("/reply/:id").post(commentcontrller_1.createReply);
routing.route("/reply/:id").get(commentcontrller_1.getReply);
routing.route("/generate").post(usercontroller_1.generatenewacesstoken);
// routing.get("/protected", (req, res) => {
//   res.send("hello" + req.user);
// });
exports.default = routing;
