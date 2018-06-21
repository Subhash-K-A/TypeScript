//class files for youtube video
class Youtube{
    protected title:string;
    protected subscription:number;
    protected likes:number;
    protected dislikes:number;
    protected views:number;
    protected videoSummary:string;//decription about the video
    protected comments:string[];
    protected newComments?:string;
    protected category:string;//sports or movies or tech of education or nature etc
    protected publishedDate:string;
    protected publisher:string;
    

    constructor(title:string,subscription:number,likes:number,dislikes:number,views:number,videoSummary:string,comments:string[],category:string,publisher:string,publishedDate:string,newComments?:string){
        this.title=title;
        this.subscription=subscription;
        this.likes=likes;
        this.dislikes=dislikes;
        this.views=views;
        this.videoSummary=videoSummary;
        this.comments=comments;
        this.category=category;
        this.publishedDate=publishedDate;
        this.publisher=publisher;
    }

    getTitle= () =>{
        console.log("Title :"+this.title);
    }
    getNumberOfSubscriptions= () =>{
        console.log("Subsriptions :"+this.subscription);
    }
    subscribe=()=>{
        this.subscription=this.subscription+1;
    }
    getNumberOfLikes=() =>{
        console.log("Likes :"+this.likes);
    }
    likeTheVideo=() =>{
        this.likes=this.likes+1;
    }
    getNumberOfDislikes=() =>{
        console.log("Dislikes :"+this.dislikes);
    }
    dislikeTheVideo = () =>{
        this.dislikes=this.dislikes+1;
    }
    getTotalViewers = () =>{
        console.log("Views :"+this.views);
    }
    getVideoSummary = () =>{
        console.log("Summary :"+this.videoSummary);
    }
    getCategory = () =>{
        console.log("Category :"+this.category);
    }
    getPublishedDate = () =>{
        console.log("Published Date:"+this.publishedDate);
    }
    getPublisher = () =>{
        console.log("Publisher :"+this.publisher);
    }
    getLastComment = () =>{
        console.log("Last Comment :"+this.comments[0]);
    }
    addComment=(comment:string) =>{
        this.comments.unshift(comment);
    }
    getTotalComments=() =>{
        console.log("Total Comments :"+this.comments.length);
    }
}

class Sports extends Youtube{
    private game:string;//football or cricket or basketball etc

    constructor(title:string,subscription:number,likes:number,dislikes:number,views:number,videoSummary:string,comments:string[],category:string,publisher:string,publishedDate:string,game:string){
        super(title,subscription,likes,dislikes,views,videoSummary,comments,category,publisher,publishedDate);
        this.game=game;
    }

    getGameType=()=>{
        console.log("Game :"+ this.game);
    }
}

let video=new Sports("Argentina vs Brazil |1-0| Highlights English extended| International Friendly Match",2584,5865,855,1586556,"Brazil vs Argentina 0-1 Match highlights and goals.Brazil world cup preparations in Russia 2018.Brazil vs Argentina 2018 Argentina vs Brazil friendly. Brazil world cup friendly match 2018. Argentina world cup mission 2018 world cup preparation.",["nice","superb","Messi"],"sports","CrosOOvr","11 Jun 2018","Football");

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


