# Associations in Rails

## Building a has_many and belongs_to

For our app, we're creating cows and farmers. A farmer `has_many` cows, and a cow `belongs_to` a farmer

- `rails new farmr`

- `rails g resource Farmer name`––this will create a Farmer model, FarmersController, and create a migration for farmers. Remember that we do not need to say `name:string`. The rails generator will default to use a string:

```ruby
class CreateFarmers < ActiveRecord::Migration[5.2]
  def change
    create_table :farmers do |t|
      t.string :name

      t.timestamps
    end
  end
end
```

- We need to tell our Farmer that is `has_many` cows:

```ruby
class Farmer < ApplicationRecord
  has_many :cows
end
```

- Let's generate a Cow and tell it that it `belongs_to` a farmer: `rails g resource Cow name spots:integer farmer:references`

  - the `farmer:references` generator does a few things for us:

    - adds the `belongs_to` to our Cow model:

    ```ruby
    class Cow < ApplicationRecord
      belongs_to :farmer
    end
    ```

    - adds a reference––foreign_key––to our cows table:

    ```ruby
    class CreateCows < ActiveRecord::Migration[5.2]
      def change
        create_table :cows do |t|
          t.string :name
          t.integer :spots
          t.references :farmer, foreign_key: true

          t.timestamps
        end
      end
    end
    ```

---

# Testing our Associations

- `rails db:migrate && rails console`

- From the console we can try to create a new cow:

```ruby
  brad = Cow.new(name: 'brad', spots: 15)

brad.save
   (0.1ms)  begin transaction
  Cow Exists (0.5ms)  SELECT  1 AS one FROM "cows" WHERE "cows"."name" = ? LIMIT ?  [["name", "brad"], ["LIMIT", 1]]
   (0.1ms)  rollback transaction
 => false
```

- Because our cow, brad, `belongs_to` a farmer rails will validate the presence of the `farmer_id` on the cow. In other words, a cow is _dependent upon_ a farmer to exist.

```ruby
angus = Farmer.create(name: 'angus')
esther = Cow.create(name: 'esther', spots: 15, farmer: angus)
```

# SUCCESS

![](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)

---

# Creating a New Cow with our Form

### Seeding our DB

```ruby
# db/seeds.rb
Farmer.create([{name: 'billybob'}, {name: 'jimmy carter'}, {name: 'angelina jolie'}, {name: 'marc the zucc'}])
```

### Creating the Controller and Form:

#### Controller Methods

#### New Cow Form

```html
<h1>Create a Cow</h1>

<%= form_for @cow do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <br>
  <%= f.label :spots %>
  <%= f.number_field :spots %>
  <br>
  <%= f.collection_select :farmer_id, Farmer.all, :id, :name %>
  <br>
  <%= f.submit %>
<% end %>
```

---

#### A Quick Note on Collection Select:

[Collection select](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select) is looking for the following in order:

1.  the method we want to call on `@cow:` farmer_id
2.  the collection we want to use to populate our dropdown with: Farmer.all
3.  the value method; what will show up in our params and as a value in our `<option>` tags: `farmer_instance.id`
4.  the text method; what will show up inside the option tag, what will the user see? `farmer_instance.name`

---

#### Create our Cows Controller

```ruby
# app/controllers/cows_controller.rb
class CowsController < ApplicationController

  def new
    @cow = Cow.new(spots: rand(0..25))
  end

  def create
    @cow = Cow.new(cow_params)
    if @cow.save
      redirect_to @cow
      # same as redirect_to cow_path(@cow)
    else
      render :new
    end
  end

  private
  def cow_params
    params.require(:cow).permit(:name, :spots, :farmer_id)
  end

end
```

---

#### Quick Note about Render vs Redirect:

- redirect is a **GET request**, that calls the cows#new method. This method resets the `@cow` instance variable
- `render :new`
- this will render our `:new` form without a page reload. This allows us to keep the state of our form; `@cow` does not change

---

#### Adding Some Validations:

```ruby
# app/models/cow.rb
class Cow < ApplicationRecord
  belongs_to :farmer
  #belongs_to farmer will also validate the presence and validity of our farmer;
  # the farmer has to exist for this cow to be associated with it

  validates :name, { presence: true, uniqueness: true }
  validates :spots, numericality: { less_than_or_equal_to: 50 }
end
```

#### Displaying errors to our user:

```html
<!-- app/views/cows/new.html.erb -->
<% if @cow.errors.any? %>
  <ul>
    <% @cow.errors.full_messages do |message| %>
    <li><%= message %></li>
    <% end %>
  </ul>
<% end %>
```

---

![](https://media.giphy.com/media/A5pcWMMIEO95S/giphy.gif)

# For every resource we have, we need to:

- Create routes for all required CRUD operations: index, show, new, create, edit, update, destroy
- Define relationships in models and migrations
- Define all relevant methods on the controller
- Handle errors
- migrate and seed data

# anatomy of a controller cheatsheet

```ruby
class CheesesController < ApplicationController
  before_action :set_cheese, only: [:show, :edit, :update, :destroy]
  before_action :set_wines, only: [:new, :edit]

  def index
    @cheeses = Cheese.all
  end

  def show
  end

  def new
    @cheese = Cheese.new
  end

  def create
    @cheese = Cheese.create(cheese_params)
    if @cheese.valid?
      redirect_to @cheese
    else
      flash[:errors] = @cheese.errors.full_messages
      redirect_to new_cheese_path
    end
  end

  def edit
  end

  def update
    @cheese.update(cheese_params)
    if @cheese.valid?
      redirect_to @cheese
    else
      flash[:errors] = @cheese.errors.full_messages
      redirect_to edit_cheese_path(@cheese)
    end
  end

  def destroy
    @cheese.destroy
    redirect_to cheeses_path
  end

  private
  def cheese_params
    params.require(:cheese).permit(:name, wine_ids: [])
  end

  def set_cheese
    @cheese = Cheese.find(params[:id])
  end

  def set_wines
    @wines = Wine.all.sort_by { |w| w.name }
  end
end
```

# form_tag - for deletion

```ruby
<%= form_tag cheese_path(@cheese), method: "delete" do  %>
  <%= submit_tag "Delete Cheese" %>
<% end %>
```

# anatomy of the routing file cheatsheet

```ruby
  resources :regions  # is doing that:

  # alternatively use resources :regions, only: [:index, :new, :show]

  # get "/regions", to: 'regions#index', as: 'regions'
  # get "/regions/new", to: 'regions#new', as: 'new_region'
  # get "/regions/:id", to: 'regions#show', as: 'region'
  #
  # post "/regions", to: 'regions#create'
  #
  # get "/regions/:id/edit", to: 'regions#edit', as: 'edit_region'
  #
  # patch "/regions/:id", to: 'regions#update'
  # put "/regions/:id", to: 'regions#update'
  #
  # delete "/regions/:id", to: 'regions#destroy'
```

# db seed cheatsheet
```ruby
Farmer.create(name: 'Dan')
Farmer.create(name: 'Rishi')

# or as an array of hashes:

Cow.create([{name: 'Moony', farmer_id: 1}, {name: 'Moortha', farmer_id: 1}, {name: 'Remoo', farmer_id: 1}, {name: 'Pormoopine', farmer_id: 2}])
```

# errors cheatsheet
```ruby
<% if flash[:errors] %>
  <ul>
    <% flash[:errors].each do |error| %>
      <li><%= error %></li>
    <% end %>
  </ul>
<% end %>
```
