#!/bin/bash

BTC=$(curl -L -s "https://www.coingecko.com/en/coins/bitcoin" | grep -E -o "[-|+]*[0-9]{1,5}\.[0-9]{1,2}%" | sed '1,1!d')

sketchybar -m set btc label "$BTC"
