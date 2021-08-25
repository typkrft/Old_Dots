#!/bin/bash

PRE_MARKET_START=430
MARKET_START=930
MARKET_END=1600
AFTER_MARKET_END=2000
CURRENT_TIME=$(date +%H%M)

if [[ $CURRENT_TIME -ge $PRE_MARKET_START && $CURRENT_TIME -le $AFTER_MARKET_END ]]; then 
  sketchybar -m set vti hidden off
  sketchybar -m set vti_sep hidden off
  sketchybar -m set eth_sep hidden off
  sketchybar -m set vti update_freq 120
else
  sketchybar -m set vti hidden on
  sketchybar -m set vti_sep hidden on
  sketchybar -m set eth_sep hidden on
  sketchybar -m set vit update_freq 10
fi

if [[ $CURRENT_TIME -ge $START_TIME && $CURRENT_TIME -le $END_TIME ]]; then
  VTI=$(curl -L -s "https://robinhood.com/stocks/VTI" | grep -E -o "[-|+]*[0-9]{1,5}\.[0-9]{1,2}%" | sed '1,1!d')
elif [[ ($CURRENT_TIME -ge $PRE_MARKET_START && $CURRENT_TIME -lt $MARKET_START) || ($CURRENT_TIME -gt $MARKET_END && $CURRENT_TIME -le $AFTER_MARKET_END) ]]; then
  VTI=$(curl -L -s "https://robinhood.com/stocks/VTI" | grep -E -o "[-|+]*[0-9]{1,5}\.[0-9]{1,2}%" | sed '2,2!d')
fi

sketchybar -m set vti label $VTI
