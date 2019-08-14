# global
This directory contains sass **classes** (_using **%** placeholder selector_), **mixins**, **variables** and **functions**. Files in this directory does not compile to any CSS, they are meant to be imported in other `.scss` files and use for dynamic interpolation and computation.

# import alias
This import will load all the global artifacts in the current `.scss` file.

```scss
@import '~scss-global';
```