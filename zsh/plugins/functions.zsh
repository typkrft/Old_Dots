# F U N C T I O N S
# Remove .DS_Store files recursively in a directory, default .
function rmdsstore() {
  find "${@:-.}" -type f -name .DS_Store -delete
}

function nvim_quick() {
  if [[ -f $1 ]]; then
    nvim $1 
  elif [[ -d $1 ]]; then
    echo "$1/*"
    nvim $1/*
  else
    \:
  fi
}

# Install dotfiles and push them to github
function dbot() {
  rmdsstore $HOME/.dotfiles
  $HOME/.dotfiles/install;
  git -C $HOME/.dotfiles add $HOME/.dotfiles/*;
  git -C $HOME/.dotfiles commit -am "'$*'";
  git -C $HOME/.dotfiles push -u origin main;
}

function auto-color-ls() {
  emulate -L zsh
  echo
  exa --icons --all --classify --color-scale --group-directories-first
}
chpwd_functions=(auto-color-ls $chpwd_functions)

function --() {
  tmux new -s "$1" "$2";
}
function __() {
  tmux attach-session -d -t $1 
}

function cs_spectrum() {
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

fav_colorscheme() {
  WALLPAPER=$(grep "wallpaper=" $HOME/.cache/wal/colors.sh | sed -E 's/wallpaper="(.*)"/\1/')
  D_NUMBER=$[$(find $HOME/.config/wal/colorschemes/dark -maxdepth 1 -type f -name "Fav_*" | wc -l) +1]
  L_NUMBER=$[$(find $HOME/.config/wal/colorschemes/light -maxdepth 1 -type f -name "Fav_*" | wc -l) + 1]
  /opt/homebrew/bin/wal -n -s -t -p "D_Fav_$D_NUMBER" -i "${WALLPAPER}" &>/dev/null
  /opt/homebrew/bin/wal -n -s -t -l -p "L_Fav_$L_NUMBER" -i "${WALLPAPER}" &>/dev/null
}

# M I S C 
# Sets the shells title to the current process for Kitty (and others)
function set-title-precmd() {
  printf "\e]2;%s\a" "${PWD/#$HOME/~}"
}

function set-title-preexec() {
   printf "\e]2;%s\a" "$1"
}

autoload -Uz add-zsh-hook
add-zsh-hook precmd set-title-precmd
add-zsh-hook preexec set-title-preexec

