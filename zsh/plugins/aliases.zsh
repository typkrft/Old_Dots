# A L I A S E S
alias ibrew="arch -x86_64 /usr/local/bin/brew"
# alias abrwe="/opt/homebrew/bin/brew"
alias ols="/bin/ls"
# alias ls="colorls --sd --report -A --gs"
alias ls="exa --icons --all --classify --color-scale --group-directories-first"
alias icat="kitty +kitten icat"
alias rm="$HOME/.config/bin/fzf_trash"
alias orm="/bin/rm"
alias nnn="nnn -e"
alias :="nvim_quick"
# alias ssh="kitty +kitten ssh" 

# NOTE: An example of the setup
# System Python = python2 = /usr/bin/python
# brew python@3.7 = python3_7
# latest/m1 compatable python = python
# $ /usr/bin/python -V; python3_7 -V; python -V
# > Python 2.7.16
# > Python 3.7.11
# > Python 3.9.6
# PYTHON 3.9 is Python (can't currently manage with asdf)
alias python=/opt/homebrew/bin/python3
alias pip=/opt/homebrew/bin/pip3
# Python 3.7 for compatability installs to /usr/local/bin
alias python3=/usr/local/opt/python@3.7/bin/python3
alias pip3=/usr/local/opt/python@3.7/bin/pip3

alias joplin=joplin --profile ~/.config/joplin-desktop
