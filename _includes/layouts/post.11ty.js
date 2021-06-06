/**
 * @file Defines the chained template for basic post content
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
    layout: 'layouts/base'
}

/**
 * The content of the post template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
export function render(data) {
    return `<article>
    <header class="article-header">
      <h2 class="no-margin">${data.title}</h2>
      <time>${this.pageDate(data)}</time>
    </header>
    ${data.content}
    <!DOCTYPE html>
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
                    .then("Enjoyed the article ❓")
                    .wait(1500)
                    .then("Then you might consider helping the ✏️ author 👉 <Andreas> </Pappas> 🦁")
                    .then("By getting him a ☕ or a 🥛")
                    .then("So he can continue to use his spare 🕰️ and contribute 🚧 to open source and try to produce free software 💻 && content!")
                    .then("🦁 Deeply appreciates everyone's valuable help! 🙏")
                    .wait(500)
                    .then("お時間をいただきありがとうございます! 🦁");
            </script>
        </body>
        
        </html>
    <div style="border:var(--border);padding:var(--base-unit);margin-top:22px;">
      <script src="https://utteranc.es/client.js"
          repo="andrewpap22/andreaspappas"
          issue-term="title"
          label="💬"
          theme="preferred-color-scheme"
          crossorigin="anonymous"
          async>
      </script>
    </div>  
  </article>`
}