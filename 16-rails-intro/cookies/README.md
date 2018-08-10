# How is Rails Different?

1. Routing doesn't happen in the controller. It happens in `config/routes.rb`


Sinatra:
```ruby
get "/cookies" do
  #some code
  # some render
end
```


Rails:

```ruby
def index
  # render all cookies
end
```
