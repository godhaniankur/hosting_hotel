
const BASE_URLS = "https://hosting-hotel.onrender.com"

export const authEndpoint ={
    LOGIN_API : BASE_URLS + "/login",
    LOGIN_GOOGLE_API: BASE_URLS  + "/loginWithgoogle",
    HOTEL_ALL_INFO : BASE_URLS + "/allInformation",
    SEND_OTP_API : BASE_URLS + "/otpsend",
    SIGNUP_API_TESTING :BASE_URLS + "/singup",
    SIGNUP_GOOGLE_API:BASE_URLS + "/googleSignup",
    CHANGE_PROFILE_USER :BASE_URLS +  "/changeProfile",
    CHANGE_USER_PASSWORD: BASE_URLS +"/changepassword",
    USER_DETAILS_API: BASE_URLS + "/user"
}

export const RatingOfEndpoint = {
    ALL_RATING_OF_USER : BASE_URLS + "/allReviwes",
    AVRANGE_RATING_HOTEL : BASE_URLS + "/avrageRating",
    USER_RATING_AND_REVIEW : BASE_URLS+"/hotel/rating"
}

export const hotelEndpoint ={
    GET_SINGLE_HOTEL_API : BASE_URLS + "/gethotel",
    BOOK_ROOM_API: BASE_URLS +"/booking/rooms",
    RESISTER_OF_HOTELS : BASE_URLS + "/admin/hotel/information",
    EDIT_HOTEL_DETAIL :BASE_URLS + "/hotels/Edithotel",
    DELETE_HOTEL_API : BASE_URLS + "/hotelDelete",
    ADMIN_CANCEL_TICKET_CONFORMATION:BASE_URLS+"/admin/conformationcancel",
    CUSTOMER_CANCEL_TICKET_REQUSET:BASE_URLS+"/customer/customercancelRequest"
}


export const paymentEndpoint ={
    HOTEL_PAYMENT_BOOK :  BASE_URLS + "/capturepayment",
    HOTEL_PAYMENT_VERIFIRY_PAYMENT :  BASE_URLS + "/verifyPayment",
    PAYMENT_DETAIL_API : BASE_URLS + "/admin/payment",
    FIND_BOOKING_PAYMENT_COMPLETE_API : BASE_URLS + "/bookingcomplete"

}

export const bookingEndpoint ={
    GET_USER_BOOKING_API : BASE_URLS + "/booking",
    GET_ADMIN_BOOKING_API : BASE_URLS + "/getallbooking",
    PUT_ADMIN_EDIT_BOOKING_API : BASE_URLS + "/editbooking"
}