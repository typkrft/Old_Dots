# Z I N I T

### Added by Zinit's installer
if [[ ! -f $HOME/.zinit/bin/zinit.zsh ]]; then
    print -P "%F{33}▓▒░ %F{220}Installing %F{33}DHARMA%F{220} Initiative Plugin Manager (%F{33}zdharma/zinit%F{220})…%f"
    command mkdir -p "$HOME/.zinit" && command chmod g-rwX "$HOME/.zinit"
    command git clone https://github.com/zdharma/zinit "$HOME/.zinit/bin" && \
        print -P "%F{33}▓▒░ %F{34}Installation successful.%f%b" || \
        print -P "%F{160}▓▒░ The clone has failed.%f%b"
fi

source "$HOME/.zinit/bin/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

# Load a few important annexes, without Turbo
# (this is currently required for annexes)
zinit light-mode for \
    zinit-zsh/z-a-rust \
    zinit-zsh/z-a-as-monitor \
    zinit-zsh/z-a-patch-dl \
    zinit-zsh/z-a-bin-gem-node

# P L U G I N S
zinit light zdharma/history-search-multi-word

zinit light zsh-users/zsh-syntax-highlighting

zinit light jeffreytse/zsh-vi-mode

# OMZ History Conf
zinit snippet OMZP::history
source $HOME/.config/zsh/omz_history_conf.zsh

# Keep Vi-Mode from overriding keybindings
zvm_after_init_commands+=('[ -f $HOME/.config/zsh/omz_history_conf.zsh ] && source $HOME/.config/zsh/omz_history_conf.zsh')

# C O M P L E T I O N S 
# Add completions provided by brew packages
zinit fpath -f /opt/homebrew/share/zsh/site-functions

# Add additional completions here

# Completion Provider
zinit ice blockf
zinit snippet "https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/completion.zsh" # From OMZ
# These Commands should be loaded after all completion 
# related functions
autoload -Uz compinit
compinit
zinit cdreplay -q 
