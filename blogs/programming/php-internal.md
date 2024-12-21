---
tags:
  - programming
  - laravel
---

# PHP Internal

尝试分析一下 PHP 内部实现。

## Run a PHP script



## Zend Engine

### Zend Compiler

Zend Compiler 是 Zend Engine 的一部分，负责将 PHP 代码编译成 Zend 中间代码(Zend Intermediate Code, ZIC)。

- [PHP-7-Virtual-machine](https://nikic.github.io/2017/04/14/PHP-7-Virtual-machine.html)

### Rounding

参考 [floating point RFC](http://wiki.php.net/rfc/rounding)

## SAPI

Server Application Programming Interface(SAPI) 是调用 Zend Engine 的入口。

### CLI SAPI

PHP Cli command.

可以在 `/sapi/cli/php_cli.c` 中找到 main 函数。

### FPM SAPI

可以在 `/sapi/fpm/fpm_main.c` 中找到 main 函数。

### embed SAPI

可以通过 C 语言直接调用 Zend Engine 的相关函数

### GGI SAPI

### PHPDBG SAPI

## Extension


## Opcode JIT

参考 [the JIT RFC](https://wiki.php.net/rfc/jit)

## TSRM

Thread Safe Resource Manager, 线程安全资源管理器。在 PHP 处理 request 的时候使用 thread 模式而不是 process 模式。

## Zend Memory Manager

封装 C 语言的 malloc/free 等内从控制函数，并提供了 request 级别的内存管理。

## Scripts

一些 php 相关的可执行脚本

### php-config

### phpize


### Reference
- [the JIT RFC](https://wiki.php.net/rfc/jit)
- [DynAsm](https://luajit.org/dynasm.html)
- [The unofficial DynASM Documentation](https://corsix.github.io/dynasm-doc/tutorial.html)
- [AddressSanitizer](https://github.com/google/sanitizers/wiki/AddressSanitizer)
- [valgrind](https://valgrind.org/)
- [test the jit with amd64 and arm64](https://www.docker.com/blog/faster-multi-platform-builds-dockerfile-cross-compilation-guide/)



## Reference

- https://php.github.io/php-src/introduction/high-level-overview.html
- https://wiki.php.net/internals
- https://www.phpinternalsbook.com/index.html
- https://en.wikipedia.org/wiki/Three-address_code