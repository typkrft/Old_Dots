#!/bin/bash

BTC=$(curl -s 'rate.sx/btc@1d' | grep change| sed -r 's/.*\((.*)\).*/\1/' | /opt/homebrew/bin/strip-ansi)

sketchybar -m set btc label "$BTC"
