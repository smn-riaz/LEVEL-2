# tour-and-travel-server




User
Tour
Review


User {
    name
    email
    age
    photo
    role -> user, admin
    status -> active, inactive
}


Tour {
    name
    duration
    rating
    price
    coverImage
    image[]
    startDate
    tourLocation
}



Review {
   review
   rating
   tour -> ref
   user -> ref 
}