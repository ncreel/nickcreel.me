var template = require('./projectcard.handlebars')
Handlebars = require('handlebars');
var projects = [
                 {title: "hatsunem.icu",
                  description:"A Single Page Application which plays a random video\
                  from a carefully curated youtube playlist of songs featuring virtual\
                  diva Hatsune Miku.",
                  link:"https://hatsunem.icu",
                  button:"Draw your pick",
                  imgsrc:"../images/hatsunemiku.jpg"},
                  {title: "Automatic Rendering of Augmented Events in Immersive Concerts",
                  description: "I worked with Prof. Zhiyao Duan and Ph.D candidate Christodoulous Benetatos of the AIR lab at the University of Rochester to create software which automatically triggers pre-scripted events based on a MusicXML score and realtime audio input of a performance",
                  link:"../images/researchposter/index.html",
                  button:"Read more",
                  imgsrc:"../images/AUTOMATICRENDERING.png"},
                  {title: "KOLYA",
                   description:"I also make music!",
                   link:"https://kolyaproject.bandcamp.com/",
                   button:"Listen here",
                   imgsrc:"../images/inmyroom.jpg"},
                  {title: "EVIDENCE",
                   description: "a collection of electronic poems written during the summer of 2019",
                    link:"./assets/scripts/evidence/evidence.html",
                    button:"Read an Excerpt",
                    imgsrc:"../images/evidence.png"}
                  ];
var test = {title:"test", description:"test", link:"test", button:"test", imgsrc:"../images/hatsunemiku.jpg"}
var result = template(projects)
console.log(result.innerHTML) /*why is this undefined?
/* document.getElementById('project-cards').innerHTML = result.getElementById('project-card').innerHTML(); */
