import sys
import os

print(f"\n**Moving PDFs from ~/Dowloads to ~/Documents/Document Upload/**\nNumber of Files: {len(sys.argv) -1}")
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
    print(f"Moving ~/Desktop/{escaped_file} to ~/Documents/Document Upload/{escaped_file}")
    os.system(f"mv ~/Desktop/{escaped_file} ~/Documents/Document\ Upload/{escaped_file}")
# Script End 
print("Done")
