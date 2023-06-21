---
sidebar_position: 2
---

# Targets and challenges

In this section we will discuss targets associated with software supply chain attacks. This will give you an understanding of the primary targets in your organization, which can be composed of both your people and processes.

We will also discusses challenges that may prevent organizations from implementing robust secure software development processes.

Note that this material is not encompassing of every risk associated with this topic, and is focused on a few use cases relevant to our subject.

## Targets of software supply chain attacks

### Developers

Any topic that relates to software development will have developers at the forefront. The term developers is used to describe this persona, but this can be encompassed by any member of your organization who contributes code/material to your software projects, including: architects, technical writers, designers, and more. This isn’t limited to just people in your organization, this can also include 3rd party developers being contracted by your company, and the developers who maintain the open source or SaaS projects being leveraged from your software.

Compromising a developer's account would allow an attacker to add their own malicious functions to a software project, making them a prime target.

### Administrators

Another target will be the administrators in your organization. This can be made up of the people who have admin level permissions on your developer tooling (like source control tools), identity providers (for internal RBA and permissioning), or infrastructure (for both cloud and on-premise resources).

Administrators get targeted due to their ability to add/change/remove configurations and permissions that would otherwise prevent unwanted access or actions. For example, an attacker could use a compromised administrator account to remove branch protection rules from your code repository that would have prevented a merge to main without approvals. Another example is a compromised administrator account being used to grant unrestricted access to place files in a production level server.

### Deployments

Once an application has been developed then it's time to get it into the hands of your users. Users will download your application for use in their local environments, such as a desktop or native mobile application. While you may have a trusted place for users to download your application, attackers may compromise this host in order to distribute corrupted software. For instance, attackers may have:

- Corrupted the downloadable executable that is posted to your website
- Convinced a user to download the executable from an untrusted source

In both cases, your users will have downloaded software that has been corrupted, and is not part of your official release.

## Challenges in securing software supply chains

While secure software development practices are beneficial to any development effort, there are still challenges that may prevent developers and organizations from adopting these practices. This section will outline a set of these challenges in order to demonstrate why these practices aren't widely used.

### Unfamiliar with tooling

Some developers, and administrators, may not be familiar with the tooling that can be used to secure their development practices. If no one on the team is familiar with these concepts/tools, then they will never become adopted.

Adoption also requires that the computers used for development have the required tooling on them. If this is an enterprise environment, then a developer may need to request SSH and GPG tools, along with any admin level permissions required to run them. If these tools aren't readily available, then it will hinder a developers productivity.

### Sacrificing developer efficiency

Some developers may see secure software development practices as hindering to their ability to develop code. Developers may not want to enter in OTP codes, or approve authentication requests from a mobile application every time they need to authenticate through git. Developers don't want the burden to ping other members of their team to ensure that code came from a trusted source. Developers don't want to spend hours or days configuring their local environment to utilize tools like SSH and GPG.

### Dependency on SaaS, OSS, and MSPs

The use of Software-as-a-service (SaaS) and open-source software (OSS) tools has continued to increase. More and more developers are including code that they did not write into their solutions. Enterprises that leverage managed service providers (MSPs) are now also allowing external developers to contribute to their software projects. Developers now need to manage the complexities of secure software development and tooling not just for their organization, but for the external ones that are contributing to a project.
