const {Op}=require("sequelize");

const { City }=require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
             const city=await City.create({name});
             return city;
        }catch(error){
            throw{error};
        }
    }

    async deleteCity(cityId){
        try{
           await City.destroy({
            where:{
                id:cityId
            }
           });
           return true;
        }catch(error){
            throw{error};
        }
    }
    
    async updateCity(cityId,data){
      try {
        //The below approach also works bbut will not return updated object 
        // if we are using PQSQL then returning: true  can be used, else not 
        // const city=await City.update(data,{
        //     where:{
        //         id: cityId
        //     }  
        // });
        // for getting updated data in mysql we use the below approach
        const city=await City.findbyPk(cityId);
        city.name=data.name;
        await city.save();
        return city;
     } catch (error) {
        throw(error);
     }
    }
    async getCity(cityId){
     try {
        const city=await City.findbyPk(cityId);
        return city;
     } catch (error) {
        throw(error);
     }
    }
    async getAllCities(filter){
        try {
            if(filter.name){
                  const cities=await City.findAll({
                    where:{
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
            
                  });
                  return cities;
            }
            const city=await City.findAll();
            return city;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports=CityRepository;