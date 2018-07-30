class Firefighter < ActiveRecord::Base

  def identify
    p "my name is #{name} and I'm from division #{division}"
  end

  def change_division(new_division)
    self.division = new_division
  end
end
