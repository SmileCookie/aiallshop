import {render} from "react-dom"
import {BrowserRouter as Router, Route, indexRedirect, Switch, browserHistory} from "react-router-dom"
import App from "./App"

require("./less/main.less")
require("./css/base.css")
require("./less/detail.less")
require("./less/entrep.less")
require("./less/goods.less")
require("./less/login.less")
require("./less/moreMain.less")
require("./less/myCenter.less")
require("./less/register.less")
require("./less/shopCar.less")
require("./less/sortMain.less")
require("swiper/dist/css/swiper.min.css")

var iWidth = document.documentElement.clientWidth || document.body.clientWidth;
var percentage = iWidth / 640;
var fontSize = percentage * 100;
document.documentElement.style.fontSize = fontSize + "px";

window.addEventListener('resize', () => {
    var iWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var percentage = iWidth / 640;
    var fontSize = percentage * 100;
    document.documentElement.style.fontSize = fontSize + "px";
})
var Main = props => (<Router basename="/" history={browserHistory}>
    <Route component={App} />
</Router>)

render(<Main />, document.getElementById("app"))



