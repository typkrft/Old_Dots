#!/bin/sh

INFO=$(yabai -m query --windows --window $YABAI_WINDOW_ID | jq '.app,.topmost')
APP=$(echo $INFO | sed -n 1p)
TOPMOST=$(echo $INFO | sed -n 2p)

if [[ $TOPMOST -eq 0 && ( $APP =~ "Authy Desktop" || $APP =~ "Bitwarden" ) ]]; then
    yabai -m window $YABAI_WINDOW_ID --toggle topmost
    INFO=$(yabai -m query --windows --window $YABAI_WINDOW_ID | jq '.app,.topmost')
    TOPMOST=$(echo $INFO | sed -n 2p)
    echo TURN ON $APP $TOPMOST
elif [[ $TOPMOST -eq 1 && ! ( $APP =~ "Authy Desktop" || $APP =~ "Bitwarden" ) ]]; then
    yabai -m window $YABAI_WINDOW_ID --toggle topmost
    echo TURN OFF $APP $TOPMOST
fi





















# INFO=$(yabai -m query --windows --window | jq '.app,.topmost') 
# APP=$(echo $INFO | sed -n 1p)
# TOPMOST=$(echo $INFO | sed -n 2p)
# # echo $APP 
# # echo $TOPMOST

# if [[ $TOPMOST -eq 0 && ( $APP =~ "Authy Desktop" || $APP =~ "Bitwarden" ) ]]; then
#     yabai -m window --toggle topmost
#     echo On
# elif [[ $TOPMOST -eq 1 ]]; then
#     yabai -m window --toggle topmost
#     echo Off
# fi

# if [ $TOPMOST -eq 1 ]; then
#     yabai -m window --toggle topmost
# fi

# if [ $TOPMOST -eq 0 ]; then
#     yabai -m window --toggle topmost
# fi



# sleep .25
# if [[ $TOPMOST -eq 0 ]]; then
#     if [[ $APP =~ "Authy Desktop" || $APP =~ "Bitwarden" ]]; then
#         yabai -m query --windows --window | jq '.app,.topmost'
#         yabai -m window --toggle topmost 
#         echo TOGGLED ON
#     else
#         exit 0
#     fi
# elif [[ $TOPMOST -eq 1 ]]; then
#     if [[ $APP =~ "Authy Desktop" || $APP =~ "Bitwarden" ]]; then
#         exit 0
#     else
#         yabai -m query --windows --window | jq '.app,.topmost'
#         yabai -m window --toggle topmost        
#         echo $APP TOGGLED OFF
#     fi
# fi
