---
sidebar_position: 4
---

# Risk mitigation

In the previous section we outlined the possible targets of a software supply chain attack, gave a brief overview of what can occur if those targets were affected, and the challenges in adopting secure development practices. In this section we will provide an overview on how to use Yubico’s solutions to help mitigate the chance of a successful attack on your environment.

## NIST guidance

In February 2022, NIST released an updated version of their Secure Software Development Framework (SSDF, SP 800-218). Included in this guidance is a category of practices titled Protect the Software (PS). Within the PS category are two practices that apply to our use case:

- **PS.1** - Protect All Forms of Code from Unauthorized Access and Tampering
- **PS.2** - Provide a Mechanism for Verifying Software Release Integrity

**PS.1** primarily deals with access to the code itself. This includes source code, executables, and configuration files used by the software. The primary task in this practice is to ensure that only relevant parties have access to the code, and to ensure that you have the appropriate measures in place to verify that files are legitimate, and come from verified sources.

**PS.2** can be seen as the protections an organization can take to ensure that their software appears legitimate and has not been tampered with. Organizations should ensure that they are using established certificate authorities, and publicly accessible cryptographic keys to help consumers ensure that they are downloading legitimate software.

The content above is meant to act as a high level summary of the guidance provided by NIST. For the full guidance, please see [the document here](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) (The relevant section is found on the table on page 9).

## Risk mitigation techniques

This section with provide actionable paths that you can take to protect the integrity of your software projects. These concepts will be used through the rest of this guide when highlighting the different actions that can be taken to protect the potential targets in your organization.

### Account protection

Account protection is important as it prevents malicious users from gaining access to accounts, and making changes on someone's behalf. Developers would not want someone making changes to their account, or to the code that they have written. Administrators would not want someone with access to their accounts to change repository or organizational settings.

This is primarily done by introducing multi-factor authentication (MFA). This can be taken one step further by introducing phishing-resistant MFA, especially in high-assurance scenarios.

A YubiKey provides two factors of authentication: possession of the security key, and knowledge of an on-device PIN. This gives higher assurance that a user attempting to authenticate is legitimate.

### Commit signing

Commit protection is important as it allows you to verify that the code added to a repository is coming from a trusted source. It is possible to make a commit seem as if it came from someone else by just changing the name and email details in your `git.config` file. In the eyes of git this isn't a problem as the metadata sent with a commit is not meant to act as a form of authentication. In the case of GitHub, you wouldn't be able to push code to another user's GitHub account, this would require authentication. Regardless, even with account protection you would want some form of git signing to combat:

1. Commits coming from a compromised account
2. Commits coming from a machine where your signing key is not present

The YubiKey is able to generate cryptographic keys that are capable of signing commits. This ensures that any commit that is entering your codebase is coming from a legitimate user who has possession of the security key with the signing key present.

### Code signing

Code signing focuses on the ability to check the integrity of software either by your automated pipelines for build/releases, or consumers using your application.

Code signing is important as it allows potential users of executables and scripts to ensure that the material has not been changed after it was signed by the software publisher. On one hand, this will ensure that your consumers have a way to trust the applications that you are providing to them. On the other hand, this allows you to verify software that you are utilizing that was provided by external parties.

The YubiHSM2 is capable of generating a key pair that could be used for code signing. This ensures that the keys used for the signing operation are never leaked and are only present on the physical security device itself; preventing an attacker from using a leaked private key to impersonate your organization when signing a malicious executable.

## Putting it all together

Below is a diagram that will demonstrate an ecosystem that relies on all of the mitigation techniques discussed above.

![Flow demonstrating mitigation techniques](/img/full_flow.png)

On the next page we’ll outline different paths that can be taken by various members in your organization to help protect the integrity of your software projects.
