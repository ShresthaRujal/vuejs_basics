# vuecomponentcli
> A Vue.js project with vue-resource

## Build Setup

``` bash
# install dependencies
npm install vue-resource

# example
{
  // GET /someUrl
  this.$http.get('/someUrl').then(response => {
 
    // get body data
    this.someData = response.body;
 
  }, response => {
    // error callback
  });
}
```
