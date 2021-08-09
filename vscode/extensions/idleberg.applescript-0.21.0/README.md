# AppleScript for Visual Studio Code

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.badgen.net/github/release/idleberg/vscode-applescript)](https://github.com/idleberg/vscode-applescript/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.applescript.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.applescript)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/vscode-nsis)](https://circleci.com/gh/idleberg/vscode-applescript)

Language syntax, snippets and build system for AppleScript and JavaScript for Automation

![Screenshot](https://raw.githubusercontent.com/idleberg/vscode-applescript/master/images/screenshot.png)

*Screenshot of AppleScript in Visual Studio Code with [Hopscotch](https://marketplace.visualstudio.com/items?itemName=idleberg.hopscotch) theme*

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install idleberg.applescript`

### CLI

With [shell commands](https://code.visualstudio.com/docs/editor/command-line) installed, you can use the following command to install the extension:

`$ code --install-extension idleberg.applescript`

### Packaged Extension

Download the packaged extension from the the [release page](https://github.com/idleberg/vscode-applescript/releases) and install it from the command-line:

```bash
$ code --install-extension path/to/applescript-*.vsix
```

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or install it using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

```bash
$ ovsx get idleberg.applescript
```

### Clone Repository

Change to your Visual Studio Code extensions directory:

```bash
# Windows
$ cd %USERPROFILE%\.vscode\extensions

# Linux & macOS
$ cd ~/.vscode/extensions/
```

Clone repository as `applescript`:

```bash
$ git clone https://github.com/idleberg/vscode-applescript applescript
```

## Usage

### Building

On macOS, you can make use of the following build commands through the [command-palette](https://code.visualstudio.com/docs/editor/codebasics#_command-palette):

* AppleScript: Run Script – <kbd>Shift ⇧</kbd>+<kbd>Option ⌥</kbd>+<kbd>R</kbd>
* AppleScript: Compile Script – <kbd>Shift ⇧</kbd>+<kbd>Option ⌥</kbd>+<kbd>B</kbd>
* AppleScript: Compile Script bundle
* AppleScript: Compile Application
* JXA: Run Script
* JXA: Compile Script
* JXA: Compile Script bundle
* JXA: Compile Application

### Settings

You can tweak the defaults for this package, `osacompile` and `osascript` in the package settings.

| Setting                    | Default  | Description                                                                                        |
|----------------------------|----------|----------------------------------------------------------------------------------------------------|
| `showNotifications`        | `true`   | Show build notifications indicating success or failure                                             |
| `alwaysShowOutput`         | `false`  | Specify whether to show the output panel on errors only or on each build                           |
| `convertErrorRange`        | `false`  | Convert error range to line/column                                                                 |
| `defaultBuildTask`         | `script` | Specify the default build task when creating a new task file                                       |
| `osacompile.executeOnly`   | `false`  | Save the resulting script as execute-only                                                          |
| `osacompile.stayOpen`      | `false`  | Stay open after run handler                                                                        |
| `osacompile.startupScreen` | `false`  | Show startup-screen                                                                                |
| `osascript.outputStyle`    | -        | The flags argument is a string consisting of any of the modifier characters `e`, `h`, `o`, and `s` |

#### File Encoding

The default character encoding for AppleScript text files is [Mac Roman](https://www.wikiwand.com/en/Mac_OS_Roman). If you wish to change this, you can do so in the settings.

**Example:**

```json
{
  "[applescript]": {
    "files.encoding": "utf16le"
  }
}
```

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
