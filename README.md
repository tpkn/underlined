# Underlined [![npm Package](https://img.shields.io/npm/v/underlined.svg)](https://www.npmjs.org/package/underlined)
The module draws a string of characters of a certain length


Make sure you use a monospaced font!


## API
```javascript
Underlined(input[, options])
```

### input
**Type**: _String_   


### options
**Type**: _Object_   


### options.symbol
**Type**: _String_   
**Default**: `-`   

Underline character


### options.with_string
**Type**: _Boolean_   
**Default**: `true`   

Do include input string into result


### options.top
**Type**: _Boolean_   
**Default**: `false`   

Draw line at the top


### options.bottom
**Type**: _Boolean_   
**Default**: `true`   

Draw line at the bottom






## Usage
```javascript
Underlined('Lorem ipsum dolor sit amet, consectetur adipisicing elit');
```

```
Lorem ipsum dolor sit amet, consectetur adipisicing elit
--------------------------------------------------------
```



```javascript
Underlined('Lorem ipsum dolor sit amet, consectetur adipisicing elit', { top: true });
```

```
--------------------------------------------------------
Lorem ipsum dolor sit amet, consectetur adipisicing elit
--------------------------------------------------------
```



```javascript
Underlined('Lorem ipsum dolor sit amet, consectetur adipisicing elit', { symbol: '+', with_string: false });
```

```
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```


