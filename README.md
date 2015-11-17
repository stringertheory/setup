Setting up a new Mac.

Mostly, I just followed [this guide](http://sourabhbajaj.com/mac-setup/index.html), it has a lot of the major things to do. There are some extra things, though that are jotted down here.

## Homebrew

After getting brew set up so that `brew update` and `brew doctor` run with no problems, run `brew install coreutils`. The Shell section below also manipulates the path so that the GNU versions of lots of core command line utilities are used instead of the OSX defaults.

## Python

After doing everything in the setup section here, make sure to install the packages that are in the `requirements.txt` file in this repository on the system version of python (using sudo). They are useful utilities. The Shell section below will add a snippet to auto-activate virtual environments when a directory has a `.venv` file using 

Edit the `~/.virtualenvs/preactivate` script to print out a nice name for the enviroment when it's activated with `pyfiglet -f standard "env : $1"`

## Shell

Clone [bashit](https://github.com/stringertheory/bash-it) into `~/.bash_it` and run the `install.sh` script in that repository. You may want to check if that fork has diverged and merge from the [origin](https://github.com/Bash-it/bash-it) first.

Change the theme to `stringer` in `~/.bash_profile`.
