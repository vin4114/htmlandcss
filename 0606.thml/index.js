var fred = ['fred', 'flinestone', 'fred@email.com', 50];

console.log("todays date is "+ new Date ())

console.log('length = ' , fred[i++]);

//for (var i =0; i =<fred.length; i++) {
   for (var i in fred) { 
       if (i == 0)
       console.log('First name: ', fred[i])
       else if ( i == 1)
       console.log('Last name: ', fred[i])
       else if ( i == 2)
        console.log('Email: ', fred[i])
        else // i == 3
        console.log('Age: ', fred[i])

}
