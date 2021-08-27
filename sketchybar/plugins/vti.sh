#!/bin/bash

PRE_MARKET_START=0430
MARKET_START=0930
MARKET_END=1600
AFTER_MARKET_END=2000
CURRENT_TIME=$(date +%H%M)

echo $CURRENT_TIME $PRE_MARKET_START $MARKET_START $MARKET_END $AFTER_MARKET_END 

if [[ ${CURRENT_TIME#0} -ge ${PRE_MARKET_START#0} && ${CURRENT_TIME#0} -le ${AFTER_MARKET_END#0} ]]; then 
  echo 1
  sketchybar -m set vti hidden off
  sketchybar -m set vti_sep hidden off
  sketchybar -m set eth_sep hidden off
  sketchybar -m set vti update_freq 10
else
  echo 2
  sketchybar -m set vti hidden on
  sketchybar -m set vti_sep hidden on
  sketchybar -m set eth_sep hidden on
  sketchybar -m set vti update_freq 120
fi

if [[ ${CURRENT_TIME#0} -ge ${MARKET_START#0} && ${CURRENT_TIME#0} -le ${MARKET_END#0} ]]; then
  echo 3
  VTI=$(curl -L -s "https://robinhood.com/stocks/VTI" | grep -E -o "[-|+]*[0-9]{1,5}\.[0-9]{1,2}%" | sed '1,1!d')
elif [[ (${CURRENT_TIME#0} -ge ${PRE_MARKET_START#0} && ${CURRENT_TIME#0} -lt ${MARKET_START#0}) || (${CURRENT_TIME#0} -gt ${MARKET_END#0} && ${CURRENT_TIME#0} -le ${AFTER_MARKET_END#0}) ]]; then
  echo 4
  VTI=$(curl -L -s "https://robinhood.com/stocks/VTI" | grep -E -o "[-|+]*[0-9]{1,5}\.[0-9]{1,2}%" | sed '2,2!d')
fi

echo 5
sketchybar -m set vti label $VTI
