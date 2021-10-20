import sys
import os

print(f"\n**M O V I N G  A S C E N D  C S V**\nNumber of Files: {len(sys.argv) -1}")
for i, file in enumerate(sys.argv):
    # First file is the actual script
    if i == 0: continue
    
    # Escape the file name. There is probably 
    # a way better way of doing this but I'm 
    # a dumb dumb.
    escaped_file = ""
    for i in range(len(file)):
        if file[i] == " ":
            escaped_file += "\\ "
        else:
            escaped_file += file[i]

    # Move the File
    print(f"Moving ~/Downloads/{escaped_file} to '~/Users/brandon/Documents/Work/Metabase Data/{escaped_file}'")
    os.system(f"mv ~/Downloads/{escaped_file} '/Users/brandon/Documents/Work/Metabase Data/{escaped_file}'")
# Script End 
print("Done")


