query.order.update = {
  query: `mutation M($search: [UpdateOrder]){
    updateOrderList(
      updateOrderList: $search
    ){
      id
      categories{
        products{
          title{
            zh_TW
          }
          sku
          totalPrice
          quantity
          cost
        }
      }
      orderNo
      paymentInfo{
        status
        price
      }
      shipmentInfo{
        status
        price
      }
      userInfo{
        name
        email
        mobile
        tel
        memberGroupId
      }
      status
      invoiceInfo{
        invoiceType
        invoiceTitle
        invoiceVAT
        donateUnit
        streetAddress
        vehicleType
        citizenDigitalCertificate
        mobileBarcode
      }
      priceInfo{
        currency
        cost
        discount
        total
        adjust
        return
        actualTotal
        orderDiscount
        productPrice
        productQuantity
        productDiscount
        shipmentFee
        shipmentDiscount
      }
      note
      _error
    }
  }`,
  variables:{
    search: [
      {
        id: 'e72bba40-04af-11e7-9639-fd1c3ec64efb',
        shipmentInfo: {
          status: 2
        }
      }
    ]
  }
};
