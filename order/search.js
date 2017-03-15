query.order.search = {
  query: `query Q($search: searchInputObjectType){
    getOrderList(
      search: $search
    ){
      data{
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
