---
sidebar_position: 3
---

# Deployments

This guide will provide steps that can be taken to protect the integrity of your deployed software, to ensure that corrupted software is not provided to your users.

## Overview

Deployments will apply to any finished executables required to install or use your software from an end user consumers computer.

- Ensure that prior to building an application, that all code additions came from a valid source
- Ensure that we can provide proof to a consumer that the software has not been tampered with
- Ensure that we can verify that software being installed locally has not been tampered with

Overall, the main goal of this section is to ensure that you are able to provide proof that your software was not tampered with prior to your customers installing it on their devices.

## Code signing

As a distributor of software you want to ensure that your consumers are protected from downloading corrupted or illegitimate versions of your application. Code signing can help you protect your users by providing proof that the application was signed by your organization, and that the application has not been altered after it was signed.

Operating systems and app stores are able to use the digital certificate created by the code signing process to ensure that the application came from a trusted source; and inversely can alert the user if no certificate was found, or if the certificate is invalid.

One issue that could occur during this process is the mismanagement of the signing keys that were used to sign the application. If an attacker were to gain access to the private key, they could sign their corrupted executables with your private key to make them appear legitimate. The best way to mitigate this risk is to leverage a hardware security module (HSM) to securely store and manage your private signing keys.

The YubiHSM2 is capable of generating a key pair that could be used for code signing.

Follow the steps on the link below to see an example of how to sign a JAR file using the YubiHSM2.

- [Configuring YubiHSM 2 for Java code signing](https://github.com/YubicoLabs/yubihsm-java-enrollment)

The YubiHSM2 isn't the only Yubico tool that can be used for code signing. Your YubiKey can also utilize its PIV module to perform code signing. See the links below for examples on signing Android, and Apple based (iOS, macOS) applications

- [Mac code signing](https://developers.yubico.com/PIV/Guides/Mac_code_signing.html)
- [Android code signing](https://developers.yubico.com/PIV/Guides/Android_code_signing.html)
