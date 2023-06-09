import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nayem Sarwar",
    lastName: "Chowdhury",
    initials: "🧔", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Backend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the BD'
        },
        // {
        //     emoji: "💼",
        //     text: "Systems Engineer at Google"
        // },
        {
            emoji: "📧",
            text: "nayemsarwar12345@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/beningNayem",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/being_nayem/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Being-Nayem",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/being-nayem/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Being_Nayem",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Nayem Sarwar Chowdhury I'm highly motivated and passionate individual studying economics at Govt. Shaheed Suhrawardy College, Dhaka, Bangladesh. Along with my interest in economics, I have a strong passion for programming and I have developed expertise in languages such as Python, C, and C++.",
    skills:
        {
            proficientWith: ['C', 'C++', 'Python', 'MySQL', 'Django', 'Git', 'GitHub', 'HTML', 'CSS', 'Data Structure', 'Algorithums'],
            exposedTo: ['bootstrap', 'HTML', 'PostreSQL', 'Machine Learning']
        }
    ,
    hobbies: [
        {
            label: 'codding',
            emoji: '💻'
        },
        // {
        //     label: 'theater',
        //     emoji: '🎭'
        // },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Logeachi.com (Team Project)",
            live: "https://beingnayem.pythonanywhere.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Being-Nayem/logeachi.com", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Cinema Hall Seat Booking",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Being-Nayem/Cinema-Hall-Seat-Booking-System",
            image: mock3
        },
        {
            title: "Restaurant Billing System",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Being-Nayem/Restaurant-Billing-System",
            image: mock2
        },
        {
            title: "Task Manager",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Being-Nayem/-Libary-Management",
            image: mock3
        },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}