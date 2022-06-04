console.log("welcome to spotify");

let songIndex=0;

let audioElement= new Audio('song/s2.mp3');

let masterPlay=document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');

let gif = document.getElementById('gif');

let songItems=Array.from(document.getElementsByClassName('songItem'));

let song =[
{songName:"salama-ishq", filePath: "./music player in website/song/s1.mp3", coverPath: "c1.jpg"}, 
{songName:"ndcd", filePath: "song/s2.mp3", coverPath: "c2.jpg"}, 
{songName:"dm m cmd c", filePath: "song/s4.mp3", coverPath: "c4.jpg"}, 
{songName:"nsd mz ,cdsjc md", filePath: "song/s1.mp3", coverPath: "c1.jpg"}, 
{songName:"dm js cwmd csckss", filePath: "song/s1.mp3", coverPath: "c1.jpg"}, 
{songName:"karas sks acs d", filePath: "song/s5.mp3", coverPath: "c5.jpg"},
{songName:"m dncbdm cj", filePath: "song/s4.mp3", coverPath: "c4.jpg"},
]

songItems.forEach((element,i) => {
    
    // element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName;
});




// handle play and pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }


})


// listen  to event listner

audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeALLPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{

makeALLPlays();
        
        
        index=parseInt(e.target.id);
    
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play(); 

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })

})