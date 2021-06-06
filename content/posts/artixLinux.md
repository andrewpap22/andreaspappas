---
title: 💻 Build Artix Linux step by step. 👣
weight: 1
tags: unix, artix, arch
permalink: '/blog/artixLinux/'
description: Get a better 👅 taste of the UNIX operating systems by building one on your own! 😎
---

Greetings, in this very first article of mine, I will try to showcase how to install an Arch like Linux distribution, in particular, [Artix Linux](https://artixlinux.org/) aka `The Art Of Linux` from scratch. (i.e. from a base .iso image)
I will try to explain everything that is non trivial without getting into much depth. For that you can always reference the [Artix wiki](https://wiki.artixlinux.org/). 

*The purpose of this article is to get your hands dirty, on trying and experimenting with installing a Linux Distribution from scratch and thus get a better understanding of the beauty of UNIX operating systems, in particular Linux and also get a better understanding on how operating systems work behind the scenes. (We're not going to do an Operating Systems computer science course here and of course we're not gonna use C to modify or even write a Linux kernel here, but you will get the point later on...)*

As this is a minimal Linux installation, I've kept this article minimal as well. (i.e. without any pictures (except the one below ^.-)). The reason for that being is, that you need to dive in, reading carefully what's going on and experiment in your own machine and not simply follow an image slideshow and copy paste some commands. If you fail your very first installation that's totally perfect. Everyone fails! Get your hands dirty and try all over again, fail again and try again. That is exactly how it will stick to your brain and thus you'll gain the knowledge! 

> I will also showcase at the end of this article how to install a bootstrapping script for those who want a *ready to go* graphical environment after a minimal / base Linux installation. 

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6tjhaau67o7bxof2rttl.png" alt="artixDesktop" style="width:100%; height:auto;">

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

```bash
$ lsblk
```

We should see the hard drives that we already have in our system. After we can put into our computer the usb stick and run again the same command to find out how is our system labeling the usb stick. Usually it's something like `sd` followed by another letter. So for example, our main hard drive would have the label of `sda` and when we put into our usb then it might be named `sdb`. And so it's file location should then be: `/dev/sdb`. To make sure we can also check the capacity of each drive. 

Now, once we make sure that we have recognized which is our usb drive, then we want to make it bootable with our .iso image. 
To do that, we first need sudo privileges and then we can run the following command: 

```bash
$ dd if=our_iso_image_here.iso of=output_file_to_write_the_image status='progress' #if we want to see a progress bar

# so an example of the above explanation: 

$ dd if=arix-base-runnit-20200214-x86_64.iso of=/dev/sdb status='progress'
```

And now we have a bootable usb stick with the Artix runnit image and we can boot from it from our computer and begin the installation. 


First, we have to login as root and the credentials for that are: 

```
Username: root
Password: artix
```

Or we could login as the artix user and then do: `sudo su`

```
Username: artix
Password: artix
```


So once we have done that, we first have to make sure if our computer is running `UEFI` or `Legacy Boot`.
Most new machines will have uefi but to make 100% sure we should run the following command: 

```bash
$ ls /sys/firmware/efi/efivars
```

**If you SEE stuff come up then the computer is using UEFI**
**If you DON'T see stuff come up then the computer is using Legacy Boot**

So if you get something like: ls: cannot access `/sys/firmware/efi/efivars`: No such file or directory, then **YOU ARE NOT** using UEFI. 


At this point we need to make sure that we are connected to the internet! Strongly recommended to be hooked via ethernet cable, but in case you don't have one you can use the command: `iwd` to be connected to a wifi network and it should come already pre-installed on the iso image. 

To check if you have internet connection, you can ping a website like: 

```bash
$ ping artixlinux.org
```

and it should return responses and thus that mean you're connected to the internet.

Now by running `lsblk` we should find the hard drive of the computer that we want to install the Artix Linux on. Again we can recognize it by it's capacity size. 

Once we find it we should run the following command to begin the disk partitioning. 

```bash
$ fdisk /dev/sda

# /dev/sda is the (example) disk that we want to install Artix on
```

In our example guide here, we're going to delete EVERYTHING from the hard drive and partition everything from scratch, but you could if you want keep your home partition (if you haven't backed it up) and just create in the next steps the root and the boot partition. 

Now, after executing the `fdisk` command a prompt will come up asking us which partitions we want to delete. 
If we simply type in: `d`, it will delete the default partition mentioned inside the parenthesis and then we should type in `d` 2 more times to delete the remaining partitions as well. 

If we type in: `p` at any given time it should display us our partitions. Of course if we delete them all we won't have any. 

Now we're going to make our new partitions. 

First type in: `n` to start creating a new partition. 

The first partition that we always want to make is the **boot** partition. 
First it asks for partition number ~> **`just press enter without typing anything`**
Then it asks for first sector ~> **`again simply press enter without typing anything`**
And now it asks for the Last sector and how big you want it to be, usually here people give 512M but we're going to give 1G, so we just have to type in: `+1G`.

Then it will ask us if we want to remove a signature. If the disk you're installing in was empty from the beginning just press no, but if it contained something before and you're re-partitioning it, you gotta type in: `Y`. 

Now, if we press `p` we can view the partition we just created. 

Next, we're going to make 2 more partitions. 

The next one is the **root** partition.

So, we first type in `n` to make a new partition, then on partition number and first sector we simply press enter without typing anything and on the last sector which asks the size of the root partition, we're going to give ~> **`+40G`**.

Now, it might or might not ask again to remove the signature and the same thing as mentioned above applies. 

Now, we're going to create our 3rd and last partition which is our home partition. 

So, again type in `n` and press `enter` 3 times and then it will automatically fill the rest of the space for the home partition and at this point if we press `p` we can see the 3 partitions we created. 

And now we can type in: **`w`** to write the newly created partitions and now we have an empty hard drive with the 3 partitions we created and we should be back to the shell logged in as root. 

Now, we can type in `lsblk` and see our hard drive and the partitions that we formated with their respective sizes. 

The next thing we want to do is start putting file systems on these partitions so we can put files on them. (note that everything in linux works with files)

So now we will start by making our home partition and that should be: `/dev/sda3` to be in ext4 file system format. 
To do that, type in: 

```bash
$ mkfs.ext4 /dev/sda3
```

**Important note**: we're going to format everything in this particular guide in an ext4 file system format, BUT if you're using an UEFI system (you can find that out by the command we run above) then you want to format the BOOT partition in `fat` file system format and then the home, root partitions in ext4. 
But in our case we're going to follow the Legacy boot system and we're going to format all the 3 partitions in ext4 file system format. 

Alright, and now it will take a while and once finished then we can make the root partition to be in ext4 file system format by running: 

```bash
$ mkfs.ext4 /dev/sda2
```

And once that is finished as well we're going to do the same for our boot partition by running: 


```bash
$ mkfs.ext4 /dev/sda1
```

**!!** If you're using UEFI then to format your boot partition in fat file system format you can use: 

```bash
$ mkfs.fat -F32 /dev/sda1
```

And now we're done creating our file systems on our partitions and we're ready to start adding files on them!

And so now basically we're going to mount our partitions the way we want them to be mounted and then install our operating system which is basically one command and after that we're going to make a couple of changes and we're done! 

Now, we first want to take the `root` partition and mount it to `/mnt` 
To do that we run: 

```bash
$ mount /dev/sda2 /mnt
```

And now we're going to make 2 directories inside /mnt, one for the home and on for the boot partitions. 

```bash
$ mkdir /mnt/home
$ mkdir /mnt/boot
```

And now we can mount our other 2 partitions. 

```bash
$ mount /dev/sda1 /mnt/boot
$ mount /dev/sda3 /mnt/home
```

And now we can run `lsblk` and we'll see our partitions mounted to where we mounted them. (basically where it's supposed to be mounted)

