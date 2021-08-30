#!/bin/bash

if [[ $(date +%u) -gt 5 ]]; then
  exit 0
fi

PRE_MARKET_START=0430
MARKET_START=0930
MARKET_END=1600
AFTER_MARKET_END=2000
CURRENT_TIME=$(date +%H%M)

if [[ ${CURRENT_TIME#0} -ge ${MARKET_START} \
&& ${CURRENT_TIME#0} -le ${MARKET_END} ]]; then
  VTI=$(curl -s -L https://robinhood.com/stocks/VTI \
  |  grep -E -o '[\+|\-]\d{1,4}\.\d{1,2}%' | head -n 1)
  sketchybar -m set vti label $VTI
  sketchybar -m set vti hidden off
  sketchybar -m set vti_sep hidden off
  exit 0
elif [[ (${CURRENT_TIME#0} -ge ${PRE_MARKET_START#0} \
&& ${CURRENT_TIME#0} -lt ${MARKET_START#0}) \
|| (${CURRENT_TIME#0} -gt ${MARKET_END#0} \
&& ${CURRENT_TIME#0} -le ${AFTER_MARKET_END#0}) ]]; then
  VTI=$(curl -s -L https://robinhood.com/stocks/VTI \
  |  grep -E -o '[\+|\-]\d{1,4}\.\d{1,2}%' | head -n 1)
  sketchybar -m set vti label $VTI
  sketchybar -m set vti hidden off
  sketchybar -m set vti_sep hidden off
  exit 0
else
  sketchybar -m set vti hidden on
  sketchybar -m set vti_sep hidden on
fi

