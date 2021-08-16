/**
 * @file Defines the chained template for the blog post welcome.11ty.js
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
    title: 'Welcome to 🦁\'s Blog',
    date: '2021-08-15',
    permalink: '/blog/welcome/',
    templateEngineOverride: '11ty.js,md',
    description: 'Not only this 🎯 post will provide usefull information about this Blog, but you can also get a 👅 taste of how it\'s functioning and looking 👀'
}

/**
 * The content of the blog post
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
export var render = data =>
`
<img src="https://4.bp.blogspot.com/-z66V0R8ulnE/XOd_Pe4tMtI/AAAAAAAAC-Q/eCrX8PBBpdUfkXljNLZ_hJsxmOrwxpLEQCK4BGAYYCw/w1200-h630-p-k-no-nu/Screenshot%2B%2528274%2529.png" alt="a funny image" style="
display: block;
margin-left: auto;
margin-right: auto;
width: 100%;
">

> <p><strong>/// NOTE❗ This will be a large post</strong></p>

_For 🌩️ fast instructions to get up and running with the project follow the 👇 README on the repo_

As mentioned in the <code>[README.md](https://github.com/andrewpap22/andreaspappas/blob/main/README.md)</code> page
of this repo, this post will serve to provide, detailed information and instructions about making this particular project your own.
i.e. modify it as you see fit, (to make it your own personal Blog or Portfolio page), learn which parts you should and shouldn't modify,
how to run and develop it locally, the prerequisites for doing so, how to deploy it using free hosting services like GitHub pages and netlify, how to
change the default domain name of those services and apply your own custom one and eventually get familiar enough with it so you could contriubute to it,
by implementing stuff from the <code>[Project Roadmap](https://github.com/andrewpap22/andreaspappas/blob/main/README.md#project-roadmap)</code>, if you feel like it! 😀

[![Netlify Status](https://api.netlify.com/api/v1/badges/33071dfc-5c6d-4963-a927-4a9f7b8cb57a/deploy-status)](https://app.netlify.com/sites/andreaspappas/deploys)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> <p><strong>😰 Stuck?</strong></p>
> <p>Try <a href="${data.pkg.bugs.url}">submitting an issue on GitHub</a> where friendly folks can try to help.</p>

## 🏇 Let's get started

But first, _let me take a selfie 🤳_

Ok no.

First of all we need to discuss about _what programs you need to have on your machine_ in order
to get this project up and running on a _Local Development Environment_.

But what is a _Local Development Environment_?

A local development environment allows you to run an _exact copy_ of a project on your own computer. And, thanks to [Git](${data.pkg.homepage}), you can sync your local copy with the published copy online too.

In other words, you—and whoever else you may want to collaborate with on your project—can break your project, then fix it, then break it some more, all on your own computer. Feel free to test and tinker to your heart’s content before ever releasing the new (and hopefully improved) version to the public.

### ⬇️ What Software Programs You will Need to Install


🦁's Blog uses a program called [Eleventy](https://11ty.dev/) (11ty) to build websites. Eleventy is a type of program known as a _static site generator_, which basically builds a fresh copy of your site everytime you save a change.
Both 🦁's Blog and Eleventy run on a program called [Node.js](https://nodejs.org/) under the hood. Node.js gives you a local _[JavaScript runtime environement](https://www.codecademy.com/articles/introduction-to-javascript-runtime-environments#:~:text=A%20runtime%20environment%20is%20where,(like%20Chrome%2C%20or%20Firefox))_, which basically means you can use software written in JavaScript on your computer.
Before programs like Node.js, JavaScript was pretty much confined to the browser. But now, thanks to Eleventy, you can use the same progmramming language to run a server, write your content, generate your site, and interact with users.

All three programs—Node.js, Eleventy, and 🦁's Blog—are _free and open source software_ (FOSS), meaning the code is publicly avaialble.
In fact, you’re encouraged to remix your own local copy, create something new and worthwhile with it, and even suggest changes to the original source code.

Before getting to the installation part, first I suggest that you try to get familiar to using the so called 😱 _Terminal_.

<img src="http://i.imgur.com/MzXZZri.gif" alt="artixDesktop" style="
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
">

### 💻 Accessing Your Terminal

Every operating system (Windows, macOS, Linux, etc.) comes with a text-based command line interface (CLI, console, or terminal) to enter commands you want your computer to run.
The CLI is a powerful tool for interacting with your personal workstation beyond the graphical user interface (GUI) with which you may be more familiar.
Of course, if you’ve ever used a computer without a mouse or touchpad, then you might feel right at _127.0.0.1_ in the command line.
Intead of “pointing and clicking” with a mouse or touchpad 🖱️, you can “talk” to your computer from your keyboard ⌨️.
Keyboard commands are a really expressive and efficient way to accomplish a lot of tasks that are often outside the reach of the GUI.

> <p>What would be easier, searching on google for a program that you might want to install and click, scroll, drag, type stuff or,</p>
> <p>simply, write a command on your terminal emulator by providing the name of the program that you want to install and let it do it's thing for you?</p>

Here’s a 📝 list of the command line tools that come preinstalled with some of the most popular operating systems:

* On 🐧 Linux, the default console is called [Terminal](https://ubuntu.com/tutorials/command-line-for-beginners).
* On 🍏 macOS, the default console is called [Terminal.app](https://support.apple.com/guide/terminal/welcome/mac).
* On 🏢 Windows, the default console has been [Command Prompt](https://support.microsoft.com/en-us/help/4027690/windows-powershell-is-replacing-command-prompt) for ages, but since Windows 10, you can now use a Linux-based tool called [Windows Terminal](https://devblogs.microsoft.com/commandline/introducing-windows-terminal/).

_If you’re on Windows, then I’ll assume you’re able to access the newer Linux-based Windows Terminal for entering commands._

### ⌨️ Entering Commands

Now that you have an idea of how useful your terminal is and how to access it, you can start learning your way around the command line interface.
Some of the most important skills to learn involve listing the contents of a folder or “directory” and moving from one directory to another.
Many commands depend on the directory in which you happen to be working at the time.
You can use the <code>ls</code> command to _list_ the files in the current “working directory.”
Likewise, you can use the <code>cd</code> command the _change_ from one directory to another:
Typing only <code>cd</code> will change to the top-level directory in your directory tree (often referred to as your _home_ 🏡 directory).
To go _down_ ⬇️ 📂 from the current directory to one inside it, you can type <code>cd</code> followed by the name of the directory you want to open.
For example, <code>cd ./Downloads</code>.
To go _up_ ⬆️ 📂 from the current directory to another one outside it, you can type <code>cd ../</code>.
This command will go up one level from the current directory, for example, from <code>Downloads</code> back up to the directory from which you just came.
You can repeat the sequence <code>../</code> as many times as you need. Say you wanted to go up two levels: you could type <code>cd ../../</code>.

Once you’re comfortable listing a directory’s contents and moving from one directory to another, you have all the basic command line skills you’ll need to start setting up your local development environment
and install all the programs via it that we'll talk from now and on finally 😶.

### ⬇️ Installing git

> **I do strongly recommend that you learn what [Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) is.**
> **Once you do that, I again strongly recommend that you learn to use and get as familiar as possible with the [git](https://git-scm.com/) version control system.**

Git is widely used and a very very very strong tool and skill for a Software Engineer (and not only) to have.
Also you'll need it to get on your machine this very project itself! 🦁

The following 2 guides are the _official_ ones and probably the best that explain simply and clearly how to get git installed,
based on the operating system that you're using.

* 1️⃣ [link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* 2️⃣ [link](https://github.com/git-guides/install-git)

#### 📚 Learning git

The following 👉 [GitHub git guide](https://github.com/git-guides/) is a really good guide to get you started into learning git and how you can combine it with a git online service like [GitHub](https://github.com/).

But, you can also use browser based online [games](https://learngitbranching.js.org/) like the one below 👇 to keep your attention a bit more while diving into the more advanced parts of it.

<div style="
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;">
        <iframe src="https://learngitbranching.js.org/" allow="fullscreen"
        style="
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        width: 100%;
        height: 100%;"></iframe>
</div>

Now that you're familiar with git and GitHub it's time to get 🦁's Blog copy from it's [repository](${data.pkg.homepage}).
Or you can fork it as well and then git clone it from your own fork.

The procedure to do so would like like this 👇 (but I'm sure at this point you already knew how to do it, it's just an excuse to use [asciinema](https://github.com/asciinema/asciinema)).

<img src="https://media.giphy.com/media/n4ARs8hjUj2x91YHmr/giphy.gif" alt="clone blog instructions gif" style="
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
">

Alright, so what's next?

### ⬇️ Getting Node.js

Now that we have cloned the project locally on our machine we need Node.js to get it running on our _Local Development Environment_.

This again depends on the operating system that you're using but you can follow the official instructions via this 👉 [link](https://nodejs.org/en/download/).

At this point I will provide some instructions that I personally know works best to get the latest stable version of Node.js and npm on Linux operating systems (whichever distribution you might be using).

> **/// NOTE❗**
> The following instructions might look a bit advanced or complicated but they're not. Read 'em and follow carefully and you should be good to go.

