# <p align="center">💻 D O T S</p>
<p align="center">Asthetically pleasing dotfiles focused on functionality.</p>
<p align="left"><strong>NOTE:</strong> This is still very much a work in progress I would strongly recommend not using the install script as of now. In addition while, most of these dots should work with minimal effort in most environments, they are tailored for M1 Macs running the latest stable release of macOS.</p>

## S C R E E N S H O T S

## F E A T U R E S 
- A tailored version of [kyoto.nvim](https://github.com/samrath2007/kyoto.nvim)
  - NVIM Status In Sketchybar
- A Modal Keyboard Shortcut setup powered by [SKHD](https://github.com/koekeishiya/skhd)
- Ready to Rice with [pywal](https://github.com/dylanaraps/pywal), [pywalfox](https://github.com/Frewacom/pywalfox), and more
- Multiple Configurations for firefox that seek to maximize viewable space.
- Native Mac Motion Keys on the command line and in NVim.

## I N S T A L L A T I O N 
**HERE BE DRAGONS:** While these dotfiles can be installed in there entirety, it is strongly recommened that you simply that the configurations that you need, unless you know what you are doing! The installation aims to to safely deploy files. However, this may overwrite files, override settings, and completely bork up your environment. Please backup anything that is important and look through [install.conf.yaml](https://github.com/typkrft/Dots/blob/main/install.conf.yaml) first.

**NOTE:** This makes use of and/or includes some programs that maybe out of date for various reasons. This should generally be of no consequence, but you should look at the [/bin/README.md](https://github.com/typkrft/Dots/blob/main/bin/README.md) for more details.

Complete Installation
You might want to read through [DotBots Readme](https://github.com/anishathalye/dotbot) to understand what is going on here first. 

1. Clone the repo
```SHELL
git clone https://github.com/typkrft/Dots
```

2. Change Directory to Dots
```SHELL
cd Dots
```

3. Execute the Install Script
```SHELL
./install
```

## T O D O S

### G E N E R A L
- [ ] Add paths needed to scripts and clean them up
- [ ] Ripgrep all the todos in here

### I N S T A L L . C O N F . Y A M L
- [ ] Clean up and Organize
- [ ] Move Complex logic into it's own script
- [ ] Setup / Generate an ENV File
- [ ] Checks for OS and Shell

### N V I M
- [ ] Setup Cmdline key maps described on [SO](https://stackoverflow.com/a/21207170)
- [ ] Pick unbound letter in all modes and change kitty keybindings
- [ ] Map Cmd + F to search 
- [ ] Map Cmd + A to select everything
- [ ] Switch tabs with shift tab maybe
- [ ] Indent with tab

### S K E T C H Y  B A R 
- [x] Create Mode Item e.g.: [N] [V] [I]
- [ ] Show and hide widgets for depending on criteria e.g.: Weekend stop VTI
- [ ] Fix VTI Plugin
- [x] Add Color to battery icon when Low
- [ ] Update Sketchy Bar to use Enable/ Disable and Yabai Signals
- [ ] Create App Event to change icon of current space to app icon if available.

### F I R E F O X
- [ ] Install extensions [Stack Question](https://stackoverflow.com/questions/37728865/install-webextensions-on-firefox-from-the-command-line)
- [ ] Update themes so that vibrancy works again. [macOS Vibrant](https://github.com/Tnings/MacosVibrant)

### Y A B A I
- [ ] Move New Messages Windows (e.g.: Messages, Mail) to center or right side of the screen
- [ ] Fix or remove Yabai Kitty Singal

### K I T T Y
- [x] Allow Remote Control and add a port so that skhd can update colors
- [ ] Retheme Tab Bar after color change maybe create another wal template
- [ ] Check if there is a way to stop activating the last window if all other windows close

### S K H D
- [ ] Keybindings can be per app Alt-Right could switch browser or vscode tabscc
- [ ] Create Better Keybindings
- [ ] Cmd + Tab switch tabs in Kitty

### S T A R S H I P
- [ ] Set up Prompt

## RM Function
- [ ] Add preview for files

### T M U X
- [ ] Get a Conf setup
- [ ] Kitty Mapped Keys don't work to move in tmux. Try to map them in skhd not in kitty, then change zsh bindkeys and nvim. Map to some weird hex I'll never use maybe. Also Note Abduco doesn't mess with the keybindings. Both TMUX and Abduco do not have image support though. 

### P A C K A G E S 
- [ ] Brewfile / Get a list of packages to install
- [ ] Python Package List
- [ ] NPM Package list

### Z S H R C 
- [ ] ZLE Widget for cmd + a to select the entire buffer
- [ ] Create a rg --vimgrep function [SO](https://stackoverflow.com/questions/61740910/how-do-i-fuzzy-find-all-files-containing-specific-text-using-ripgrep-and-fzf-and)

## T H A N K S

