#!/bin/bash

# TODO: Create a mouse script that favorites the song and/or copies a share link

# There is probably a better way to test for the APP_STATE
# On my system APP_STATE is always 2 when the app is not running
APP_STATE=$(ps aux| grep -c /System/Applications/Music.app)

if [[ $APP_STATE -gt 2 ]]; then
  PLAYER_STATE=$(osascript -e "tell application \"Music\" to set playerState to (get player state) as text")
  
  if [[ $PLAYER_STATE == "stopped" ]]; then
    sketchybar -m set music_info icon 
    sketchybar -m set music_info label "Stopped"
    exit 0
  elif [[ $PLAYER_STATE == "paused" ]]; then
    TITLE=$(osascript -e 'tell application "Music" to get name of current track')
    ARTIST=$(osascript -e 'tell application "Music" to get artist of current track')
    # ALBUM=$(osascript -e 'tell application "Music" to get album of current track')

    # NOTE: This logic in this section could be greatly improved. 
    # Because items in your bar do not have protection from overlapping
    # We need to account for this. For instance if the window title is long
    # and the music information is long they might overlap on your bar.
    # You adjust what length at which the string is truncated by modifying
    # The `cut` command. You could also do something like if title is greater 
    # than x just leave it out. I have uncommented the artist and album information
    # beucase I only want to truncate the title. 
    if [[ ${#TITLE} -gt 15 ]]; then
      TITLE=$(printf "$(echo $TITLE | cut -c 1-12)…")
    fi
    # if [[ ${#ARTIST} -gt 15 ]]; then
      # ARTIST=$(printf "$(echo $ARTIST | cut -c 1-12)…")
    # fi
    # if [[ ${#ALBUM} -gt 15 ]]; then
      # ALBUM=$(printf "$(echo $ALBUM | cut -c 1-12)…")
    # fi

    # Update Sketchybar
    sketchybar -m set music_info icon 
    # I have completely left off album information, becaues it's not 
    # information I usually care about at a glance. 
    sketchybar -m set music_info label "${TITLE} x ${ARTIST}"
  elif [[ $PLAYER_STATE == "playing" ]]; then
    # NOTE: All of the notes in the elif block above apply here.
    TITLE=$(osascript -e 'tell application "Music" to get name of current track')
    ARTIST=$(osascript -e 'tell application "Music" to get artist of current track')
    # ALBUM=$(osascript -e 'tell application "Music" to get album of current track')
    if [[ ${#TITLE} -gt 15 ]]; then
      TITLE=$(printf "$(echo $TITLE | cut -c 1-12)…")
    fi
    # if [[ ${#ARTIST} -gt 15 ]]; then
      # ARTIST=$(printf "$(echo $ARTIST | cut -c 1-12)…")
    # fi
    # if [[ ${#ALBUM} -gt 15 ]]; then
      # ALBUM=$(printf "$(echo $ALBUM | cut -c 1-12)…")
    # fi
    sketchybar -m set music_info icon 
    sketchybar -m set music_info label "$TITLE x $ARTIST"
  fi
else
  sketchybar -m set music_info icon
  sketchybar -m set music_info label
  exit 0
fi