And now basically we're ready to install our operating system, and we will do that with the following command in which basically we're going to tell it where exactly to install the operating system and then we're going to tell it what exactly we want to install. (remember that you should be connected to the internet)
Note that the below command is for the runit init system of the Artix Linux. You will need to install different things for s6 or openrc. (Head to the installation guide on artix linux wiki to find out what should be done)

```bash
$ basestrap /mnt base base-devel runit elogind-runit linux linux-firmware vim curl gcc git # and basically whatever other program you want here to be installed.
```

And now once the above command is done, we basically have an operating system installed on our hard drive, but we can't boot to it because we haven't set yet a bootloader and a couple of other things, so we're going to first set a bootloader. 

So basically when we reboot our computer it we need to tell it in what ourder our moun points should be. i.e. in simple manners the boot partition to the boot mounting point, the home partition to the home mounting point etc... 

So, if we run: 

```bash
$ fstabgen /mnt
```

We will see where everything should be mounted. 
Now we want to give a couple of options to this command: 

```bash
$ fstabgen -U /mnt >> /mnt/etc/fstab
```

What `-U` tells it it's that it should read the partitions based on their UUID and not on the sda,sdb,sdc letters because those might be different on different computers but their UUID's are unique and so we definetely want it to be like that, and then we append that to the fstab file in the /etc so each time we reboot the computer knows where everything is mounted when it boots again. 

