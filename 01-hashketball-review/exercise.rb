instructors = [{name: 'Brooke', hometown: 'New York', mood: 'excited'}, {name: 'Daniel', hometown: 'Poland', mood: 'very excited'}, {name: 'Niky', hometown: 'San Francisco', mood: 'super excited'}]
require 'pry'
def get_names(instructors)
  # Define a method called get_names that takes an array of instructors and returns just their names
  return instructors.map do |instructor|
    # instructor = {name: 'Brooke', hometown: 'New York', mood: 'excited'}
    # binding.pry
    instructor.fetch(:name)
  end
  # instructors.map {|instructor| instructor.[:name]}
end

get_names(instructors)

# each
# - always returns the original array
#
# map collect
# - always returns the same number of items
# - can return a different value for each item
#
# select

#find