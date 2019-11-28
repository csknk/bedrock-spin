Spin up a Bedrock Project
=======================================
This script:

- Sets up a directory and environment for your project
- Downloads and installs a [Bedrock][2] project to your new project directory
- Can be either a subdirectory of localhost (for dev) or a standalone URL (for dev, staging or production)
- Generates (pseudo) random salts internally without calling to the WP secret key generator
- Generates strong passwords for the database and the first WordPress admin user
- Creates a new project database
- Configures database for WordPress (using WP-CLI)
- Builds the Bedrock config (.env) with DB connection, environment etc.
- Optionally install & setup a new WP theme based on Sage (using Composer)
- Optionally install Sage Soil plugin (using Composer)
- Optionally create and enable an Apache virtual host configuration ('standalone' URL only)
- Optionally create a new GitHub repo for your project and make a first commit

Requirements
------------
- [Composer](https://getcomposer.org/), which should be referenced in your $PATH
- [WP-CLI](http://wp-cli.org/)

Get Started
-----------
1. Clone this repo to a suitable location
2. Create a symlink to `bedrock-spin` in your $PATH
3. Run the script

Example symlink creation:
~~~
sudo ln -s ~/public-bash-projects/bedrock-spin/bedrock-spin /usr/local/bin/bedrock-spin

# Run the script by entering `bedrock-spin` in a terminal.
~~~

Installing Sage Starter Theme
-----------------------------
The script provides an option for setting up a custom theme based on the [Sage][1] starter theme.

When prompted for a BrowserSync URL, you should enter your development URL (which will have been previously configured by means of this script).

Hosts File
----------
For development on Linux LAMP stack, you need to amend `/etc/hosts` file after setup. Set the development URL that you set to reference your localhost IP address:

```bash
# /etc/hosts

# Local Dev
127.0.0.1	your-dev-site.local

```

TODO
----

### ACF
Provide an option to install ACF pro by means of composer.

This will need to add the ACF token to `.env` and install `philippbaschke/acf-pro-installer` Composer package.
[https://github.com/PhilippBaschke/acf-pro-installer](https://github.com/PhilippBaschke/acf-pro-installer)

### Carawebs Themehelper
Provide an option to install Carawebs themehelper into the new theme (Composer)

### Carawebs Address
Provide an option to install via Composer.

References
----------
- [Article on the use of the Linux tr(translate) command](http://www.thegeekstuff.com/2012/12/linux-tr-command/)
- [tr man page](http://ss64.com/bash/tr.html)
- [Expand to a string with the result of the command executed](http://stackoverflow.com/a/25215059/3590673)
- [Color in BASH scripts (SO answer)](http://stackoverflow.com/a/5947802/3590673)

[1]: https://github.com/roots/sage
[2]: https://github.com/roots/bedrock
