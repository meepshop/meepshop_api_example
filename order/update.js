query.order.update = {
  query: `query Q($search: searchInputObjectType){
    getOrderList(
      search: $search
    ){
      data{
        id,
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
          discount
          orderDiscount
          productDiscountTotal
          shipmentFee
          total
          cost
          adjust
          productPrice
          productQuantity
        }
        note
      }
      total
    }
  }`,
  variables:{
    search: {
      size: 10,
      from: 0,
      filter: {
        and: [
        ]
      },
      sort: [
        {
          field: 'createdOn',
          order: 'desc'
        }
      ]
    }
  }
};
