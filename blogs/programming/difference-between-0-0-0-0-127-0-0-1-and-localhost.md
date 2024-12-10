---
tags:
  - programming
  - network
---

在日常使用时，遇到了关于下列三个网络地址的疑惑。

- `0.0.0.0`
- `127.0.0.1`
- `localhost`

# localhost

`localhost` 是指当前主机的主机名（hostname）。可以视为一个域名，

可以通过命令 `hostname` 得到
````shell
➜  ~ hostname
xxx-MacBook-Pro.local
````

也可以通过查看 `/etc/hosts`，可以得到 `localhost` 对应的 ip 地址 
````shell
cat /etc/hosts

##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
````

## Loopback

在主机上不需要物理网络连接（网卡）运行网络服务的一种机制

IPv4 保留了 `127.0.0.1/8` 用来运行 `loopback`。其中 `127.0.0.1` 是用来运行 loopback 机制的标准地址。
IPv6 只保留了 `::1` 作为标准地址。

# 127.0.0.1
在 loopback 机制中，指主机的 ip 地址。可以参考 `localhost` 部分的结束

# 0.0.0.0

这个地址有很多不同的用处。这里比较关心下列这处

> In both Windows and Linux, when selecting which of a host's IP address to use as a source IP, a program may specify INADDR_ANY (0.0.0.0).

当指定 `INADDR_ANY`，socket 会绑定在所有的 network interface。

>When INADDR_ANY is
       specified in the bind call, the socket will be bound to all local
       interfaces. 


# Reference
- https://en.wikipedia.org/wiki/Localhost
- https://en.wikipedia.org/wiki/0.0.0.0
- https://stackoverflow.com/questions/20778771/what-is-the-difference-between-0-0-0-0-127-0-0-1-and-localhost