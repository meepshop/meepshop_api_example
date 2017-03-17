query.order.create = {
  query: `mutation M($search: [NewOrder]){
    createOrderList(
      createOrderList: $search
    ){
      id
      userId
      orderNo
      userInfo{
        name
        email
        mobile
        tel
        memberGroupId
      }
      categories{
        products{
          productId
          variantId
          title{
            zh_TW
          }
          type
          sku
          vendorSku
          listPrice
          retailPrice
          totalPrice
          discountPrice
          quantity
          specs{
            specId
            title{
              zh_TW
            }
          }
          galleryInfo{
            mainId
            media
          }
          activityInfo{
            plugin
            title{
              zh_TW
            }
            discountPrice
          }
        }
      }
      paymentInfo{
        status
        price
        list{
          paymentId
          template
          name
          description
          price
          paymentTime
        }
      }
      shipmentInfo{
        status
        price
        list{
          shipmentId
          template
          name
          description
          price
          number
          shipmentTime
          recipient{
            email
            name
            mobile
            tel
            address{
              country
              postalCode
              streetAddress
            }
          }
        }
      }
      orderRegularId
      environment{
        userAgent{
          browserName
          browserVersion
          os
          deviceModel
          deviceType
        }
        domain
        locale
        currency
      }
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
      activityInfo{
        plugin
        title{
          zh_TW
        }
      }
      priceInfo{
        currency
        cost
        discount
        total
        adjust
        orderDiscount
        productPrice
        productQuantity
        productDiscount
        shipmentFee
        shipmentDiscount
        return
        actualTotal
      }
      status
      note
      comment
      createdOn
      updatedOn
      _error
    }
  }`,
  variables:{
    search: [
      {
        products:[
          {
            productId: "826d6ac1-0308-11e7-9485-c7f679d99137",
            quantity: 1,
            variantId: "826d6ac0-0308-11e7-9485-c7f679d99137"
          }
        ],
        payments:[
          {
            paymentId: 'b2e25a76-23da-46f4-a3f6-70e30601e9fc'
          }
        ],
        shipments:[
          {
            shipmentId: 'ac784621-a659-4977-a719-a7321f0bda02',
            recipient: {
              name: 'name 1',
              tel: '02-22222222',
              mobile: '0911111111',
              address: {
                country: '台灣',
                city: '台北市',
                county: '中正區',
                postalCode: '',
                streetAddress: 'test address',
              }
            }
          }
        ],
        userId: '49a4413d-7570-472b-89d9-ec0c8b19f9a9',
        userInfo: {
          name: 'test2', 
          email: 'test@meepshop.com', 
          mobile: '0911111111', 
          tel: '02-11111111'
        }
      }
    ]
  }
};
