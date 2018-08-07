
IF YOU WANT TO METHOD OVERRIDE

```html
<input type="hidden" name="_method" value="patch" />
```

in `config.ru`
```ruby
use Rack::MethodOverride
```