And now we need to run the following command, and basically we then should be inside the actual installed operating system and not on the bootable usb drive. 

```bash
$ artix-chroot /mnt
```

Probably we'll get prompted to the default shell which is sh but if we run: `bash` we should get to the bash shell with all it's features etc...

Now, what we want to do is edit the mirrorlist file and basically what we want to do in that file is move on top of the file the mirrors which are closer to the country we live in. (simply for better pings and ms and so on...)
To do that: 

```bash
$ vim /etc/pacman.d/mirrorlist
```

Now we might want to set our local time zone. 
To do that we'll create a simlink to the /etc/localtime and the command for that is: 

```bash
$ ln -sf /usr/share/zoneinfo/your_time_zone_here /etc/localtime
```

And now if we run: 

```bash
$ ls -l /etc/localtime
```

It will display our local time, actually where we set our system to be located...

And we might also want to update our hardware clock to be in sync with what we set above.. 

```bash
$ hwclock --systohc
```

And now we're going to open up the following file: 


```bash
$ vim /etc/locale.gen
```

To set our system and keyboard main language. 
How? 
Simply uncomment the one that corresponds to your language, for example en_US (both UTF-8 and ISO)

And then you save the file and run: 

```bash
$ locale-gen
```

And then we're going to create a new file: 

```bash
$ vim /etc/locale.conf
```

And basically you want to type in: `LANG=en_US.UTF-8` and then save the file.

And now we're going to install some essential packages. 


```bash
$ pacman -S networkmanager networkmanager-runit 
```

Now we want to tell Artix to start network manager every time we boot up. (This again will be different for runit, s6, openrc)

To do that: 


```bash
$ ln -s /etc/runit/sv/NetworkManager /etc/runit/runsvdir/default/
```

And basically that's how you tell runit to automatically start a service every time you boot up. 
Also, inside the directory ~> `/etc/runit/sv/` you can find all the services that you can tell runit to start automatically on boot and that's where the NetworkManager is located. 

**Important note** Actually the only time that you link a service to the `/etc/runit/runsvdir/default/` is on the very first installation time as we're doing right now. BUT, you should from the moment the system is installed and on to simlink services only to the: **`/run/runit/service`**!!! 

Now, we want to edit the following: 

```bash
$ vim /etc/hostname
```

And basically we add on the 1st line (the file should be empty) the name of the computer that we want it to have. ex: `desktop`

Save the file and then edit: 

```bash
$ vim /etc/hosts
```

And add in there the following lines: 
(you can find more info on the details on the Artix wiki installation guide)

