// Is it Time for Milk and Cookies?
// https://edabit.com/challenge/hPWnaSckJke5FXNEH

function timeForMilkAndCookies(date) {
    const month = date.getMonth();
    const day = date.getDate();
    return (month == 11 && day == 24);
}