Setting up a new Mac.

Mostly, I just followed [this guide](http://sourabhbajaj.com/mac-setup/index.html), it has a lot of the major things to do. There are some extra things, though that are jotted down here.

## Shell

Make sure `~/.bash_profile` is sourcing the `~/.bashrc` with `if [ -f ~/.bashrc ]; then . ~/.bashrc; fi`.

## Homebrew

After getting brew set up so that `brew update` and `brew doctor` run with no problems, run `brew install coreutils` and then add the following to your `~/.bash_profile` or `~/.bashrc` so that the GNU versions of lots of core command line utilities are used instead of the OSX defaults.

```
export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"
```

## Python

After doing everything in the setup section here, make sure to install the packages that are in `requirements.txt` on the system version of python. They are useful utilities.

After installing virtualenvwrapper, add a snippet to auto-activate virtual environments when a directory has a `.venv` file using 

```
WORKON_HOME=~/.virtualenvs
mkdir -p ${WORKON_HOME}
vew=/usr/local/bin/virtualenvwrapper_lazy.sh
if [ -e ${vew} ]; then
   source ${vew}
fi

# Call virtualenvwrapper's "workon" if .venv exists.  This is modified from--
# http://justinlilly.com/python/virtualenv_wrapper_helper.html
# which is linked from--
# http://virtualenvwrapper.readthedocs.org/en/latest/tips.html#automatically-run-workon-when-entering-a-directory
check_virtualenv() {
    if [ -e .venv ]; then
        env=`cat .venv`
        if [ "$env" != "${VIRTUAL_ENV##*/}" ]; then
            echo ".venv in directory, calling workon ${env}. check bashrc for details"
            workon $env
        fi
    fi
}
venv_cd () {
    builtin cd "$@" && check_virtualenv
}
# Call check_virtualenv in case opening directly into a directory (e.g
# when opening a new tab in Terminal.app).
check_virtualenv
alias cd='venv_cd'
```

Edit the `~/.virtualenvs/preactivate` script to print out a nice name for the enviroment when it's activated with `pyfiglet -f standard "env : $1"`
