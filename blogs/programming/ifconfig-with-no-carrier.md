---
tags:
  - programming
  - network
---

这篇文章记录一下，我遇到在执行 `ip addr` 的关于 `NO CARRIER` 的问题，发现一些 `docker network ls` 得到一些 `bridge` 出现了这种问题

wiki 中给出了下列这段话来解释
> Linux's network stack uses the NO CARRIER status for a network interface that is turned on ("up") but cannot be connected because the physical layer is not operating properly, e.g. because an Ethernet cable is not plugged in.

表示这个网卡处于打开状态，但是物理上却没有接通。

# Reference
- https://en.wikipedia.org/wiki/NO_CARRIER
- https://man.archlinux.org/man/networkctl.1.en
- https://unix.stackexchange.com/questions/771036/docker-bridges-have-no-carrier-with-sytemd-networkd