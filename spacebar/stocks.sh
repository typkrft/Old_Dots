#!/bin/sh

ETH=$(curl -s 'rate.sx/eth@1d' | grep change| sed -r 's/.*\((.*)\).*/\1/' | /opt/homebrew/bin/strip-ansi); 
BTC=$(curl -s 'rate.sx/btc@1d' | grep change| sed -r 's/.*\((.*)\).*/\1/' | /opt/homebrew/bin/strip-ansi); 
VTI=$(curl -s https://terminal-stocks.herokuapp.com/VTI | grep - | head -n1 | /opt/homebrew/bin/strip-ansi |python -c "import sys,re;[sys.stdout.write(re.sub('│.*?│.*?│.*?│\w*?(.*?)\w*?│.*', r'\1', line)) for line in sys.stdin]" | sed 's/ //g'); 

if [[ $(scutil --nc list | grep Connected) ]]; then
  VPN_NAME=$(scutil --nc list| sed -r 's/.*"(.*)".*/\1/'|tail -n1);
  echo " $VPN_NAME Connected";
  
else
  echo " BTC: $BTC ETH: $ETH VTI: $VTI%" | strip-ansi | rev | cut -c2-| rev | sed -e 's/$/\%/g'; 
fi

