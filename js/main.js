;(function(){
	"use strict";

	var playList = [{
            author: "foals",
            song: "my number",
            duration: "2:03"
        },
        {
            author: "the elephants",
            song: "friends",
            duration: "2:30"
        },
        {
            author: "the black keys",
            song: "lonely boy",
            duration: "1:56"
        },
        {
            author: "latexfauna",
            song: "surfer",
            duration: "3:03"
        },
        {
            author: "mumford & sons",
            song: "little lion man",
            duration: "2:53"
        },
        {
            author: "kasabian",
            song: "wasted",
            duration: "2:43"
        },
        {
            author: "arctic monkeys",
            song: "do i wanna know?",
            duration: "2:13"
        },
        {
            author: "franz ferdinand",
            song: "love illumination",
            duration: "3:03"
        }
    ];

    var playListEl = document.getElementById('playlist'),
    	playListTmpl = document.getElementById('playlist-li').innerHTML,
    	playListHTML = '';

    console.log(playListTmpl);

    playList.forEach(function (item) {


    	playListHTML += playListTmpl
    		.replace(/{{author}}/ig, item.author)
    		.replace(/{{duration}}/ig, item.duration)
    		.replace(/{{song}}/ig, item.song);


    });

    playListEl.innerHTML = playListHTML;



})();
