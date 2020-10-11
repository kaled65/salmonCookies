'use strict';
var Seattle = {
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomers: 23,
    maxCustomers: 65,
    avg: 6.3,
    custArr : [],
    cookArr : [],
    CustPerHrs: function(){
        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },
    Sales : [],
    CookiesPerHrs: function(){
        var total = 0;
        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
            // var cookAvg = Math.ceil(this.custArr[i]*this.avg);
            // console.log('Cookies per hour',cookAvg);
            // this.cookArr[i]= Math.ceil(cookAvg);
        };
        this.Sales[14]='Total:'+total+' cookies';
    },
    // location : function() {
    //     var total = 0;
    //     for(var i=0; i<hours.length; i++){
    //         this.locationResult[i] = hours[i]+' : '+this.cookArr[i];
    //     }
    //     console.log('The location results', this.locationResult);
    // },
    render : function(){
        var container = document.getElementById('cookies');
        var title = document.createElement('h1');
        container.appendChild(title);
        title.textContent= 'Salmon Cookies Sales Page'
        console.log('container= ', container);
        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Seattle');
        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
        // var h2E1 = document.createElement('h2');
        // articleE1.appendChild(h2E1);
        // h2E1.textContent = this.catName;
        // var ulE1 = document.createElement('ul');
        // container.appendChild(ulE1);
        // for (var i=0 ; i<this.location.length;i++) {
        //     var liE1 = document.createElement('li');
        //     ulE1.appendChild(liE1);
        //     liE1.textContent = this.likes[i];
        // }
    }
};
Seattle.CustPerHrs();
Seattle.CookiesPerHrs();
Seattle.render();

var Tokyo = {
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomers: 3,
    maxCustomers: 24,
    avg: 2.1,
    custArr : [],
    cookArr : [],
    CustPerHrs: function(){
        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },
    Sales : [],
    CookiesPerHrs: function(){
        var total = 0;
        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
            // var cookAvg = Math.ceil(this.custArr[i]*this.avg);
            // console.log('Cookies per hour',cookAvg);
            // this.cookArr[i]= Math.ceil(cookAvg);
        };
        this.Sales[14]='Total:'+total+' cookies';
    },
    // location : function() {
    //     var total = 0;
    //     for(var i=0; i<hours.length; i++){
    //         this.locationResult[i] = hours[i]+' : '+this.cookArr[i];
    //     }
    //     console.log('The location results', this.locationResult);
    // },
    render : function(){
        var container = document.getElementById('cookies');
        var title = document.createElement('h1');
        container.appendChild(title);
        console.log('container= ', container);
        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Tokyo');
        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
        // var h2E1 = document.createElement('h2');
        // articleE1.appendChild(h2E1);
        // h2E1.textContent = this.catName;
        // var ulE1 = document.createElement('ul');
        // container.appendChild(ulE1);
        // for (var i=0 ; i<this.location.length;i++) {
        //     var liE1 = document.createElement('li');
        //     ulE1.appendChild(liE1);
        //     liE1.textContent = this.likes[i];
        // }
    }
};
Tokyo.CustPerHrs();
Tokyo.CookiesPerHrs();
Tokyo.render();

var Dubai = {
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomers: 11,
    maxCustomers: 38,
    avg: 3.7,
    custArr : [],
    cookArr : [],
    CustPerHrs: function(){
        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },
    Sales : [],
    CookiesPerHrs: function(){
        var total = 0;
        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
            // var cookAvg = Math.ceil(this.custArr[i]*this.avg);
            // console.log('Cookies per hour',cookAvg);
            // this.cookArr[i]= Math.ceil(cookAvg);
        };
        this.Sales[14]='Total:'+total+' cookies';
    },
    // location : function() {
    //     var total = 0;
    //     for(var i=0; i<hours.length; i++){
    //         this.locationResult[i] = hours[i]+' : '+this.cookArr[i];
    //     }
    //     console.log('The location results', this.locationResult);
    // },
    render : function(){
        var container = document.getElementById('cookies');
        var title = document.createElement('h1');
        container.appendChild(title);
        console.log('container= ', container);
        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Dubai');
        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
        // var h2E1 = document.createElement('h2');
        // articleE1.appendChild(h2E1);
        // h2E1.textContent = this.catName;
        // var ulE1 = document.createElement('ul');
        // container.appendChild(ulE1);
        // for (var i=0 ; i<this.location.length;i++) {
        //     var liE1 = document.createElement('li');
        //     ulE1.appendChild(liE1);
        //     liE1.textContent = this.likes[i];
        // }
    }
};
Dubai.CustPerHrs();
Dubai.CookiesPerHrs();
Dubai.render();

var Paris = {
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomers: 20,
    maxCustomers: 38,
    avg: 2.3,
    custArr : [],
    cookArr : [],
    CustPerHrs: function(){
        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },
    Sales : [],
    CookiesPerHrs: function(){
        var total = 0;
        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
            // var cookAvg = Math.ceil(this.custArr[i]*this.avg);
            // console.log('Cookies per hour',cookAvg);
            // this.cookArr[i]= Math.ceil(cookAvg);
        };
        this.Sales[14]='Total:'+total+' cookies';
    },
    // location : function() {
    //     var total = 0;
    //     for(var i=0; i<hours.length; i++){
    //         this.locationResult[i] = hours[i]+' : '+this.cookArr[i];
    //     }
    //     console.log('The location results', this.locationResult);
    // },
    render : function(){
        var container = document.getElementById('cookies');
        var title = document.createElement('h1');
        container.appendChild(title);
        console.log('container= ', container);
        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Paris');
        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
        // var h2E1 = document.createElement('h2');
        // articleE1.appendChild(h2E1);
        // h2E1.textContent = this.catName;
        // var ulE1 = document.createElement('ul');
        // container.appendChild(ulE1);
        // for (var i=0 ; i<this.location.length;i++) {
        //     var liE1 = document.createElement('li');
        //     ulE1.appendChild(liE1);
        //     liE1.textContent = this.likes[i];
        // }
    }
};
Paris.CustPerHrs();
Paris.CookiesPerHrs();
Paris.render();

var Lima = {
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomers: 2,
    maxCustomers: 16,
    avg: 4.6,
    custArr : [],
    cookArr : [],
    CustPerHrs: function(){
        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },
    Sales : [],
    CookiesPerHrs: function(){
        var total = 0;
        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
            // var cookAvg = Math.ceil(this.custArr[i]*this.avg);
            // console.log('Cookies per hour',cookAvg);
            // this.cookArr[i]= Math.ceil(cookAvg);
        };
        this.Sales[14]='Total:'+total+' cookies';
    },
    // location : function() {
    //     var total = 0;
    //     for(var i=0; i<hours.length; i++){
    //         this.locationResult[i] = hours[i]+' : '+this.cookArr[i];
    //     }
    //     console.log('The location results', this.locationResult);
    // },
    render : function(){
        var container = document.getElementById('cookies');
        var title = document.createElement('h1');
        container.appendChild(title);
        console.log('container= ', container);
        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Lima');
        var ul = document.createElement('ul');
        container.appendChild(ul);
        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }
        // var h2E1 = document.createElement('h2');
        // articleE1.appendChild(h2E1);
        // h2E1.textContent = this.catName;
        // var ulE1 = document.createElement('ul');
        // container.appendChild(ulE1);
        // for (var i=0 ; i<this.location.length;i++) {
        //     var liE1 = document.createElement('li');
        //     ulE1.appendChild(liE1);
        //     liE1.textContent = this.likes[i];
        // }
    }
};
Lima.CustPerHrs();
Lima.CookiesPerHrs();
Lima.render();