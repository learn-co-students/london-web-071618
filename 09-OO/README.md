## Instructions
1. Read the below and map out the relationship, draw a diagram.
2. Create methods to correspond with each of the deliverables.
3. Build out examples in the run file, TEST YOUR CODE!

## Property

### Attributes
* address

### Methods
* Property.all
  * Should return all of the property instances
* Property.find_by_address(address)
  * Should return all of the property instances that match the passed in address
* Property#guests
  * Should return all of the guests that have stayed at the property
* Property#add_guest(guest, length)
  * Should associate the property to the guest.

## Stay

### Attributes
* property
* guest
* length

### Methods
* Stay.all
  * Should return all of the instances of Stays
* Stay#property
  * Should return the property associated with the stay instance
* Stay#guest
  * Should return the guest associated with the stay instance


## Guest

### Attributes
* name
* age

### Methods
* Guest.all
  * Should return all of the instances of guests
* Guest#stays
  * Should return all of the stay instances that the guest belongs to
* Guest#properties
  * Should return the address of all of the properties that this guest has visited
* Guest#add_property(property, length)
  * Should associate an guest to a property
