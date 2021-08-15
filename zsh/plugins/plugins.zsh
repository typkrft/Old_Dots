# Z I N I T

# NOTE: Do not edit
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

# U S E R  C O N F I G 
# P L U G I N S
# Vi-Mode
# NOTE: This messes with a lot of things, like bindkeys
# zinit ice depth=1
# zinit light jeffreytse/zsh-vi-mode

# Syntax Highlighting
# Pywal colors Mess this up
zinit ice lucid wait
zinit light zsh-users/zsh-syntax-highlighting
# Declare the variable
typeset -A ZSH_HIGHLIGHT_STYLES
# To differentiate aliases from other command types
# Uses Terminal colors which dont neccisarily refer to the acutal color
ZSH_HIGHLIGHT_STYLES[comment]='fg=green,bold'

# OMZ History Conf
zinit ice lucid wait
zinit snippet OMZP::history
# NOTE: # Keep Vi-Mode from overriding keybindings
# zvm_after_init_commands+=('[ -f $HOME/.config/zsh/omz_history_conf.zsh ] && source $HOME/.config/zsh/omz_history_conf.zsh')
. $HOME/.config/zsh/bindings.zsh

# ZSH Autopair 
zinit ice lucid wait
zinit light hlissner/zsh-autopair

zinit ice lucid wait
zinit light typkrft/zfm

# C O M P L E T I O N S 
# Add completions provided by brew packages
zinit fpath -f /opt/homebrew/share/zsh/site-functions

# Completion Provider

# NOTE: Check with your completion provide to see where it should
# NOTE: be loaded. Some need to be loaded before compinit and others
# NOTE: after it.
 
# NOTE: Additional Unused completion engine
# zinit ice blockf
# zinit snippet "https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/completion.zsh"

autoload -Uz compinit
compinit

# FZF Completions 
zinit ice lucid wait
zinit light Aloxaf/fzf-tab # Needs to be loaded after compinit

zinit cdreplay -q 
