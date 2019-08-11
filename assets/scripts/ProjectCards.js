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
                 "button":"Listen to the First Sound of the Future",
                 "imgsrc":"../images/hatsunemiku.jpg"
                 },
                 {"title": "Automatic Rendering of Augmented Events in Immersive Concerts",
                  "description":"Research conducted at the University of Rochester \
                  during the National Science Foundation Research Experience for \
                  Undergraduates 'Computational Methods for Understanding Music, \
                  Media, and Minds. I worked with Prof. Zhiyao Duan and Ph.D \
                  candidate Christodoulous Benetatos of the AIR lab to create a \
                  piece of software which automatically triggers pre-scripted \
                  events based on a MusicXML score and audio input of a \
                  performance",
                  "link":"https://hatsunem.icu",
                  "button":"Listen to the First Sound of the Future",
                  "imgsrc":"../images/hatsunemiku.jpg"
                  },
var html = templateScript(context)
$('.project-cards').html(html)
