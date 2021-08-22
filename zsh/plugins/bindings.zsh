# B I N D I N G S

# O M Z  H I S T O R Y  C O N F
# This feels more comfortable
# bindkey '\e[A' history-search-backward
# bindkey '\e[B' history-search-forward

# This might be more useful
bindkey '\e[A' history-beginning-search-backward
bindkey '\e[B' history-beginning-search-forward

bindkey ";3C" forward-word 
bindkey ";3D" backward-word         
bindkey ";9C" end-of-line   
bindkey ";9D" beginning-of-line 
bindkey "Y223r" backward-kill-line
bindkey "Y2e43" backward-delete-word
bindkey "Y2e44" undo
bindkey "Y2e4s" redo

# ZLE Widget to move cursor to beginning of the buffer
# zle -N adds it to zsh as a widget so that it can be
# bound
_beginning_of_buffer() { 
  CURSOR=0
}
zle -N _beginning_of_buffer

_end_of_buffer() {
  CURSOR="${#BUFFER}"
}
zle -N _end_of_buffer

bindkey "Zd2e4s" _beginning_of_buffer
bindkey "Zd2e4d" _end_of_buffer
