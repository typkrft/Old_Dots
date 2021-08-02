# Z S H R C

# I N I T
source $HOME/.config/zsh/zinit_conf.zsh

# Source asdf
. /opt/homebrew/opt/asdf/asdf.sh

# A L I A S E S
alias ibrew="arch -x86_64 /usr/local/bin/brew"
alias ols="/bin/ls"
alias ls="colorls --sd --report -A --gs"
alias icat="kitty +kitten icat"
alias rm="rm-trash"
alias orm="/bin/rm"

# F U N C T I O N S
# Remove .DS_Store files recursively in a directory, default .
function rmdsstore() {
  find "${@:-.}" -type f -name .DS_Store -delete
}

# Install dotfiles and push them to github
dbot() {
  rmdsstore $HOME/.dotfiles
  $HOME/.dotfiles/install;
  git -C $HOME/.dotfiles add $HOME/.dotfiles/*;
  git -C $HOME/.dotfiles commit -am "'$*'";
  git -C $HOME/.dotfiles push -u origin main;
}

--() {
  tmux new -s "$1" "$2";
}
__() {
tmux attach-session -d -t $1 
}

cs_spectrum() {
  # Author: crshd
  # Source: http://crunchbang.org/forums/viewtopic.php?pid=128584#p128584
  for f in {0..6}; do
    echo -en "\033[$((f+41))m\033[$((f+30))m██▓▒░"
  done
  echo -en "\033[37m██\n"

  for f in {0..6}; do
    echo -en "\033[$((f+41))m\033[1;$((f+30))m██▓▒░"
  done
  echo -en "\033[1;37m██"

  echo -e "\033[0m"
}

# R U N  B E F O R E  P R O M P T 
pfetch
cs_spectrum
# P R O M P T - S T A R S H I P
eval "$(starship init zsh)"

