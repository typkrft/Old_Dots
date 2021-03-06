# E N V  V A R I A B L E S

# V I S U A L
export VISUAL=nvim

# G O
export GOPATH=$HOME/.go

# Z F M 
export ZFM_BOOKMARKS_FILE="$HOME/.config/zsh/zfm"

# T A T L
export TATL_FILE="$HOME/.config/zsh/cheatsheet"

# E X A
export EXA_ICON_SPACING=2

# P F E T C H
# Which information to display.
# NOTE: If 'ascii' will be used, it must come first.
# Default: first example below
# Valid: space separated string

# OFF by default: shell editor wm de palette
export PF_INFO="ascii title os de wm editor pkgs memory uptime"

# Example: Only ASCII.
# PF_INFO="ascii"

# Example: Only Information.
# PF_INFO="title os host kernel uptime pkgs memory"

# A file to source before running pfetch.
# Default: unset
# Valid: A shell script
# PF_SOURCE=""

# Separator between info name and info data.
# Default: unset
# Valid: string
# PF_SEP=""

# Enable/Disable colors in output:
# Default: 1
# Valid: 1 (enabled), 0 (disabled)
export PF_COLOR=1

# Color of info names:
# Default: unset (auto)
# Valid: 0-9
export PF_COL1=4

# Color of info data:
# Default: unset (auto)
# Valid: 0-9
export PF_COL2=7

# Color of title data:
# Default: unset (auto)
# Valid: 0-9
export PF_COL3=1

# Alignment padding.
# Default: unset (auto)
# Valid: int
# export PF_ALIGN=""

# Which ascii art to use.
# Default: unset (auto)
# Valid: string
# PF_ASCII="openbsd"

# Which Computer Model to Display
# PF_MODEL=""

# Which hostname to display.
# PF_HOSTNAME=""

# Which editor to display.
export PF_EDITOR="NV_Ghost"

# Which DE to display
export PF_DE="Aqua"

# The below environment variables control more
# than just 'pfetch' and can be passed using
# 'HOSTNAME=cool_pc pfetch' to restrict their
# usage solely to 'pfetch'.

# Which user to display.
# USER=""

# Which shell to display.
# SHELL=""

# Which desktop environment to display.
# XDG_CURRENT_DESKTOP=""

