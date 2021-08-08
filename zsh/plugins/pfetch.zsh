#!/bin/sh

# P F E T C H

# Which information to display.
# NOTE: If 'ascii' will be used, it must come first.
# Default: first example below
# Valid: space separated string
#
# OFF by default: shell editor wm de palette
PF_INFO="ascii title os de wm editor pkgs memory uptime"

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
PF_SEP=""

# Enable/Disable colors in output:
# Default: 1
# Valid: 1 (enabled), 0 (disabled)
PF_COLOR=1

# Color of info names:
# Default: unset (auto)
# Valid: 0-9
PF_COL1=4

# Color of info data:
# Default: unset (auto)
# Valid: 0-9
PF_COL2=7

# Color of title data:
# Default: unset (auto)
# Valid: 0-9
PF_COL3=1

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
PF_EDITOR="NV_Ghost"

# Which DE to display
PF_DE="AQUA"

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
