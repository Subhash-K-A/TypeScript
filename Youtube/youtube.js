var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class files for youtube video
var Youtube = /** @class */ (function () {
    function Youtube(title, subscription, likes, dislikes, views, videoSummary, comments, category, publisher, publishedDate, newComments) {
        var _this = this;
        this.getTitle = function () {
            console.log("Title :" + _this.title);
        };
        this.getNumberOfSubscriptions = function () {
            console.log("Subsriptions :" + _this.subscription);
        };
        this.subscribe = function () {
            _this.subscription = _this.subscription + 1;
        };
        this.getNumberOfLikes = function () {
            console.log("Likes :" + _this.likes);
        };
        this.likeTheVideo = function () {
            _this.likes = _this.likes + 1;
        };
        this.getNumberOfDislikes = function () {
            console.log("Dislikes :" + _this.dislikes);
        };
        this.dislikeTheVideo = function () {
            _this.dislikes = _this.dislikes + 1;
        };
        this.getTotalViewers = function () {
            console.log("Views :" + _this.views);
        };
        this.getVideoSummary = function () {
            console.log("Summary :" + _this.videoSummary);
        };
        this.getCategory = function () {
            console.log("Category :" + _this.category);
        };
        this.getPublishedDate = function () {
            console.log("Published Date:" + _this.publishedDate);
        };
        this.getPublisher = function () {
            console.log("Publisher :" + _this.publisher);
        };
        this.getLastComment = function () {
            console.log("Last Comment :" + _this.comments[0]);
        };
        this.addComment = function (comment) {
            _this.comments.unshift(comment);
        };
        this.getTotalComments = function () {
            console.log("Total Comments :" + _this.comments.length);
        };
        this.title = title;
        this.subscription = subscription;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
        this.videoSummary = videoSummary;
        this.comments = comments;
        this.category = category;
        this.publishedDate = publishedDate;
        this.publisher = publisher;
    }
    return Youtube;
}());
var Sports = /** @class */ (function (_super) {
    __extends(Sports, _super);
    function Sports(title, subscription, likes, dislikes, views, videoSummary, comments, category, publisher, publishedDate, game) {
        var _this = _super.call(this, title, subscription, likes, dislikes, views, videoSummary, comments, category, publisher, publishedDate) || this;
        _this.getGameType = function () {
            console.log("Game :" + _this.game);
        };
        _this.game = game;
        return _this;
    }
    return Sports;
}(Youtube));
var video = new Sports("Argentina vs Brazil |1-0| Highlights English extended| International Friendly Match", 2584, 5865, 855, 1586556, "Brazil vs Argentina 0-1 Match highlights and goals.Brazil world cup preparations in Russia 2018.Brazil vs Argentina 2018 Argentina vs Brazil friendly. Brazil world cup friendly match 2018. Argentina world cup mission 2018 world cup preparation.", ["nice", "superb", "Messi"], "sports", "CrosOOvr", "11 Jun 2018", "Football");
video.getTitle();
video.getCategory();
video.getGameType();
video.getPublisher();
video.getPublishedDate();
video.getTotalViewers();
video.getVideoSummary();
video.getNumberOfSubscriptions();
video.subscribe();
console.log("After subscribing :");
video.getNumberOfSubscriptions();
video.getNumberOfLikes();
video.likeTheVideo();
console.log("After Like :");
video.getNumberOfLikes();
video.getNumberOfDislikes();
video.dislikeTheVideo();
console.log("After Dislike :");
video.getNumberOfDislikes();
video.getLastComment();
video.getTotalComments();
video.addComment("Wow");
video.addComment("Always Argentina");
video.addComment("when was this game?");
video.addComment("argentina bouncing back");
console.log("After adding comments :");
video.getLastComment();
video.getTotalComments();
