var mysql = require('mysql');
var con = mysql.createConnection({
  host: "101.53.145.113",
  port:"3000",
  user: "root",
  database: "theertha_test"
});

con.connect(function(err) {
	console.log('Connected DB');
});
module.exports = {

					InsertPurchase :function(strPurchase,callback){	
						console.log('-------------------------------------InsertPurchase-------------------------------------------------------------');
						var sql = "INSERT INTO daily_sales_detail  SET ?";						
						con.query(sql,[Sales], function (err, result) {
						  if (err) throw err;
						  else{

						  }
						  
						});				
				},

				InsertDailySales:function(Sales,callback){				
						console.log('-------------------------------------InsertDailySales-------------------------------------------------------------');
						console.log(Sales);
						var sql = "INSERT INTO daily_sales_detail  SET ?";						
							con.query(sql,[Sales], function (err, result) {
								if (err){
									callback('Not Inserted');
								}
							else{								
								AccountSummary(Sales,function(res){
									callback(res);
								});
							}
							
							});
 					  										  
				},
				InsertExpense:function(Sales,callback){				
					console.log('-------------------------------------InsertExpense-------------------------------------------------------------');
					console.log(Sales);
					var sql = "INSERT INTO daily_expense_detail  SET ?";						
						con.query(sql,[Sales], function (err, result) {
							if (err){
								console.log(err);
								callback('Not Inserted');
							}
						else{								
							AccountSummary(Sales,function(res){
								callback(res);
							});
						}
						
						});
															 
			},
			InsertDelivery:function(Sales,callback){				
				console.log('-------------------------------------InsertDelivery-------------------------------------------------------------');
				console.log(Sales);
				// var sql = "INSERT INTO daily_expense_detail  SET ?";						
				// 	con.query(sql,[Sales], function (err, result) {
				// 		if (err){
				// 			console.log(err);
				// 			callback('Not Inserted');
				// 		}
				// 	else{								
				// 		AccountSummary(Sales,function(res){
				// 			callback(res);
				// 		});
				// 	}
					
				// 	});
														 
			},
			
			GetDelivery:function(Sales,callback){										
				console.log('-------------------------------------GetDelivery-------------------------------------------------------------');
					var sql = "select * from daily_sales_detail where date_sale BETWEEN ? AND ? ;";						
					var sql="select person_sale,DATE_FORMAT(date_sale, '%Y-%m-%d') AS date_sale,cash_sale,card_sale,credit_sale,personal_acc_sale,current_acc_sale,paytm_sale from daily_sales_detail where date_sale BETWEEN ? AND ? ;"
					con.query(sql,[Sales.date_sale+'T00:00',Sales.date_sale+'T23:59'], function (err, result) {
					  if (err){
						  callback([undefined]);
					  }
					  else{
							console.log(result);	
							 callback(result);
					  }						  
					});
														 
			},
				
				GetDailySales:function(Sales,callback){										
					console.log('-------------------------------------GetDailySales-------------------------------------------------------------');
						var sql = "select * from daily_sales_detail where date_sale BETWEEN ? AND ? ;";						
						var sql="select person_sale,DATE_FORMAT(date_sale, '%Y-%m-%d') AS date_sale,cash_sale,card_sale,credit_sale,personal_acc_sale,current_acc_sale,paytm_sale from daily_sales_detail where date_sale BETWEEN ? AND ? ;"
						con.query(sql,[Sales.date_sale+'T00:00',Sales.date_sale+'T23:59'], function (err, result) {
						  if (err){
							  callback([undefined]);
						  }
						  else{
								console.log(result);	
					 			callback(result);
						  }						  
						});
 				  										  
				},
			 

				GetReport :function(Sales,callback){
					console.log('-------------------------------------GetReport-------------------------------------------------------------');
				},

				updateDailySales:function(Sales,callback){
					console.log(Sales);
					console.log('-------------------------------------updateDailySales-------------------------------------------------------------');
					var SqlUpadet="update daily_sales_detail SET ? where date_sale=?;";						
						con.query(SqlUpadet,[Sales,Sales.date_sale], function (err, result) {
							if (err){
								callback(['Not Updated']);
							}
						  else{							
					 			callback(['Updated SuccessFully']);
						  }						  
						});
				},

				InsertGrinding :function(Sales,callback){
					console.log('-------------------------------------InsertGrinding-------------------------------------------------------------');
				},
				InsertSales :function(Sales,callback){
					console.log('-------------------------------------InsertSales-------------------------------------------------------------');
				},

			GetCashSummary :function(callback){
					console.log('-------------------------------------GetCashSummary-------------------------------------------------------------');
					var sql = "select * from account_summary";					
					con.query(sql, function (err, result) {
					if(err){[undefined]}
					else{
						callback(result);
					}
					});



				},


		
	};

	function AccountSummary (Sales,callback){
		console.log('-------------------------------------AccountSummary-------------------------------------------------------------');
		if(Sales.cash_sale>0)
		{
			AccountSummaryUpdation('cash',Sales.cash_sale,'sales',function(respo){
              console.log('Cash '+ respo)
			});
		}		
		if(Sales.credit_sale>0)
		{
			AccountSummaryUpdation('credit',Sales.credit_sale,'sales',function(respo){
				console.log('credit '+ respo)
			});
		}
		if(Sales.personal_acc_sale>0)
		{
			AccountSummaryUpdation('saving_account',Sales.personal_acc_sale,'sales',function(respo){
				console.log('current_account '+ respo)
			});
		}

		if(Sales.card_sale>0||Sales.paytm_sale>0||Sales.current_acc_sale>0)
		{
			var totalAmount=Sales.card_sale+Sales.paytm_sale+Sales.current_acc_sale;
			AccountSummaryUpdation('current_account',totalAmount,'sales',function(respo){
				console.log('current_account '+ respo)				
			});
		}
		if(Sales.expense_amount>0){
			var mode='';
			if(Sales.expense_mode=='Cash')mode='cash';
			if(Sales.expense_mode=='Personal')mode='saving_account';
			if(Sales.expense_mode=='Current')mode='current_account';			
				AccountSummaryUpdation(mode,Sales.expense_amount,'expense',function(respo){
					console.log('current_account '+ respo)				
				});	
		}				
	    callback('Insert Success') ;
	   }
	   
	    function AccountSummaryUpdation(accType,amount,type,callback){
			console.log('-------------------------------------AccountSummaryUpdation-------------------------------------------------------------');
			   var sql = "select * from account_summary where account_type ='"+accType+"'";
			   console.log(sql);
			   con.query(sql, function (err, result) {
				 if (err) throw err;
				 else{
					 var amountSummary=result[0];
					 var actAmount=0;
					 var preAmount=amountSummary.actual_amount;
					 if(type=='expense')
					  actAmount=amountSummary.actual_amount-amount;
					 if(type=='sales')
					  actAmount=amountSummary.actual_amount+amount;									
					 var SqlUpadet="update account_summary SET previous_amount= ?, actual_amount=? where account_type =?;";
					 console.log(SqlUpadet);
					 con.query(SqlUpadet,[preAmount,actAmount,accType], function (err, result) {
						if (err) throw err;
						else{
							return callback('Updated'); 	
						}
					 });
																		
				 }
				 
			   });
	   }