#!/bin/bash

ETH=$(curl -L -s "https://www.coingecko.com/en/coins/ethereum" | grep -E -o "[-|+]*[0-9]{1,5}\.[0-9]{1,2}%" | sed '1,1!d')

sketchybar -m set eth label "$ETH"
