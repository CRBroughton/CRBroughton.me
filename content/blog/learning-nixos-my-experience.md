---
title: Learning Nix(OS) - My Experience
date: '2026-03-11'
published: true
description: I've dived down a bit of a rabbit hole over the last few months, and I'm coming back out to talk about my new lord and saviour, Nix.
tags: [Nix, NixOS, Linux]
---

I've dived down a bit of a rabbit hole over the last few months, and I'm coming back out to talk about my new lord and saviour, [Nix](https://nixos.org/) (and more recently, [NixOS](https://nixos.org/)).

If you're like me, and you love to tinker with software, you've probably found yourself running some variant of Linux at some point in your life. I've gone through a typical journey: rocking vanilla [Ubuntu](https://ubuntu.com/) and [Kubuntu](https://kubuntu.org/), migrating over to [Pop!_OS](https://system76.com/pop/) for a few years and finding a home there, and ultimately finding myself wanting something more.

I've also had a parallel journey at work, using a Mac M2 Pro for more than a year and struggling to maintain the myriad settings, dotfiles, and various tweaks I end up making to ensure I can properly do my job.

It all started at work. We're just about to enter standup, and a fellow engineer (Henry, you are to blame 😛) and I are talking software and computers when the topic of [Nix](https://nixos.org/) comes up. For those of you not in the know (I can certainly count myself in that group before this journey), [Nix](https://nixos.org/) is a 'declarative' package manager, meaning instead of running commands to add packages or general changes to your system, you instead add those packages and changes to a configuration file, and then [Nix](https://nixos.org/) applies that configuration file against your computer to apply the changes. These changes can be committed to a Git repository, meaning you can define your entire system in configuration files.

I had a separate issue at the time. [Volta](https://volta.sh/), our chosen package manager for [Node](https://nodejs.org/en), is no longer receiving regular updates, and I needed to migrate us to something sustainable. Light bulbs go off in my head, and I decide to bury that illuminated head in a bucket full of [Nix](https://nixos.org/) for the better part of a month (strictly as part of my learning and development time, I promise).

When I come back to the team, I had explored [Nix](https://nixos.org/) and created a bit of an IT tool wrapped around it, a basic CLI to allow them to conveniently set up an entire [Nix](https://nixos.org/) environment, with the ability to add and remove packages without really interacting with [Nix](https://nixos.org/) at all. I quickly become a [Nix](https://nixos.org/) disciple at work, speaking the gospel to anyone who will listen (unfortunately for them, they often have to).

The system worked well (we're still actively using it at [Tillo](https://www.tillo.com/)), though I realised it had equal application at home. I have a PC, a laptop, a small refurbished server from Amazon, and a Raspberry Pi, all running differing variants of Linux. I also semi-regularly visit my parents, where I still have a PC (the [Pop!_OS](https://system76.com/pop/) one from earlier), and I always dread going back, knowing it's highly likely to implode when I next `sudo apt upgrade -y`.

What is an engineer supposed to do with newfound IT management superpowers and several devices itching for a new Linux distribution and orchestrated maintenance? It started innocently enough: migrating my existing laptop ([Fedora](https://fedoraproject.org/)) and PC ([CachyOS](https://cachyos.org/)) to use [Nix](https://nixos.org/) as a package manager, and moving configuration and dotfiles across so [Nix](https://nixos.org/) could manage them instead.

You quickly realise that a lot of time goes into a computer, be it Linux, Windows, or Mac, and we're always at risk of just losing it all, however within a week or so, I was able to wipe my laptop and restore it to an identical working environment in less than an hour, and for this reason I found that [Nix](https://nixos.org/) alone was worth it, but I kept running into issues that would have been more easily resolved had I just bitten the bullet and dived fully into [NixOS](https://nixos.org/).

For the next few months, I kept an almost identical configuration across my work and home laptops, with only a few differences required for the Mac. We now also use [Nix shells](https://nix.dev/tutorials/first-steps/declarative-shell.html) to manage those pesky Node versions!

At this point, I'd learnt that:

- [Nix](https://nixos.org/) can easily reproduce my system, saving me time if I ever need to do so again (e.g. a new laptop)
- [Nix](https://nixos.org/) can be used to more quickly onboard engineers at a company (sane defaults, modules and packages for different disciplines)
- Lock files for installed packages help protect you from upstream changes (similar to my existing workflows with package lock files)
- It gives better visibility into how engineers actually use their systems (your IT team will either love you or hate you for it)

However I still had the following issues:

- [NixOS](https://nixos.org/) has better documentation, and often references you'll find online point more towards [NixOS](https://nixos.org/), less towards [Nix](https://nixos.org/). It's a confusing blurry line for beginners.
- Each machine in my life is physically different; If I wanted to create a shared configuration for all, with the guarantee of being as identical as possible across both, I'd have to switch to [NixOS](https://nixos.org/)
- Starting this journey, my configuration was a mess! Now that I had absorbed quite a bit of information, a configuration refactor was in order, and there's no better excuse to switch.

This is where the story of [Nix](https://nixos.org/) ends. It does its job and does it well. But I wanted more. I could now reproduce my system with ease, yet the remaining pain points I had could be resolved with [NixOS](https://nixos.org/).

Starting with the existing [Nix](https://nixos.org/) configuration I'd built up over the last few months, I decided to entirely refactor my computing life. Branching away from what I already had, I revamped the entire setup for [NixOS](https://nixos.org/), iterating over the course of a week to create a highly modular system that works for every device I own, and even other people's devices in my household.

If you're curious about such a configuration, you're in luck! I've also created a minimal template to help you bootstrap your way to a [NixOS](https://nixos.org/) life: [github.com/CRBroughton/nix-starter-template](https://github.com/CRBroughton/nix-starter-template/tree/master/nixos-template/template)

```plaintext
template/
├── flake.nix                              # Entry point
├── justfile                               # Common commands
├── lib/
│   └── default.nix                        # mkHost helper (wires up nixpkgs, home-manager, modules path)
├── modules/                               # Reusable, opt-in system modules
│   └── desktop/
│       └── gnome.nix                      # GNOME + GDM + Pipewire (uncomment in host to enable)
└── users/
    └── username/                          # Your user
        ├── default.nix                    # Home-manager config
        └── hosts/
            └── hostname/                  # Your machine
                ├── default.nix            # Host config
                ├── hardware.nix           # Hardware config (generated)
                └── vm-testing.nix         # VM settings (remove for real hardware)
```

The above is a folder map of the most minimal setup. I've been using [Just](https://just.systems/man/en/), which is a super simple command runner to simplify those annoyingly long commands that you'll never quite remember.

Top level 'modules' can be re-used across any user, and any machine. Do you want [GNOME](https://www.gnome.org/) on your laptop, and [KDE](https://kde.org/) on your desktop? Just swap out a single line of code in your hosts `default.nix`, and you have that desktop. This of course has opened the door to me trying 'all the things!', especially those desktops that previously I would have had to distro hop for ([Hyprland](https://hypr.land/) soon?).

Each user has a dedicated folder, in which the 'hosts' folder has each machine the user owns (in my case, my PC, laptop, server and Pi). You can imagine a user might have common configuration across all machines, so those files can live in the users folder, however machines might have specific requirements for hardware or software, so those files are directly within their respective hosts folder.

Each machine has a `vm-testing.nix`, which allows the user to simply run `just vm` to run the entire system in a virtual machine. This has been a godsend when migrating to [NixOS](https://nixos.org/), allowing me to verify the entire system is working and safely knowing I haven't lost any packages I rely on.

And that's where I'm currently at. In summary, [Nix](https://nixos.org/) has saved my sanity when it comes to maintaining various computers in my life (it sounds crazy, but I'm seriously considering moving my mother to [NixOS](https://nixos.org/) just so I can remote manage her PC and deploy packages at my leisure). I no longer worry about the maintenance of machines hundreds of miles away from me, that I haven't turned on in a few months. I can hop between my laptop and my desktop, and get an identical experience, or if I choose to, 'fearlessly' swap out parts of that experience, knowing I can rollback if something goes wrong or completely change my setup without breaking changes being a worry.

If you're curious, you can find my full configuration here — [github.com/CRBroughton/nix-configuration](https://github.com/CRBroughton/nix-configuration). And if you know me, I apologise in advance for talking about [Nix](https://nixos.org/).
