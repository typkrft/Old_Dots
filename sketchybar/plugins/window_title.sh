#!/bin/bash

# W I N D O W  T I T L E 

APP_NAME=$(/opt/homebrew/bin/yabai -m query --windows --window | jq '.app' | sed -E 's/^"(.*)"$/\1/')
WINDOW_TITLE=$(/opt/homebrew/bin/yabai -m query --windows --window | jq '.title' | sed -E 's/^"(.*)"$/\1/')

if [[ $WINDOW_TITLE = "" ]]; then
  sketchybar -m set title label "│ $APP_NAME"
else
  if [[ ${#WINDOW_TITLE} -gt 50 ]]; then
    WINDOW_TITLE=$(echo "$WINDOW_TITLE" | cut -c 1-50)
    sketchybar -m set title label "│ $WINDOW_TITLE"…
  else
    sketchybar -m set title label "│ $WINDOW_TITLE"
  fi
fi
