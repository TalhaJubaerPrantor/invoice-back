module.exports = ({ name, price1, price2, receiptId }) => {
   // price1==address
   // receiptId==phone
   // price2==price
	const today = new Date();

	return `
    <!doctype html>
      <html>
            <head>
               <meta charset='utf-8'>
               <title>PDF Result Template</title>
               <style>
                  .invoice-box {
                     max-width: 300px;
                     height:200px
                     margin: auto;
                     padding: 30px;
                     border: 1px solid #eee;
                     box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                     font-size: 16px;
                     line-height: 24px;
                     font-family: 'Helvetica Neue', 'Helvetica';
                     color: #555;
                  }
                  .margin-top {
                     margin-top: 50px;
                  }
                  .justify-center {
                     text-align: center;
                  }
                  .invoice-box table {
                     width: 100%;
                     line-height: inherit;
                     text-align: left;
                  }
                  .invoice-box table td {
                     padding: 5px;
                     vertical-align: top;
                  }
                  .invoice-box table tr td:nth-child(2) {
                     text-align: right;
                  }
                  .invoice-box table tr.top table td {
                     padding-bottom: 20px;
                  }
                  .invoice-box table tr.top table td.title {
                     font-size: 45px;
                     line-height: 45px;
                     color: #333;
                  }
                  .invoice-box table tr.information table td {
                     padding-bottom: 40px;
                     width: 0%;
                  }
                  .invoice-box table tr.heading td {
                     background: #eee;
                     border-bottom: 1px solid #ddd;
                     font-weight: bold;
                  }
                  .invoice-box table tr.details td {
                     padding-bottom: 20px;
                  }
                  .invoice-box table tr.item td {
                     border-bottom: 1px solid #eee;
                  }
                  .invoice-box table tr.item last td {
                     border-bottom: none;
                  }
                  .invoice-box table tr.total td:nth-child(2) {
                     border-top: 2px solid #eee;
                     font-weight: bold;
                  }
                  @media only screen and (max-width: 600px) {
                     .invoice-box table tr.top table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                     }
                     .invoice-box table tr.information table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                     }
                  }
               </style>
            <head>
            <body>
               <div class="invoice-box">
                  <table cellpadding="0" cellspacing="0">
                        <tr class="top">
                           <td colspan="2">
                              <table>
                                    <tr>
                                       <td class="title">
                                          <img
                                             src="https://shauqh.com/wp-content/uploads/2024/07/Orange-Blue-Minimalist-Engineering-Logo-800x800.png"
                                             style="width: 100%; max-width: 156px;"
                                          />
                                       </td>
                                       <td>
                                           Date: ${`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}.`} 
                                           
                                       </td>
                                    </tr>
                              </table>
                           </td>
                        </tr>
                        <tr class="information">
                           <td colspan="2">
                              <table>
                                    <tr>
                                       <td>
                                          Receipt Number:  <br>
                                          <b>Shauqh Luxury</b>
                                          <br>
                                            487, middle monipur, mirpur-2, <br> Dhaka -1216 <br>
                                            shauqhluxury@gmail.com
                                          
                                       </td>
                                       <td>
                                          ${name} <br>
                                          <span>${price1} 
                                          <span>
                                          <br/>
                                            <b>${receiptId}</b>
                                          </span>
                                       </td>
                                    </tr>
                              </table>
                           </td>
                        </tr>
                        <tr class="heading">
                           <td>Product: </td>
                          
                           <td>Price</td>
                        </tr>
                        <tr class="item" >
                           <td >Item</td>
                           <td>${price2} BDT</td>
                        </tr>
                        
                  </table>
                  <br />


                  <table>
                    <tr>
                       <td>
                         <img style="height: 135px;" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/466782527_122148054308289553_8014829567318296370_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QlvLRcpv3HEQ7kNvgFD8YRv&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AQPzGv9Z5ES2oAp7IyyBVqA&oh=00_AYBUY3819Hi0X0O4FobIFKixnrk7ohO-OkODfRpT12TE6A&oe=673B6670" alt="">
                          
                       </td>
                       <td>
                          Quantity: 00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <br>
                          Sub Total: ${price2} BDT
                          <br>
                          Delivery Charge: 60 BDT
                          <br>
                          COD FEE: 10 BDT
                          <br>
                          VAT (0%): 00 BDT
                          <br>
                          <b>Total: ${Number(price2)+70} BDT</b>
                       </td>
                    </tr>
              </table>
               </div>
            </body>
      </html>


   `;
};
