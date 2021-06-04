/**
 * @file Defines the chained template for the blog post
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
    title: '💻 Build Artix Linux step by step. 👣',
    date: '2021-06-04',
    permalink: '/blog/artix-linux/',
    templateEngineOverride: '11ty.js,md',
    description: 'Get a better 👅 taste of the UNIX operating systems by building one on your own! 😎'
}

/**
 * The content of the blog post
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
export var render = data =>
    `Greetings, in this very first article of mine, I will try to showcase how to install an Arch like Linux distribution, in particular, [Artix Linux](https://artixlinux.org/) aka **The Art Of Linux** from scratch. (i.e. from a base .iso image)
    I will try to explain everything that is non trivial without getting into much depth. For that you can always reference the [Artix wiki](https://wiki.artixlinux.org/). 
    
    *The purpose of this article is to get your hands dirty, on trying and experimenting with installing a Linux Distribution from scratch and thus get a better understanding of the beauty of UNIX operating systems, in particular Linux and also get a better understanding on how operating systems work behind the scenes. (We're not going to do an Operating Systems computer science course here and of course we're not gonna use C to modify or even write a Linux kernel here, but you will get the point later on...)*
    
    As this is a minimal Linux installation, I've kept this article minimal as well. (i.e. without any pictures (except the one below ^.-)). The reason for that being is, that you need to dive in, reading carefully what's going on and experiment in your own machine and not simply follow an image slideshow and copy paste some commands. If you fail your very first installation that's totally perfect. Everyone fails! Get your hands dirty and try all over again, fail again and try again. That is exactly how it will stick to your brain and thus you'll gain the knowledge! 
    
    > I will also showcase at the end of this article how to install a bootstrapping script for those who want a *ready to go* graphical environment after a minimal / base Linux installation. 
    
    ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6tjhaau67o7bxof2rttl.png)
    
    ## And the journey begins... 
    
    So, first thing to do is go to Artix Linux Download page and choose a base install .iso image. (since we want to build it from scratch). ~> [link](https://artixlinux.org/download.php)
    You could also select an image with an already installed desktop environment, but we're not going to do that here. 
    
    There are 3 base images to download: 
     1. openrc
     2. runit
     3. s6 
    
    And basically those are 3 different init systems of the Artix distribution. (you can find more info on the Artix wiki)
    
    Once we download an image, we then want to put it onto a usb drive and make it bootable. 
    If we open a tty (terminal) and run in: 
    
    <pre><code>
        $ lsblk
    </code></pre>
    
    We should see the hard drives that we already have in our system. After we can put into our computer the usb stick and run again the same command to find out how is our system labeling the usb stick. Usually it's something like <code>sd</code> followed by another letter. So for example, our main hard drive would have the label of <code>sda</code> and when we put into our usb then it might be named <code>sdb</code>. And so it's file location should then be: <code>/dev/sdb</code>. To make sure we can also check the capacity of each drive. 
    
    Now, once we make sure that we have recognized which is our usb drive, then we want to make it bootable with our .iso image. 
    To do that, we first need sudo privileges and then we can run the following command: 
    
    <code>
    $ dd if=our_iso_image_here.iso of=output_file_to_write_the_image status='progress' #if we want to see a progress bar
    
    # so an example of the above explanation: 
    
    $ dd if=arix-base-runnit-20200214-x86_64.iso of=/dev/sdb status='progress'
    </code>
    
    And now we have a bootable usb stick with the Artix runnit image and we can boot from it from our computer and begin the installation. 
    
    
    First, we have to login as root and the credentials for that are: 
    
    <pre><code>
        Username: root
        Password: artix
    </code></pre>
    
    Or we could login as the artix user and then do: <code>sudo su</code>
    
    <pre><code>
        Username: artix
        Password: artix
    </code></pre>
    
    
    So once we have done that, we first have to make sure if our computer is running <code>UEFI</code> or <code>Legacy Boot</code>.
    Most new machines will have uefi but to make 100% sure we should run the following command: 
    
    <pre><code>
        $ ls /sys/firmware/efi/efivars
    </code></pre>
    
    **If you SEE stuff come up then the computer is using UEFI**
    **If you DON'T see stuff come up then the computer is using Legacy Boot**
    
    So if you get something like: ls: cannot access <code> / sys / firmware / efi / efivars </code>: No such file or directory, then **YOU ARE NOT** using UEFI. 
    
    
    At this point we need to make sure that we are connected to the internet! Strongly recommended to be hooked via ethernet cable, but in case you don't have one you can use the command: <code>
iwd </code> to be connected to a wifi network and it should come already pre-installed on the iso image. 
    
    To check if you have internet connection, you can ping a website like: 
    

<pre><code>
    $ ping artixlinux.org 
</code></pre>
    
    and it should return responses and thus that mean you're connected to the internet.
    
    Now by running <code>
lsblk </code> we should find the hard drive of the computer that we want to install the Artix Linux on. Again we can recognize it by it's capacity size. 
    
    Once we find it we should run the following command to begin the disk partitioning. 
    
<pre><code>
    $ fdisk / dev / sda

    # / dev / sda is the(example) disk that we want to install Artix on 
</code></pre>    
    
    In our example guide here, we're going to delete EVERYTHING from the hard drive and partition everything from scratch, but you could if you want keep your home partition (if you haven't backed it up) and just create in the next steps the root and the boot partition. 
    
    Now, after executing the <code>
fdisk </code> command a prompt will come up asking us which partitions we want to delete. 
    If we simply type in: <code>
d </code>, it will delete the default partition mentioned inside the parenthesis and then we should type in <code>
d </code> 2 more times to delete the remaining partitions as well. 
    
    If we type in: <code>
p </code> at any given time it should display us our partitions. Of course if we delete them all we won't have any. 
    
    Now we're going to make our new partitions. 
    
    First type in: <code>
n </code> to start creating a new partition. 
    
    The first partition that we always want to make is the **boot** partition. 
    First it asks for partition number ~> **<code>
just press enter without typing anything </code>**
    Then it asks for first sector ~> **<code>
again simply press enter without typing anything <.code>**
    And now it asks for the Last sector and how big you want it to be, usually here people give 512M but we're going to give 1G, so we just have to type in: <code> + 1 G </code>.
    
    Then it will ask us if we want to remove a signature. If the disk you're installing in was empty from the beginning just press no, but if it contained something before and you're re-partitioning it, you gotta type in: <code>
Y </code>. 
    
    Now, if we press <code>
p </code> we can view the partition we just created. 
    
    Next, we're going to make 2 more partitions. 
    
    The next one is the **root** partition.
    
    So, we first type in <code>
n </code> to make a new partition, then on partition number and first sector we simply press enter without typing anything and on the last sector which asks the size of the root partition, we're going to give ~> **<code> + 40 G </code>**.
    
    Now, it might or might not ask again to remove the signature and the same thing as mentioned above applies. 
    
    Now, we're going to create our 3rd and last partition which is our home partition. 
    
    So, again type in <code>
n </code> and press <code>
enter </code> 3 times and then it will automatically fill the rest of the space for the home partition and at this point if we press <code>
p </code> we can see the 3 partitions we created. 
    
    And now we can type in: **<code>
w </code>** to write the newly created partitions and now we have an empty hard drive with the 3 partitions we created and we should be back to the shell logged in as root. 
    
    Now, we can type in <code>
lsblk </code> and see our hard drive and the partitions that we formated with their respective sizes. 
    
    The next thing we want to do is start putting file systems on these partitions so we can put files on them. (note that everything in linux works with files)
    
    So now we will start by making our home partition and that should be: <code> / dev / sda3 </code> to be in ext4 file system format. 
    To do that, type in: 
    
<pre><code>
    $ mkfs.ext4 / dev / sda3 
</code></pre>
    
    **Important note**: we're going to format everything in this particular guide in an ext4 file system format, BUT if you're using an UEFI system (you can find that out by the command we run above) then you want to format the BOOT partition in <code>
fat </code> file system format and then the home, root partitions in ext4. 
    But in our case we're going to follow the Legacy boot system and we're going to format all the 3 partitions in ext4 file system format. 
    
    Alright, and now it will take a while and once finished then we can make the root partition to be in ext4 file system format by running: 
    
    

<pre><code>
    $ mkfs.ext4 / dev / sda2 
</code></pre>
    
    And once that is finished as well we're going to do the same for our boot partition by running: 
    

<pre><code>
    $ mkfs.ext4 / dev / sda1 
</pre></code>
    
❗❗ If you're using UEFI then to format your boot partition in fat file system format you can use: 
    
    

<pre><code>
    $ mkfs.fat - F32 / dev / sda1 
</code></pre>
    
    And now we're done creating our file systems on our partitions and we're ready to start adding files on them!
    
    And so now basically we're going to mount our partitions the way we want them to be mounted and then install our operating system which is basically one command and after that we're going to make a couple of changes and we're done! 
    
    Now, we first want to take the <code>
root </code> partition and mount it to <code> /mnt </code> 
    To do that we run: 
    

<pre><code>
    $ mount / dev / sda2 / mnt 
</code></pre>
    
    And now we're going to make 2 directories inside /mnt, one for the home and on for the boot partitions. 
    

<pre><code>
    $ mkdir / mnt / home
    $ mkdir / mnt / boot 
</code></pre>
    
    And now we can mount our other 2 partitions. 
    
<pre><code>
    $ mount / dev / sda1 / mnt / boot
    $ mount / dev / sda3 / mnt / home 
</code></pre>
    
    And now we can run <code>
lsblk </code> and we'll see our partitions mounted to where we mounted them. (basically where it's supposed to be mounted)
    
    And now basically we're ready to install our operating system, and we will do that with the following command in which basically we're going to tell it where exactly to install the operating system and then we're going to tell it what exactly we want to install. (remember that you should be connected to the internet)
    Note that the below command is for the runit init system of the Artix Linux. You will need to install different things for s6 or openrc. (Head to the installation guide on artix linux wiki to find out what should be done)
    
<pre><code>
    $ basestrap / mnt base base - devel runit elogind - runit linux linux - firmware vim curl gcc git # and basically whatever other program you want here to be installed.
</code></pre>
    
    And now once the above command is done, we basically have an operating system installed on our hard drive, but we can't boot to it because we haven't set yet a bootloader and a couple of other things, so we're going to first set a bootloader. 
    
    So basically when we reboot our computer it we need to tell it in what ourder our moun points should be. i.e. in simple manners the boot partition to the boot mounting point, the home partition to the home mounting point etc... 
    
    So, if we run: 
    
<pre><code>
    $ fstabgen /mnt
</code></pre>
    
    We will see where everything should be mounted. 
    Now we want to give a couple of options to this command: 
    

<pre><code>
    $ fstabgen - U / mnt >> /mnt/etc / fstab
</code></pre>
    
    What <code> - U </code> tells it it's that it should read the partitions based on their UUID and not on the sda,sdb,sdc letters because those might be different on different computers but their UUID's are unique and so we definetely want it to be like that, and then we append that to the fstab file in the /etc so each time we reboot the computer knows where everything is mounted when it boots again. 
    
    And now we need to run the following command, and basically we then should be inside the actual installed operating system and not on the bootable usb drive. 
    

<pre><code>
    $ artix - chroot /mnt
</code></pre>     
    
    Probably we'll get prompted to the default shell which is sh but if we run: <code>
bash </code> we should get to the bash shell with all it's features etc...
    
    Now, what we want to do is edit the mirrorlist file and basically what we want to do in that file is move on top of the file the mirrors which are closer to the country we live in. (simply for better pings and ms and so on...)
    To do that: 
    
<pre><code>
    $ vim / etc / pacman.d / mirrorlist
</code></pre>
    
    Now we might want to set our local time zone. 
    To do that we'll create a simlink to the /etc/localtime and the command for that is: 
    
<pre><code>
    $ ln - sf / usr / share / zoneinfo / your_time_zone_here / etc / localtime 
</code></pre>
    
    And now if we run: 
    
<pre><code>    
    $ ls - l / etc / localtime
</code></pre>
    
    It will display our local time, actually where we set our system to be located...
    
    And we might also want to update our hardware clock to be in sync with what we set above.. 
    
<pre><code>
    $ hwclock--systohc
</code></pre>
    
    And now we're going to open up the following file: 
    
    
<pre><code>
    $ vim / etc / locale.gen 
</code></pre>
    
    To set our system and keyboard main language. 
    How? 
    Simply uncomment the one that corresponds to your language, for example en_US (both UTF-8 and ISO)
    
    And then you save the file and run: 
    
<pre><code>
    $ locale - gen 
</code></pre>
    
    And then we're going to create a new file: 
    
<pre><code>
    $ vim / etc / locale.conf
</code></pre>
    
    And basically you want to type in: <code>
LANG = en_US.UTF - 8 </code> and then save the file.
    
    And now we're going to install some essential packages. 
    
    
<pre><code>
    $ pacman - S networkmanager networkmanager - runit
</code></pre>
    
    Now we want to tell Artix to start network manager every time we boot up. (This again will be different for runit, s6, openrc)
    
    To do that: 
    
    
<pre><code>
    $ ln - s / etc / runit / sv / NetworkManager / etc / runit / runsvdir /
    default /
</code></pre>
    
    And basically that's how you tell runit to automatically start a service every time you boot up. 
    Also, inside the directory ~> <code> / etc / runit / sv / </code> you can find all the services that you can tell runit to start automatically on boot and that's where the NetworkManager is located. 
    
    **Important note** Actually the only time that you link a service to the <code> / etc / runit / runsvdir /
    default / </code> is on the very first installation time as we're doing right now. BUT, you should from the moment the system is installed and on to simlink services only to the: **<code> / run / runit / service </code>**!!! 
    
    Now, we want to edit the following: 
    
<pre><code>
    $ vim / etc / hostname
</code></pre>
    
    And basically we add on the 1st line (the file should be empty) the name of the computer that we want it to have. ex: <code>
desktop </code>
    
    Save the file and then edit: 
    
<pre><code>
    $ vim / etc / hosts
</code></pre>
    
    And add in there the following lines: 
    (you can find more info on the details on the Artix wiki installation guide)
    
<pre><code>
    127.0 .0 .1 localhost
    ::1 localhost
    127.0 .0 .1 desktop.localdomain desktop # < ~desktop is the name we gave to our computer in the hostname file.
</code></pre>
    
    Save the file. 
    
    And now finally we're going to make our machine bootable by installing a bootloader. 
    
    i.e. grub in this particular guide but you can choose any bootloader that you like. 
    
<pre><code>
    $ pacman - S grub

    # note here that
    if you want to sometime do a dual boot on your machine you need to install the program: os - prober as well.
    # also
    if you run UEFI instead of Legacy Boot you need to install as well: efibootmgr
</code></pre>
    
    Now we need to set up grub (this command will again be different for UEFI vs Legacy Boot)
    
    For Legacy Boot: 
    
<pre><code>
    $ grub - install--target = i386 - pc / dev / sda # < ~your hard drive that you 're installing the system, check with: lsblk
</code></pre>
    
    For UEFI: 
    
<pre><code>
    $ grub - install--target = x86_64 - efi--efi - directory = /boot --bootloader-id=GRUB
</code></pre>
    
    ### Dual boot with windows 10 (optional)
    
    > at this point I want to add a couple of steps in case you want to dual boot your artix (arch) linux installation with windows 10. 
    
    **It is a prerequisite that you have already installed windows 10 in a separate partition from our above 3 created Linux partitions BEFORE starting the Linux installation.**
    
    So for example you could have a /dev/sda4 partition with windows 10 installed in it. 
    
    > It's best practice when you want to dual boot, to first install Windows 10 on your empty disk drive and then allocate from inside windows some free space for your Linux installation.
    
    But, if you had already Linux installed, then it's still possible to do the dual boot. First backup your /home directory to an external hard disk drive by providing the following command: 
    
<pre><code>
  $ rsync - a--delete--quiet--progress / path / to / backup / location / of /backup
</code></pre>
    
    **-a**, indicates that files should be archived, meaning that most of their characteristics are preserved (but not ACLs, hard links or extended attributes such as capabilities)
    
    **--delete**, means files deleted on the source are to be deleted on the backup as well
    
    > Here, /path/to/backup should be changed to what needs to be backed-up (e.g. /home) and /location/of/backup is where the backup should be saved (e.g. /media/disk).
    
    And after doing so you should then boot with your bootable artix usb stick and delete the /home partition with <code>
fdisk </code> so you can create some free space for your windows 10 installation. After deleting the /home partition, you should have some empty free space of some GB's and you can create 2 new primary partitions as we did above, 1 for the new /home directory for Linux and the other 1 for the Windows installation. So assuming that the 4th partition is named <code> / dev / sda4 </code> (you know now how to find that), you should boot from your Windows 10 bootable usb stick and install Windows on that particular partition. After doing so, windows will take over Grub so you want be able to see your Linux installation and your computer will automatically boot to windows, now is the time to use your Linux bootable usb stick again and follow the procedure of the Linux installation of this article from the beginning (deleting the 1,2,3 partitions and re-creating them again without touching at all the partition 4 (which is the windows one) and then follow the following 3 last commands and you will have both operating systems on your machine). Then you can use your /home backup to bring everything back on your Linux installation.
    
    As mentioned above, if you want to dual boot any arch distribution with any other operating system, you need the program: **os-prober**. You can install it either earlier when we installed our base programs with basestrap or even at this point we're right now by typing: 
    
<pre><code>
    $ pacman - S os - prober
</code></pre>
    
    **!!!** NOTE, there is a case that os-prober might not detect your Windows 10 installation automatically (in our next steps), so for it to do so you need to install as well the following program as well: 
    
<pre><code>
    $ pacman - S ntfs - 3 g 
</code></pre>
    
    Now, at this point if we run the command 
    
<pre><code>
    $ os - prober
</code></pre>
    
    We should see that it detects our Windows 10 installation on your 4th partition and then after generating the grub configuration file with the below command we should see that it contains our Linux installation and our Windows installation and we're good to go! 
    
    If we reboot now, we should see grub with our Linux, Windows installations!
    
<pre><code>
    $ grub - mkconfig - o / boot / grub / grub.cfg
</code></pre>
    
    And last thing to do is to set up a password! 
    
<pre><code>
    $ passwd
</code></pre>

    And at this point we're done and you just managed to install Artix linux from scratch, congratulations! 
    
    Now... after all this work your face should be like ~> 😑 
    Because you'll find out that you booted up and you just have a plain dark tty (terminal). 
    But! That is exactly the magic of installing a linux operating system without a pre-installed desktop environment and have all the setup we did above be made automatically by the image, just to get a better understanding of what's exactly going on behind and the scenes and thus have a better "connection" with your own machine that you built from scratch (well not 100% from scratch, because obviously you didn't write all the C code of all the commands that we run and of course we already had a ready Artix Linux distribution image and thus a linux kernel, so the whole Kernel is written by someone else, but yeah you get the point...)
    
    And now what? Are we stuck with a plain tty? 
    
    Well, no if we don't want to. We can now start installing a graphical environment or our own window manager and our preferable shell and a display manager (login screen) and basically whatever else program you want or even a desktop environment with those pre-installed just to learn how to play with them and how they operate and to be able to configure everything yourself and that's exactly the magic of Linux!  
    
    
    Or at this point you could even run a bootstrapping script that someone else has written and basically what this is, it's a shell script that installs automatically everything that is mentioned in the above lines + some extra configurations of the person that wrote the script + their dotfiles and so on... 
    Basically this will get you up and running with a complete graphical environment, but of course with configurations of that person that you'll have to learn how to use or modify them to your liking. 
    
    I'll provide right here a script that I personally really like as promised in the beginning of this article, and it's called LARBS and it is written by [Luke Smith](https://lukesmith.xyz/). 
    You can find information on installation and more ~> [here.](https://larbs.xyz/)
    
    Basically, after you're done with the Artix installation you simply run the below commands and follow the UI and you'll have your fully nice and ready to go operating system with all the functionalities and configurations and programs that Luke had in his bootstrapping script! Of course you're free to change everything (recommended) to your liking or learn to use his system if you like it and keep it as is. 
    
<pre><code>
    # should be run as root

    $ curl - LO larbs.xyz / larbs.sh
    $ bash larbs.sh 
</pre></code>
    
    or: 
    
<pre><code>
    $ git clone https: //github.com/LukeSmithxyz/LARBS.git
    $ cd LARBS /
    $. / larbs.sh
</code></pre>
    
------------------------------------------------------------
    
*Author: [Andreas Pappas](https://andrewpap22.github.io/)*
    
------------------------------------------------------------
    
Thank you! 🙏`