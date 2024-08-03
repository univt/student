# UI kit

`ui-kit` folder may contain:
- Angular components
- mixins and SASS variables in `*.sass` files

## Explicit use

The contents of `*.sass` files cannot be applied automatically such a file is imported.
Users of these files must explicitly call mixins.
This will avoid unexpected side effects and dependence on the order of imports.

## Style for exported elements of `*.sass` files

Exported mixins of `*.sass` files begin with the prefix `app-` and end with the postfix `-mixin`.
For example:

``` sass
@mixin app-flex-column-mixin($row-gap)
  display: flex
  flex-direction: column
  row-gap: $row-gap
```

Exported variables of `*.sass` files begin with the prefix `app-`.
For example:

``` sass
$app-awesome-variable: #042
```

Local elements are encouraged not to be placed in the global scope to avoid erroneous importing in other files.
For example:

``` sass
// Please avoid if it is possible.
$awesome-variable: #042

.awecome {
  color: $awesome-variable
}


// Recommended.
.awecome {
  $awesome-variable: #042

  color: $awesome-variable
}
```
