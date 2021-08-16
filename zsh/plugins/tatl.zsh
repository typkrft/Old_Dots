#!/bin/zsh

# T A T L
# A lightweight alternative to Navi

# TODOS:
# - [ ] Make a Remove Function 
# - [ ] Create Syntax that will allow the user to fill in variables in the commnad 
# - [ ] Setup Help


function tatl() {
  function usage() {
    echo help
  }

  if [ -z ${TATL_FILE+x} ]; then
    cheat_file=$HOME/.config/tatl
  else
    cheat_file=$TATL_FILE
  fi

  if [ -f $cheat_file ]; then
    :
  else
    touch $cheat_file
  fi

  while getopts "ae" arg; do
    case $arg in
    a)
      printf "$(tput bold)Enter a description of the command:$(tput sgr0)\n"
      read description
      printf "$(tput bold)Enter the command you would like to save:\n$(tput smul)Remember$(tput rmul) $(tput sgr0)this will command will run with the -e flag.\n"
      read command
      printf "${description} :: ${command}\n" >> $cheat_file
      ;;
    e)
      cat $cheat_file | fzf --height=45% | sed -E 's/.*::(.*)/\1/'| sh -
      ;;
    *)
      usage
      ;;
    esac
  done

  if (( $OPTIND == 1 )); then
    print -z -- $(cat $cheat_file | fzf --height=45% | sed -E 's/.*::(.*)/\1/')
  fi

}
