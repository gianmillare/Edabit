// Calculate the Profit
// https://edabit.com/challenge/GJn7xcBiCLdCNXFgy

function profit(info) {
    var total_sales = info.sellPrice * info.inventory;
    var total_cost = info.costPrice * info.inventory;

    return Math.round(total_sales - total_cost);
}