var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, taxRates)
{
  var results = {};
  for (i = 0; i < salesData.length; i++)
   {
      var obj = salesData[i];
      var salesSum = 0;
      for(var y = 0 ; y < obj.sales.length; y++)
      {
        salesSum += obj.sales[y];
        //console.log(obj.sales[y]);
        //return salesSum;
      }
        var taxesSum = salesSum * taxRates[obj.province];
      if (!(obj.name in results))
      {
        results[obj.name] = {totalSales: salesSum, totalTaxes: taxesSum};
      }
      else
      {

        results[obj.name].totalSales += salesSum;
        results[obj.name].totalTaxes += taxesSum;
      }
    }
return results;
}
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);