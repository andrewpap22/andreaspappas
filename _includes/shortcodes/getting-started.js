/**
 * @file Defines a shortcode for displaying a `section` about getting started
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the content “Getting Started” information
 * @module _includes/shortcodes/getting-started
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default function(eleventyConfig) {

    /**
     * “Getting Started” `section` markup
     * @method
     * @name gettingStarted
     * @param {Object} 11ty’s data object
     * @return {String} The rendered shortcode
     * @example `${this.gettingStarted(data)}`
     * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
     */
    eleventyConfig.addShortcode('gettingStarted', function(data) {
        return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        
            <style>
                @keyframes blink {
        
                    0%,
                    49% {
                        border-right-color: transparent;
                    }
        
                    50%,
                    100% {
                        border-right-color: currentColor;
                    }
                }
        
                @keyframes scan {
                    0% {
                        background-position: 0 -100vh;
                    }
        
                    35%,
                    100% {
                        background-position: 0 100vh;
                    }
                }
        
                output {
                    border-radius: 1em;
                    background-color: #131;
                    background-image: radial-gradient(ellipse 500% 100% at 50% 90%, transparent, #121);
                    background-position: center;
                    display: block;
                    height: 70vh;
                    padding: 2em;
                    box-shadow: inset 0 0 10em 1em rgba(0, 0, 0, 0.5);
                    overflow: auto;
                    font-family: monospace;
                    color: rgba(128, 255, 128, 0.8);
                    position: relative;
                }
        
                output::before {
                    position: absolute;
                    content: "";
                    display: block;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    background-image: linear-gradient(0deg, transparent 0%, rgba(32, 128, 32, 0.2) 2%, rgba(32, 128, 32, 0.8) 3%, rgba(32, 128, 32, 0.2) 3%, transparent 100%);
                    background-repeat: no-repeat;
                    animation: scan 7.5s linear 0s infinite;
                }
        
                output::after {
                    position: absolute;
                    content: "";
                    display: block;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    background-image: radial-gradient(ellipse 50% 15% at 50% 15%, rgba(255, 255, 255, 0.05), transparent), radial-gradient(ellipse 50% 10% at 50% 12%, rgba(255, 255, 255, 0.1), transparent), radial-gradient(ellipse 50% 5% at 50% 10%, rgba(255, 255, 255, 0.1), transparent), radial-gradient(ellipse 50% 3% at 50% 9%, rgba(255, 255, 255, 0.1), transparent), radial-gradient(ellipse 200% 20% at 50% 0%, rgba(0, 0, 0, 0.5), transparent), linear-gradient(0deg, rgba(0, 0, 0, 0.2) 50%, transparent 50%);
                    background-size: 100%, 100%, 100%, 100%, 100%, 100% 0.25ch;
                }
        
                output q {
                    border-right: 0 solid currentColor;
                    animation: blink 500ms linear 0s infinite;
                    text-shadow: 0 0 1ex #3f3, 0 0 2px rgba(255, 255, 255, 0.8);
                    margin-bottom: 1em;
                    line-height: 150%;
                }
        
                output q::before {
                    content: "> ";
                }
        
                output q:last-child {
                    border-right-width: 1ch;
                }
            </style>
        </head>
        
        <body>

            <section 
              style="border:var(--border);padding:var(--base-unit);">
                
              <output></output>
              <p>If you find this page and it's content usefull you could consider helping it "grow" even more by using the 👇 button below! <p>
              <p> <a href="https://andrewpap22.github.io/">I</a> deeply appreciate everyone's valuable help! 🙏</p>
              <div style="margin-top:11px;display: flex;justify-content: center;align-items: center;">
                <script type="text/javascript"
                  src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button"
                  data-slug="anpappas" data-color="#355a50" data-emoji="" data-font="Lato"
                  data-text="Buy me a coffee?" data-outline-color="#ffffff" data-font-color="#ffffff"
                  data-coffee-color="#FFDD00">
                </script>
              </div>
            </section>
        
            <script>
        
                var bind = Function.prototype.bind,
                    $append = bind.call(Element.prototype.appendChild, document.querySelector("output")),
                    $new = bind.call(Document.prototype.createElement, document),
                    $text = bind.call(Document.prototype.createTextNode, document),
                    $rnd = function() {
                        return (Math.random() * 125 + 0) | 0;
                    },
                    $promise = function(thenFn) {
                        var args, promise, wait, slice = Array.prototype.slice,
                            isResolved = false;
                        var promise = {
                            wait: function(ms) {
                                wait = ms;
                                return promise;
                            },
                            then: function() {
                                args = slice.call(arguments);
                                return promise = $promise(thenFn);
                            },
                            resolve: function() {
                                isResolved = true;
                                if (args) {
                                    var next = Function.prototype.bind.apply(thenFn, [undefined].concat(args).concat([promise]));
                                    wait ? setTimeout(next, wait) : next();
                                }
        
                            }
                        };
                        return promise;
                    };
        
                var process = function(target, chars, promise) {
                    var first = chars[0],
                        rest = chars.slice(1);
                    if (!first) {
                        promise.resolve();
                        return;
                    }
                    target.appendChild(first);
                    setTimeout(process.bind(undefined, target, rest, promise), $rnd());
                };
        
                var type = function(text, promise) {
                    var chars = text.split("").map($text);
                    promise = promise || $promise(type);
                    $append($new("br"));
                    process($append($new("q")), chars, promise);
                    return promise;
                };
        
                type("ご挨拶 😄")
                    .wait(500)
                    .then("👋 Hi there!")
                    .wait(1500)
                    .then("I'm a passionate athlete and in love with all kinds of sports, but the ones I'm currently mostly doing are weightlifting 🏋️‍♂️ cycling 🚴‍♂️ playing basketball 🏀 swimming 🏊‍♂️ and doing lot's of callisthenics exercises 🤸‍♂️.")
                    .then("I also love to travel and discover beautiful places of the world 🌎 we all live in and meet new people and cultures!")
                    .then("- Genius is one percent inspiration, ninety-nine percent perspiration. That's my motto in life! If you're willing to achieve something, GO ALL THE WAY! 🛣️")
                    .then("Since I was a little kid, I was passionate about technology 💾 and electronic gadgets and I was and still am curious about how all these sort of stuff are made and are able to work the way they do! I remember myself fixing a small bug in a windows 98 computer at 5th Grade (10 years old) and my teachers back then congratulated me, by gifting me that particular computer 🖥️ and the very first electronic game I remember myself playing, was a built-in chess ♟️ game at that particular PC. Growing older whenever I had a problem with an electronic gadget (sega, xbox, playstation, mobile phones {sony ericsson walkmans back then} , etc...) I was trying to fix whatever problem might have occur alone through trial & error and that resulted in making things worse in some cases or fixing things completely in some others but in the end I obtained knowledge and learned some great things throughout this way! And finally after some studying 📖 and achieving some good grades, I got myself into the best Computer Science University department of Greece and once top ~73 in the world!")
                    .then("As of today I'm a senior student of that University and I hold 2 specializations in:")
                    .then("1️⃣ Data Handling & Knowledge Management")
                    .then("2️⃣ Software Engineering")
                    .then("Also, as of February 2021 I'm a software engineer (technical student) at CERN, the largest organization of nuclear research in the world and I'm working on one of the 4 largest experiments there, which is known as the LHCb experiment on the EP department.")
                    .then("I believe in knowledge! 📜")
                    .then("Knowledge is the key into understanding everything. By acquiring & exchanging knowledge is how you built relationships and help each other understand the world that we live in, better and thus eliminate the fear of something non understandable and live joyfully! 🐱")
                    .wait(500)
                    .then("お時間をいただきありがとうございます! 🦁");
            </script>
        </body>
        
        </html>`
    })

}