#!/bin/sh

#TODO: Cycle Through Music Information
#TODO: If Cycling not possible print each piece of track information up to x chars

MUSIC_INFO=$(osascript <<EOF
on titleCase(theString)
	set UpperFirstCharString to do shell script "echo " & character 1 of theString & " | tr [:lower:] [:upper:]"
	set theString to UpperFirstCharString & characters 2 through -1 of theString
	return theString
end titleCase

on appRunning(appName)
	if application appName is running then
		return true
	else
		return false
	end if
end appRunning

on musicPlaying()
	tell application "Music"
		set playerState to (get player state) as text
	end tell
	
	if playerState is "paused" then
		set stateIcon to " "
	else if playerState is "stopped" then
		set stateIcon to " "
	else if playerState is "playing" then
		set stateIcon to " "
	end if
		
	if playerState is not "stopped" then
		return {true, titleCase(playerState), stateIcon}
	else
		return {false, titleCase(playerState), stateIcon}
	end if
end musicPlaying

on getTrackInfo()
	set appRunning to appRunning("Music")
	set musicPlaying to musicPlaying()	
	
	if appRunning is true then
		if item 1 of musicPlaying is true then
			tell application "Music"
				set info to get {name, artist, album} of current track
				return "" & item 3 of musicPlaying & "  " & item 1 of info & " x " & item 2 of info
			end tell
		else
			return item 3 of musicPlaying & " Music Stopped "
		end if
	else
		return "   Music App Not Running "
	end if
end getTrackInfo

getTrackInfo()
EOF
)

display_info()
{
    CONTENT=$1

    case "$CONTENT" in
   "VPN")
        if [[ $(scutil --nc list | grep Connected) ]]; then
            VPN_NAME=$(scutil --nc list| sed -r 's/.*"(.*)".*/\1/'|tail -n1);
            printf " $VPN_NAME Connected ";
        else
            printf " No VPN Connected "
        fi
      ;;
   "INVESTMENTS")
        ETH=$(/usr/bin/curl -s 'rate.sx/eth@1d' | /usr/bin/grep change| /usr/bin/sed -r 's/.*\((.*)\).*/\1/' | /opt/homebrew/bin/strip-ansi); 

        BTC=$(/usr/bin/curl -s 'rate.sx/btc@1d' | /usr/bin/grep change| /usr/bin/sed -r 's/.*\((.*)\).*/\1/' | /opt/homebrew/bin/strip-ansi); 

        VTI=$(/usr/bin/curl -s https://terminal-stocks.herokuapp.com/VTI | /usr/bin/grep - | head -n1 | /opt/homebrew/bin/strip-ansi |/usr/local/opt/python@3.9/libexec/bin/python -c "import sys,re;[sys.stdout.write(re.sub('│.*?│.*?│.*?│\w*?(.*?)\w*?│.*', r'\1', line)) for line in sys.stdin]" | /usr/bin/sed 's/ //g');     

       echo " BTC: $BTC ETH: $ETH VTI: $VTI%" | strip-ansi | rev | cut -c2-| rev | /usr/bin/sed -e 's/$/\%/g'
      ;;
   "MUSIC")
      printf "$MUSIC_INFO"
      ;;
   *)
      printf ""
     ;;
	esac
}

display_info $1