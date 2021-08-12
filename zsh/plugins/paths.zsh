# P A T H S

# P A T H
# Not sure what the issue is but python programs installed by one version don't seem to see programs installed by other versions it may be wise to defualt to 3.7 pip3_7 install some-package
# ZSH Specific
# https://stackoverflow.com/questions/11530090/adding-a-new-entry-to-the-path-variable-in-zsh/18077919#18077919
path+=("/Users/brandon/.asdf/installs/python/3.7.11/bin")
path+=("/Users/brandon/.cargo/bin")
path+=("$HOME/.config/bin")
path+=("/usr/local/opt/python/libexec/bin")
path+=("$GOPATH/bin")
path+=("/Users/brandon/Library/Python/3.7/bin") # Not sure if this is okay prepended or if it should be appended
export PATH

