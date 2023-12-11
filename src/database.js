import mongoose from "mongoose";

mongoose.connect("mongodb://carb:n9dNb8iY7bxF1jke@ac-yhcsrld-shard-00-00.es8jqdi.mongodb.net:27017,ac-yhcsrld-shard-00-01.es8jqdi.mongodb.net:27017,ac-yhcsrld-shard-00-02.es8jqdi.mongodb.net:27017/jwt-bd?ssl=true&replicaSet=atlas-5yir49-shard-0&authSource=admin&retryWrites=true&w=majority")
   
    .then(db => console.log('Base de datos conectada'))
    .catch(error => console.log(error))
