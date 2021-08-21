#!/bin/bash

VTI=$(curl -L -s "https://finance.yahoo.com/quote/VTI" | grep -E  -o "([-|+][0-9]{1,5}\.[0-9]{1,2}%)" | head -9 | tail -1)

sketchybar -m set vti label "$VTI"
