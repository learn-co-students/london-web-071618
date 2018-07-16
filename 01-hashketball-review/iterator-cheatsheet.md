### Map/Collect

* creates a new array containing the values returned by the block
* return array will be the same size as the original array
* does not mutate original array
* use when you want to get some data related to the original array for each element in it
* example: I want to get a list of students' first names

```ruby
['Niky Morgan',
  'Brooke Yalof',
  'Steven Balasta',
  'Rishi Tirumala',
  'Dan Kaczmarczyk'
].collect { |full_name| full_name.split(' ').first }
#=> ['Niky', 'Brooke', 'Steven', 'Rishi', 'Dan']
```

### Select

* returns a new array containing all elements of the initial array for which the given block returns true
* return array will be less than or equal in size to the original array because you are selecting only matching elements
* does not mutate original array
* use when you want to find matches out of an array
* example: I want a list of students who's names start with 'M'

```ruby
['Niky Morgan',
  'Brooke Yalof',
  'Steven Balasta',
  'Rishi Tirumala',
  'Dan Kaczmarczyk'
].select { |name| name.start_with?('R') }
#=>  ['Rishi Tirumala']
```

### Each

* calls the given block once for each element in the array
* returns original array
* does not mutate original array
* use when you want to perform some other task based on information in the array
* example: Let's say I build a slackbot that would send a message to each instructor I pass to it

```ruby
['Niky Morgan',
  'Brooke Yalof',
  'Steven Balasta',
  'Rishi Tirumala',
  'Dan Kaczmarczyk'
].each { |instructor|  send_a_slack_message_to(instructor) }
#=>  ['Niky Morgan',
  'Brooke Yalof',
  'Steven Balasta',
  'Rishi Tirumala',
  'Dan Kaczmarczyk'
]
```

* note: though this method returned the array, it also executed other code which sent slack messages to all these

### Find/Detect

* returns the first element for which block is true
* returns the element itself, not an array
* does not mutate original array
* use when you expect only one match from a unique attribute, or would accept any match

```ruby
[
  { name: 'Avi Flombaum',
    status: 'headmaster'
  },
  { name: 'Brook Yalof',
    status: 'instructor'
  },
  { name: 'Dan Kaczmarczyk',
    status: 'instructor'
  }
].find { |person|  person[:status] == 'headmaster'}
#=> { name: 'Avi Flombaum', status: 'headmaster'}
```

## A Blog Post Link

http://code-worrier.com/blog/map-and-next/