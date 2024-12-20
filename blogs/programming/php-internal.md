---
tags:
  - programming
  - laravel
---

# PHP Internal

尝试分析一下 PHP 内部实现。

## Run a PHP script



## Zend Engine

### Rounding

参考 [floating point RFC](http://wiki.php.net/rfc/rounding)

## SAPI

Server Application Programming Interface(SAPI) 是调用 Zend Engine 的入口。

### CLI SAPI

### FPM SAPI

### embed SAPI

### GGI SAPI

### PHPDBG SAPI

## Opcode JIT

参考 [the JIT RFC](https://wiki.php.net/rfc/jit)


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