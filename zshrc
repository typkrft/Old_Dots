# Z S H R C

# I N I T
source $HOME/.config/zsh/zinit_conf.zsh

# A L I A S E S
alias ibrew="arch -x86_64 /usr/local/bin/brew"

# F U N C T I O N S
dbot() {
  $HOME/.dotfiles/install;
  git -C $HOME/.dotfiles add $HOME/.dotfiles/*;
  git -C $HOME/.dotfiles commit -am "'$*'";
  git -C $HOME/.dotfiles push -u origin main;
}

# P R O M P T - S T A R S H I P
eval "$(starship init zsh)"
