#!/bin/bash

ETH=$(curl -s 'rate.sx/eth@1d' | grep change| sed -r 's/.*\((.*)\).*/\1/' | /opt/homebrew/bin/strip-ansi)

sketchybar -m set eth label "$ETH"
