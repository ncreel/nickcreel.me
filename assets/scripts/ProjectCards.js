/*
ProjectCards.js: handlebars client side templating of the cards featured in the
projects section of my webpage. Simply practicing my handlebars skills :)
nick creel aug 2019
*/

var template = $('#project-template').html();
var templateScript = Handlebars.compile(template)
var context = { "projects" : [
                {"title": "hatsunem.icu",
                 "description":"A Single Page Application which plays a random \
                 video from a carefully curated youtube playlist of songs \
                 featuring virtual diva Hatsune Miku.",
                 "link":"https://hatsunem.icu",
                 "button":"Draw your pick",
                 "imgsrc":"../images/hatsunemiku.jpg"
                 },
                 {"title": "Automatic Rendering of Augmented Events in Immersive Concerts",
                  "description": "I worked with Prof. Zhiyao Duan and Ph.D \
                  candidate Christodoulous Benetatos of the AIR lab at the University of Rochester \
                  to create software which automatically triggers pre-scripted \
                  events based on a MusicXML score and realtime audio input of a \
                  performance",
                  "link":"../images/researchposter/index.html",
                  "button":"Read more",
                  "imgsrc":"../images/AUTOMATICRENDERING.png"
                  },
                  {"title": "KOLYA",
                   "description":"When I'm not studying, I'm creating. Sometimes, \
                   I upload some of my musical creations to my bandcamp. You can find \
                   my longer works on my bandcamp, and I plan to include shorter pieces \
                   in future interactive works.",
                   "link":"https://kolyaproject.bandcamp.com/",
                   "button":"Listen here",
                   "imgsrc":"../images/inmyroom.jpg"
                   }
                 ]
               }

var html = templateScript(context)
$('.project-cards').html(html)
