//page 1

* List of all cities
> http://localhost:8000/locations/
* List of all restaurants
>http://localhost:8000/restaurant
* Restaurants filtering on StateID
>http://localhost:8000/restaurant?stateId=2
* Restaurants filtering on stateId & mealID
>http://localhost:8000/restaurant?stateId=2&mealId=2
* List of meals
>http://localhost:8000/meals


//Page 2
* Restaurants on the basis to mealType
>http://localhost:8000/restaurant?mealId=2
* Restaurants wrt mealType + CuisineType
>http://localhost:8000/filter/4?cuisineId=2
* Restaurants wrt mealType + cost
>http://localhost:8000/filter/4?hcost=1000&lcost=200
>http://localhost:8000/filter/4?hcost=1000&lcost=200&cusineId=4
* Sort on the basis of price 
>http://localhost:8000/filter/4?hcost=10000&lcost=200&sort=-1
* Pagination
>http://localhost:8000/filter/4?cusineId=4&skip=0&limit=5




