db.restaurants.countDocuments({borough: {$in:['Bronx', 'Staten Island', 'Queens']}});

db.restaurants.countDocuments({cuisine: {$ne: 'American'}})

db.restaurants.countDocuments({rating: {$gte: 8}})

db.restaurants.countDocuments({rating: {$lte: 4}})

db.restaurants.countDocuments({rating: {$nin:[5, 6, 7]}});
