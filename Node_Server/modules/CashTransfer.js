module.exports = {


    InsertCashTrasfer :function(cashTrasferDetail,callback){				
        console.log('-------------------------------------InsertDailySales-------------------------------------------------------------');
        console.log(cashTrasferDetail);
        var sql = "INSERT INTO cash_transfer_detail  SET ?";						
            con.query(sql,[cashTrasferDetail], function (err, result) {
                if (err){
                    callback('Not Inserted');
                }
            else{								
                AccountSummary(cashTrasferDetail,function(res){
                    callback(res);
                });
            }
            
            });
                                                 
}

}

function accountSummaryUpdate (cashTrasferDetail,callback){
    var toModefromMode='';
    if(cashTrasferDetail.transferFrom=='Cash')fromMode='cash';
	if(cashTrasferDetail.transferFrom=='Personal')fromMode='saving_account';
    if(cashTrasferDetail.transferFrom=='Current')fromMode='current_account';
    var toMode='';
    if(cashTrasferDetail.transferTo=='Cash')toMode='cash';
	if(cashTrasferDetail.transferTo=='Personal')toMode='saving_account';
	if(cashTrasferDetail.transferTo=='Current')toMode='current_account';
	AccountSummaryUpdation(fromMode,cashTrasferDetail.transferAmount,'subract',function(respo){
        console.log('summary_account '+ respo)				
    });
	AccountSummaryUpdation(toMode,cashTrasferDetail.transferAmount,'add',function(respo){
        console.log('summary_account '+ respo)				
    });

    callback('Insert Success') ;
}

function summaryUpdation(accType,amount,type,callback){
    console.log('-------------------------------------AccountSummaryUpdation-------------------------------------------------------------');
       var sql = "select * from account_summary where account_type ='"+accType+"'";
       console.log(sql);
       con.query(sql, function (err, result) {
         if (err) throw err;
         else{
             var amountSummary=result[0];
             var actAmount=0;
             var preAmount=amountSummary.actual_amount;
             if(type=='subract')
              actAmount=amountSummary.actual_amount-amount;
             if(type=='add')
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
