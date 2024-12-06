const booking_of_rooms = require("../model/booking_of_rooms")


exports.totalcount = async (req,res) =>{
    try{
        
        const user = await booking_of_rooms.aggregate([
            {
                $lookup:{
                    from:"hotels",
                    localField:"hotelId",
                    foreignField:"_id",
                    as:"booking_Details"
                }

            },
            {
                $addFields:{
                    booking_Detailss:{
                        totalyear:{$sum:"$booking_Details.Price"}
                    },
                   
                }
            }
        ])

        console.log("user",user)

    }catch(error){
        console.log("Internal server Error",error)
    }
}