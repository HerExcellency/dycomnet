
function changeDuration(){
    let plan1 = document.querySelector('.plan')
    let plan = plan1.options[plan1.selectedIndex].value
    let duration1 = document.querySelector('.duration')
    
}

/**
 * money = amount saved
 * duration = for how long the money will be saved 
 * frequency = will you be saving daily, weekly or monthly?
 * plan = What plan are you fixing your money for?
 * percent: interest percentage 
 */

function myAmount() {
    
    let money = document.querySelector('.money4').value
    let duration1 = document.querySelector('.duration')
    let frequency1 = document.querySelector('.frequency')
    let plan1 = document.querySelector('.plan')
    let duration = duration1.options[duration1.selectedIndex].value
    let frequency = frequency1.options[frequency1.selectedIndex].value
    let plan = plan1.options[plan1.selectedIndex].value
    let percent = 12
    let time
    
    if(plan === 'quick'){
        duration === '3' ? percent=12:duration==='6'?percent=12.16:duration ==='9' ?percent=12.32:duration ==='12' ?percent=12.5 : percent=12
        // console.log(percent)
        if(duration === '3'){
            parseInt(frequency) === 1? time = ((parseInt(duration)/12)*365).toFixed() : 
            parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : 
            parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): 
            time =((parseInt(duration)/12)*365).toFixed()
            
        }
        else if(duration === '6'){
            parseInt(frequency) === 1? time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7? time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30? time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
        }
        else if(duration === '9'){
            parseInt(frequency) === 1?time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
            
        }
        else if(duration === '12'){
            parseInt(frequency) === 1?time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
        }

        // const compoundInterest = (amount:number, duration:number = 1, type:string = "month"): number=> {
        //     duration = type === "year" ? duration * 12 : duration;
        //     const rate = (10 / 100)/(type ==='year'?duration: 12);
        //     const result = [...Array(duration).keys()].reduce(
        //       (total) => (total += total * rate),
        //       amount
        //     );
        //     console.log(result)
        //     return result;
        //   };
        //   compoundInterest(3000, 1)

        var dmoney = money * time
        var monthlyRate = percent / 12/ 100;
        // var monthlyRate = percent / 100 * (30/365);
        var futureValue = 0;
        var dInterest = 0

        
        for ( i = 1; i <= time; i++ ) {

            futureValue = money * (1 + monthlyRate) - money;
            console.log(futureValue)
            dInterest = dInterest + futureValue
            console.log(dInterest)    
        }
    
        document.querySelector('.totalmoney').textContent='₦'+ dmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector('.totalreturn').textContent = '₦'+ ((dmoney + dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector('.totalinterest').textContent='₦'+((dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    }else if(plan === 'plus'){
        duration==='6'?percent=12.5:duration ==='9' ?percent=13.25:duration ==='12' ?percent=14 : percent=12.5
        // console.log(percent)
       
        if(duration === '6'){
            parseInt(frequency) === 1? time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7? time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30? time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
        }
        else if(duration === '9'){
            parseInt(frequency) === 1?time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
            
        }
        else if(duration === '12'){
            parseInt(frequency) === 1?time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
        }
        let dmoney = money * time
        var monthlyRate = percent / 12 / 100;
        var futureValue = 0;
        var dInterest = 0

        
        for ( i = 1; i <= time; i++ ) {
            futureValue = futureValue + money * (1 + monthlyRate) - money;
            dInterest = dInterest + futureValue
            
        }
        
        
        document.querySelector('.totalmoney').textContent= '₦'+dmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector('.totalreturn').textContent = '₦'+ ((dmoney + dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector('.totalinterest').textContent='₦'+((dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    }

    else if(plan === 'max'){
        duration ==='9' ?percent=14:duration ==='12' ?percent=16 : percent=14
        // console.log(percent)
        if(duration === '9'){
            parseInt(frequency) === 1?time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
            
        }
        else if(duration === '12'){
            parseInt(frequency) === 1?time =((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()
        }
        let dmoney = money * time
        var monthlyRate = percent / 12 / 100;
        var futureValue = 0;
        var dInterest = 0

        
        for ( i = 1; i <= time; i++ ) {
            futureValue = futureValue + money * (1 + monthlyRate) - money;
            dInterest = dInterest + futureValue
            
        }
        
        
        document.querySelector('.totalmoney').textContent='₦'+ dmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector('.totalreturn').textContent = '₦'+ ((dmoney + dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        document.querySelector('.totalinterest').textContent='₦'+((dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    }
}


const compoundInterest = (p, t, r, n) => {
    const amount = p * (Math.pow((1 + (r / n)), (n * t)));
    const interest = amount - p;
    return interest;
 };