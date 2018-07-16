instructors = [{name: 'Brooke', hometown: 'New York', mood: 'excited'}, {name: 'Daniel', hometown: 'Poland', mood: 'very excited'}, {name: 'Niky', hometown: 'San Francisco', mood: 'super excited'}]

def get_names(instructors)
  # Define a method called get_names that takes an array of instructors and returns just their names
  return instructors.map do |instructor|
    # instructor = {name: 'Brooke', hometown: 'New York', mood: 'excited'}
    instructor.fetch(:name)
  end
  # instructors.map {|instructor| instructor.[:name]}
end

get_names(instructors)

def get_people_from_a_place(people, place)
  # DON'T USE EACH
  # use select
  # return a list of people from place
end

def get_person_by_name(people, name)
  # DON'T USE EACH
  # use find or detect
  # return the first person hash by name
end

def get_tally_of_moods(people)
  # DON'T USE EACH
  # return a hash whose keys are the moods and whose values are the number of times that mood appears
end





# what do the following return?
arr = (1..100).to_a

arr.map do |num|
  num.even?
end

arr.select do |num|
  7
end

