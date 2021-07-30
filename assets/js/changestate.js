$(document).ready(()=>{
    
    let Edom = $('.duration')
    
    Edom.append(`
    <option value='3'> 3 months</option>
    <option value='6'> 6 months</option>
    <option value='9'> 9 months</option>
    <option value='12'> 12 months</option>
    `)
    let money = $('.money4').val()
    let frequency = $('.frequency').val()
    let duration = $('.duration').val()
    let time
    let percent=12
    parseInt(frequency) === 1? time = ((parseInt(duration)/12)*365).toFixed() : parseInt(frequency)===7?time =((parseInt(duration)/12)*52).toFixed() : parseInt(frequency)===30?time =((parseInt(duration)/12)*12).toFixed(): time =((parseInt(duration)/12)*365).toFixed()

    let dmoney = money * time
    var monthlyRate = percent / 12 / 100;
    var futureValue = 0;
    var dInterest = 0

    
    for ( i = 1; i <= time; i++ ) {
        futureValue = futureValue + money * (1 + monthlyRate) - money;
        dInterest = dInterest + futureValue
        
    }
    
    
    document.querySelector('.totalmoney').textContent= '₦'+ dmoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    document.querySelector('.totalreturn').textContent = '₦'+ ((dmoney + dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    document.querySelector('.totalinterest').textContent='₦'+((dInterest).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
        
        $('.plan').on('change', (e)=>{
            let plan1 = document.querySelector('.plan')
            let plan = plan1.options[plan1.selectedIndex].value
            let duration = $('.duration')
            if(plan === 'max'){
                let months = [12]
                duration.html(`<option value='9'> 9 months</option>`)
                // duration.html(`<option value=${i}>${i +' months'}</option>`)
                for(let i of months){
                    duration.append(`<option value=${i}>${i +' months'}</option>`)
                }
            }else if(plan ==='plus'){
                let months = [9, 12]
                duration.html(`<option value='6'> 6 months</option>`)
                // duration.html(`<option value=${i}>${i +' months'}</option>`)
                for(let i of months){
                    duration.append(`<option value=${i}>${i +' months'}</option>`)
                }
                    
                }else{
                    let months = [6, 9, 12]
                duration.html(`<option value='3'> 3 months</option>`)
                // duration.html(`<option value=${i}>${i +' months'}</option>`)
                for(let i of months){
                    duration.append(`<option value=${i}>${i +' months'}</option>`)
                }
                    
                }
        })
    
    })