### ℹ️ About
nvm is a version manager for [node.js](https://nodejs.org/en/), designed to be installed per-user, and invoked per-shell. \`nvm\` works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

### ⬇️ Install & Update Script

To **install** or **update** nvm, you should run the [install script]

> $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash


> $ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

Running either of the above commands downloads a script and runs it. The script clones the nvm repository to \`~/.nvm\`,
and attempts to add the source lines from the snippet below to the correct profile file (\`~/.bash_profile\`, \`~/.zshrc\`, \`~/.profile\`, or \`~/.bashrc\`).

> ### ❗ The following is **ONE** command, copy paste it as a whole.
> $ export NVM_DIR="$([ -z "\${XDG_CONFIG_HOME-}" ] && printf %s "\${HOME}/.nvm" || printf %s "\${XDG_CONFIG_HOME}/nvm")"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

#### 🗒️ Additional Notes

* If the environment variable \`$XDG_CONFIG_HOME\` is present, it will place the \`nvm\` files there.</sub>

* You can add \`--no-use\` to the end of the above script (...\`nvm.sh --no-use\`) to postpone using \`nvm\`
until you manually \`use\` it.

* You can customize the install source, directory, profile, and version using the \`NVM_SOURCE\`, \`NVM_DIR\`, \`PROFILE\`, and \`NODE_VERSION\` variables.
Eg: \`curl ... | NVM_DIR="path/to/nvm"\`. Ensure that the \`NVM_DIR\` does not contain a trailing slash.

* The installer can use \`git\`, \`curl\`, or \`wget\` to download \`nvm\`, whichever is available.

#### 🧰 Troubleshooting on Linux

On Linux, after running the install script, if you get \`nvm: command not found\`
or see no feedback from your terminal after you type \`command -v nvm\`, simply close your current terminal,
open a new terminal, and try verifying again.
Alternatively, you can run run the following commands for the different shells on the command line:

*bash*: \`source ~/.bashrc\`

*zsh*: \`source ~/.zshrc\`

*ksh*: \`. ~/.profile\`

These should pick up the \`nvm\` command.

### ☑️ Verify Installation

To verify that nvm has been installed, do:

> $ command -v nvm

which should output \`nvm\` if the installation was successful. Please note that \`which nvm\` will not work, since \`nvm\`
is a sourced shell function, not an executable binary.

## ⬇️ Installing node with nvm

To get the latest LTS version of node and migrate your existing installed packages, use

> $ nvm install 'lts/*' --reinstall-packages-from=current

Then you should have the latest and stable version of nodejs on your system
as long as the npm package manager that comes with it.

### ✅ Verify installations:

> $ node -v

> $ npm -v

<hr>

At this point we have node on our system. It's finally time to get our project running locally.

Get into the project's directory (as showcased in the previous gif above after cloning) and then:

## ⬇️ Install the project dependencies with npm

> $ npm install

## 🏃 Run the project locally and head to the browser to view it

> $ npm run dev

Open your browser and type in the address bar:

> http://localhost:8080/

Here's a video demonstrating the above instructions:


<div style="width: 650px; margin: auto;">
  <script id="asciicast-8cZmovcbjkhmlQjttUmO1oDTI" src="https://asciinema.org/a/8cZmovcbjkhmlQjttUmO1oDTI.js" async></script>
</div>


> **Congratulations❣️** after all this 🎉 you managed to get the project running locally on your machine!

<hr>

So, we managed to install all the dependencies, learn about git, GitHub and version control and a bunch more stuff,
as well as run the project on our machines, in our Local Development Environment.

What are the next steps 👣 to take you might ask?

Well, the first thing to do is to get your hands dirty and dive into the project itself, experimenting and playing with it.
As the project is written entirely with 🍦 JavaScript, you might want to learn some of it, if not already familiar with it,
so you can swim 🏊 a little easier into the code itself. As mentioned before the project itself is hugelyy documented,
either on the GitHub repository (inside every repository you should find a seperate README.md file explaining what's important to know),
as well as the code itself contains inline documentation!

So with knowing some basics of the JavaScript programming language, reading the available documentation and playing / experimenting with the code itself
you should be good to go!

> **/// NOTE ❗** On my following 👉 [GitHub Repository](https://github.com/andrewpap22/DearJavaScript)
> you should find the basics of the JavaScript programming language, written in a tutorial-like form
> which should get you able while reading it, to get more familiar with it and learn it.
> Currently it is written in a fast pased style and it's not hugely detailed, but I do plan making it a free e-book
> for the very purpose of learning the JavaScript programming language and diving deep into it as possible
> So, stay tuned 📻 for it!

Now, as this blog post has already become huge, I want to mention fast 2 last things that you might want to do with the project.

First you might want to customize it a bit and make it more personal.
You'll have to get your hands dirty as mentioned to be able to do that, but as a fast reference you can try the following:

* 📝 Edit <code>./_data/site.json</code> with your site’s information.<br>
Don’t be scared. You can change just about any text inside single quotes without breaking anything (<code>'Safe to edit'</code>).
If you get stuck, please file an [issue on GitHub](${data.pkg.bugs.url}) where someone friendly can help.
* (Optionally) 📝 Edit <code>.eleventy.js</code> with your configuration preferences.
* ❌ Delete the contents inside the quotes after the return statement in the [/shortcdes/getting-started.js](https://github.com/andrewpap22/andreaspappas/blob/main/_includes/shortcodes/getting-started.js) file.
* Basically this is the terminal that you see on the home page. If you want to keep it but put your own information instead go down on the file and edit the text inside the <code>.then()</code> methods.
* Else, you can delete it completely and write markdown inside the backticks of the return statement or do write whatever HTML, CSS, JavaScript you want, as I've already done.

In <code>./content/pages</code> and <code>./content/posts/</code>, you can edit or delete any of the files ending with the <code>.11ty.js</code> or <code>.md</code> extensions.
To create a new page or post, I recommend copying and pasting one of these files to a new one until you get the hang of it.

To preview your changes in the browser you'll have to do run the project as we did above. (see the terminal video) 👆

> Simply run:
> $ npm run dev
> And head to **http://localhost:8080/** in your browser

For publishing your own copy of the project as well as using your own custom domain name,
I'll write detailed instructions on a separate blog post and reference it here when it's done,
as this already got huge enough.

For a fast reference you can have a look 👉 [here](https://github.com/andrewpap22/andreaspappas#-publish-your-own-copy-of-the-project)

Or use the following button 👇 which will create a fork of the repository on your own GitHub profile and publish that fork directly to your netlify account to which you will have to login via your GitHub profile.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/andrewpap22/andreaspappas)

`

/**
 * <!--
Note to myself:

How to make responsive iframes:

<div class="resp-container" style="position: relative;
 overflow: hidden;
 padding-top: 56.25%;">
    <iframe class="resp-iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" gesture="media"  allow="encrypted-media" allowfullscreen style="position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;"></iframe>
 </div>
-->
*/
