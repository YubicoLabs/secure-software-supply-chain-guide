#!/bin/bash

# Helper function to print errors
print_error() {
  RED='\033[0;31m'
  NC='\033[0m' # No Color
  echo -e "[${RED}ERROR${NC}] $1 \n"
}

# Helper function to print message
print_note() {
  BLUE='\033[1;34m'
  NC='\033[0m' # No Color
  echo -e "[${BLUE}STATUS${NC}] $1 \n"
}

# Helper function to print message
print_action() {
  GREEN='\033[0;32m'
  NC='\033[0m' # No Color
  echo -e "[${GREEN}ACTION${NC}] $1 \n"
}

print_note "Bootstrapping your development environment"

if [ -z "$1" ]
then
  print_error "No email supplied"
  exit
fi

MY_EMAIL=$1

# Check dependencies
print_note "Checking dependencies"
sleep 2

## Check for git
if ! git -v &> /dev/null
then
  print_error "Git not present - please install"
  exit
fi

## Check for GH CLI
if ! gh --version &> /dev/null
then
  print_error "GH CLI not present - please install"
  exit
fi

## Check for ssh
if ! gh --version &> /dev/null
then
  print_error "SSH not present - please install"
  exit
fi

# Auth into the GH CLI, using the browser flow
#   Assumption is that the developer has already added their 
#     MFA factor to their GitHub account for browser based auth
#   This step will allow us to use the GH CLI to add SSh keys
#     auth and signing
#   -s defines the scopes needed to add SSH auth and signing keys, respectively 
#   -h could be replaced if you are not using the default GitHub host (i.e enterprise)
#   -w notes to use the web flow
#   -p protocol to auth as https, as we don't currently have an SSH auth key

print_note "Authenticating to the GH CLI \nPlease follow the steps presented on your terminal"
print_note "When prompted to login with credentials, select Yes"
sleep 2

gh auth login -w -p https -h github.com -s admin:public_key -s admin:ssh_signing_key

sleep 2

# Validate if the auth ceremony was successful
gh auth status 2> /dev/null || exit
if ! gh auth status &> /dev/null
then
  print_error "Auth failed, please try again by running this script"
  exit
fi

echo -e "\n"

print_note "Auth successful"

sleep 2

# Generate a resident SSH key on your YubiKey
#   Our example is leveraging ed25519, but feel free to use ecdsa
#   Ensure that you use the sk option to use your security key
#   Resident keys are our preferred option, but can be removed
#     Resident keys will help with portability across different dev devices
#     While stil being bound to the same secure element
print_note "Generating SSH key on YubiKey"
print_action "After entering your device PIN, please tap your key for confirmation"
sleep 2
if ! ssh-keygen -t ed25519-sk -C $MY_EMAIL -O resident -O application=ssh:github@$MY_EMAIL -f $HOME/.ssh/auto_generated_key &> /dev/null
then
  print_error "Key generation not successful, please try again by running this script"
  exit
fi

# Adding SSH key to local SSH agent
#   These steps are being done in accordance to the GH documentation

echo -e "\n"

print_note "Adding new key to the local SSH agent"
sleep 2

eval "$(ssh-agent -s)"
touch $HOME/.ssh/config

echo "Host github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/auto_generated_key" >> $HOME/.ssh/config

ssh-add $HOME/.ssh/auto_generated_key

echo -e "\n"

# Adding SSH key to your account using the GH CLI
print_note "Adding SSH key to your GitHub account"
sleep 2

if ! gh ssh-key add $HOME/.ssh/auto_generated_key.pub -t "Auto-generated key" --type authentication &> /dev/null
then
  print_error "Failed to add authentication key to your account"
  exit
fi

if ! gh ssh-key add $HOME/.ssh/auto_generated_key.pub -t "Auto-generated key" --type signing &> /dev/null
then
  print_error "Failed to add signing key to your account"
  exit
fi

print_note "Key upload successful"
sleep 2

# Configure our global git variables to perform gpg commit signing using our SSH key
print_note "Configuring Git to sign commits with your SSH key"

git config --global gpg.format ssh
git config --global user.signingkey $HOME/.ssh/auto_generated_key.pub
git config --global commit.gpgsign true

# Logout of the GH CLI, we want to rely on our SSH key going forward
print_note "Logging out of the GH CLI"
gh auth logout

# Ensure that the SSH key can be used to authenticate to GH using SSH
print_note "Attempting to test SSH connection with GitHub"
print_action "Please tap your key to confirm user presence"
ssh -T git@github.com

print_status "Bootstrapping successful!"
