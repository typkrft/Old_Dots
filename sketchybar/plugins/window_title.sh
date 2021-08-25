#!/bin/bash

WINDOW_INFO=$(osascript -e '
  global frontApp, frontAppName, windowTitle
  tell application "System Events"
    set frontApp to first application process whose frontmost is true
    set frontAppName to name of frontApp
    tell process frontAppName
      tell (1st window whose value of attribute "AXMain" is true)
        set windowTitle to value of attribute "AXTitle"
      end tell
    end tell
  end tell

  if (count of windowTitle) is greater than 50 then
    set windowTitle to do shell script "echo " & quoted form of windowTitle & "| cut -c 1-50"
    set windowTitle to windowTitle & "…"
  end if

  if windowTitle is not "" then
    return windowTitle
  else
    return frontAppName
  end if
')

# sketchybar -m set title label "│ $WINDOW_INFO"

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
