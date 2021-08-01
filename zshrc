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

# P R O M P T - S T A R S H I P
eval "$(starship init zsh)"

