const products = [
  {
    id: 0,
    name: "$Bag Chaser",
    price: 45000,
    instock: 100,
    imgSrc: ["images/bag.png","images/j9.png","images/j7.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["black","blue"],
    },
     type:"tops",
  },
  {
    id: 1,
    name: "J£t&J£0 ss24 joggers",
    price: 65000,
    instock: 100,
    imgSrc: ["images/money21.png","images/j21.1.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["black","grey"],
    },
     type:"bottoms",
  },
  {
    id: 2,
    name: "Jet$Joe ss24 shirt",
    price: 45000,
    instock: 100,
    imgSrc: ["images/homeMoney.png","images/j21.1.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["green","blue","black"],
    },
     type:"tops",
  },{
    id: 3,
    name: "$Bag Chaser Tanktop",
    price: 45000,
    instock: 100,
    imgSrc: ["images/money3.png","images/money4.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["black"],
    },
     type:"tops",
  },
  ,{
    id: 4,
    name: "Jet&Joe Leather pant",
    price: 65000,
    instock: 100,
    imgSrc: ["images/j2product.png","images/money7.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["brown"],
    },
     type:"bottoms",
  },
  ,{
    id: 5,
    name: "Jet&Joe God with me shirt",
    price: 45000,
    instock: 100,
    imgSrc: ["images/money7.png","images/money.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["black"],
    },
     type:"tops",
  },
  {
    id: 6,
    name: "No Lazy Youth",
    price: 45000,
    instock: 100,
    imgSrc: ["images/no-lazy.png", "images/no-lazy-2.png","images/mixed.png","images/lazyy.png" ],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["white","black","mixed"],
    },
     type:"tops",
  },
  {
    id: 7,
    name: "Hoodie",
    price: 65000,
    instock: 100,
    imgSrc: ["images/9899.png","images/hoodie.png","images/DSC_0604 (1).png", "images/DSC_0585 (1).png" ],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["black","brown"],
    },
     type:"tops",
  },
  {
    id: 8,
    name: "Pants",
    price: 45000,
    instock: 100,
    imgSrc: ["images/DSC_0550 (1).png","images/jety.jpg" ,"images/jetx.jpg","images/pants-0204.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["black","grey"],
    },
     type:"tops",
  },
  {
    id: 9,
    name: "Alien Wear",
    price: 45000,
    instock: 100,
      imgSrc: ["images/DSC_0453 (1) (1).png"],
      options: {
        sizes: ["M","L","X-L"],
        colors: ["black"],
       
      },
      type:"tops",

     
    },
  {
    id: 10,
    name: "World In Your Hands",
    price: 45000,
    instock: 100,
    imgSrc: ["images/inyourhands1.png", "images/inyourhands2.png" ],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["black","red","blue","orange","white"],
    },
     type:"tops",
  },
  {
    id: 11,
    name: "Work of God",
    price: 45000,
    instock: 100,
    imgSrc: ["images/WOG3.png", "images/IMG_9741_2-removebg-preview.png","images/WOG1.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["green","blue","purple","red","black","orange"],
    },
    
    type:"tops",
  },
  {
    id: 12,
    name: "Caps",
    price: 35000,
    instock: 100,
      imgSrc: ["images/caps1.png","images/caps2.png","images/WOG3.png","images/Tanktop3.png","images/IMG_9741_2-removebg-preview.png"],
      options: {
        sizes: ["M"],
        colors: ["red","blue","purple","black","brown"],
       
      },
      type:"caps",
    

     
    },
  {
    id: 13,
    name: "Made in IB",
    price: 65000,
    instock: 100,
      imgSrc: ["images/made.png","images/madeinib3.png","images/madeinib1 (1).png"],
      options: {
        sizes: ["M","L","X-L"],
        colors: ["black"],
      }
      ,
      type:"tops",
    },
    {
      id: 14,
      name: "Sweatshirt",
      price: 60000,
      instock: 100,
     imgSrc: ["images/sweatshirt1.png","images/sweatshirt3.png","images/sweatshirt2.png"],
     options: {
      sizes: ["M","L","X-L"],
      colors: ["black"],
    }
    ,
      type:"tops",
     
  },
  {
    id: 15,
    name: "Black & Orange Shorts",
    price: 45000,
    instock: 100,
    imgSrc: ["images/orangeshort1.png","images/orangeback.png","images/orangeshorts3.png","images/madeinib1 (1).png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["orange"],
    },
    type:"bottoms",
  
  },
  {
    id: 16,
    name: "0203 Shorts",
    price: 45000,
    instock: 100,
    imgSrc: ["images/0203shortsblack.png","images/inyourhands1.png","images/shorts10.png"],
    options: {
      sizes: ["M","L","X-L"],
      colors: ["white","blue",,"black"],
    },
    type:"bottoms",
    
  },
 
    {
      id: 17,
      name: "Tanktop",
      price: 45000,
      instock: 100,
      imgSrc: ["images/Tanktop3.png","images/Tanktop2.png","images/Tanktop4.png"],
      options: {
        sizes: ["M","L","X-L"],
        colors: ["blue", "green","white","red","black"],
        
      },
      type:"tops",
    },
    {
      id: 18,
      name: "Roar '23 Shirts",
      price: 45000,
      instock: 1000,
      imgSrc: ["images/lion.png","images/lion (1).png","images/lion10.png"],
      options: {
        sizes: ["M","L","X-L"],
        colors: ["orange", "white","black",],
       
      },
      type:"tops",

    },
   
      {
        id: 19,
        name: "Roar '23 Joggers",
        price: 65000,
        instock: 100,
          imgSrc: ["images/sweatpants1.png","images/sweatpants.png"],
          options: {
            sizes: ["M","L","X-L"],
            colors: ["black"],
           
          },
          type:"bottoms",
  
         
        },
        {
          id: 20,
          name: "Striped Denim pants",
          price: 65000,
           instock: 100,
            imgSrc: ["images/J23 - Copy (1).png","images/linedpants.png","images/pantsss.png","images/pants2.png"],
           options: {
           sizes: ["M","L","X-L"],
          colors: ["grey"],
       
      },
      type:"bottoms",
         
    
           
          },
        {
          id: 21,
          name: "JxJ Denim Pants",
          price: 65000,
          instock: 100,
            imgSrc: ["images/designerpants.png","images/IMG_9861~2.png","images/styledpants1.png"],
            options: {
              sizes: ["M","L","X-L"],
              colors: ["black"],
             
            },
            type:"bottoms",
    
           
          }, 
          {
            id: 22,
            name: "JxJ Denim Shirt",
            price: 45000,
            instock: 100,
              imgSrc: ["images/IMG_9859~2.png","images/denimmm.jpg","images/IMG_9760~2.png"],
              options: {
                sizes: ["M","L","X-L"],
                colors: ["black"],
               
              },
              type:"tops",
      
             
            },
            {
              id: 23,
              name: "Joggers",
              price: 65000,
              instock: 100,
                imgSrc: ["images/DSC_0385 (1).png","images/DSC_0602 (1).png","images/sweatpantsnew.png","images/DSC_0602.png","images/DSC_0585 (1).png", "images/DSC_0555.png","images/DSC_0617.png"],
                options: {
                  sizes: ["M","L","X-L"],
                  colors: ["black","grey"],
                 
                },
                type:"bottoms",
        
               
              },
            
  ];