```
127.0.0.1    localhost
::1          localhost
127.0.0.1    desktop.localdomain desktop # <~ desktop is the name we gave to our computer in the hostname file.
```

Save the file. 

And now finally we're going to make our machine bootable by installing a bootloader. 

i.e. grub in this particular guide but you can choose any bootloader that you like. 

```bash
$ pacman -S grub 

# note here that if you want to sometime do a dual boot on your machine you need to install the program: os-prober as well.
# also if you run UEFI instead of Legacy Boot you need to install as well: efibootmgr
```

Now we need to set up grub (this command will again be different for UEFI vs Legacy Boot)

For Legacy Boot: 

```bash
$ grub-install --target=i386-pc /dev/sda # <~ your hard drive that you're installing the system, check with: lsblk
```

For UEFI: 

```bash
$ grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

### Dual boot with windows 10 (optional)

> at this point I want to add a couple of steps in case you want to dual boot your artix (arch) linux installation with windows 10. 

**It is a prerequisite that you have already installed windows 10 in a separate partition from our above 3 created Linux partitions BEFORE starting the Linux installation.**

So for example you could have a /dev/sda4 partition with windows 10 installed in it. 

> It's best practice when you want to dual boot, to first install Windows 10 on your empty disk drive and then allocate from inside windows some free space for your Linux installation.

But, if you had already Linux installed, then it's still possible to do the dual boot. First backup your /home directory to an external hard disk drive by providing the following command: 

```bash
$ rsync -a --delete --quiet --progress /path/to/backup /location/of/backup
```

**-a**, indicates that files should be archived, meaning that most of their characteristics are preserved (but not ACLs, hard links or extended attributes such as capabilities)

**--delete**, means files deleted on the source are to be deleted on the backup as well

> Here, /path/to/backup should be changed to what needs to be backed-up (e.g. /home) and /location/of/backup is where the backup should be saved (e.g. /media/disk).

And after doing so you should then boot with your bootable artix usb stick and delete the /home partition with `fdisk` so you can create some free space for your windows 10 installation. After deleting the /home partition, you should have some empty free space of some GB's and you can create 2 new primary partitions as we did above, 1 for the new /home directory for Linux and the other 1 for the Windows installation. So assuming that the 4th partition is named `/dev/sda4` (you know now how to find that), you should boot from your Windows 10 bootable usb stick and install Windows on that particular partition. After doing so, windows will take over Grub so you want be able to see your Linux installation and your computer will automatically boot to windows, now is the time to use your Linux bootable usb stick again and follow the procedure of the Linux installation of this article from the beginning (deleting the 1,2,3 partitions and re-creating them again without touching at all the partition 4 (which is the windows one) and then follow the following 3 last commands and you will have both operating systems on your machine). Then you can use your /home backup to bring everything back on your Linux installation.

As mentioned above, if you want to dual boot any arch distribution with any other operating system, you need the program: **os-prober**. You can install it either earlier when we installed our base programs with basestrap or even at this point we're right now by typing: 

```bash
$ pacman -S os-prober
``` 

**!!!** NOTE, there is a case that os-prober might not detect your Windows 10 installation automatically (in our next steps), so for it to do so you need to install as well the following program as well: 

```bash
$ pacman -S ntfs-3g
```

Now, at this point if we run the command 

```bash
$ os-prober
```

We should see that it detects our Windows 10 installation on your 4th partition and then after generating the grub configuration file with the below command we should see that it contains our Linux installation and our Windows installation and we're good to go! 

If we reboot now, we should see grub with our Linux, Windows installations!

```bash
$ grub-mkconfig -o /boot/grub/grub.cfg
``` 

And last thing to do is to set up a password! 

```bash
$ passwd 
```

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

```bash
# should be run as root

$ curl -LO larbs.xyz/larbs.sh
$ bash larbs.sh
```

or: 

```bash
$ git clone https://github.com/LukeSmithxyz/LARBS.git
$ cd LARBS/ 
$ ./larbs.sh
```