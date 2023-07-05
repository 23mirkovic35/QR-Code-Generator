const btnGenerate = document.querySelector('.wrapper .data .btn-container button')
const qrURL = document.querySelector('.wrapper .form input')
const qrImg = document.querySelector('.wrapper .qr-code .image img')

btnGenerate.addEventListener("click", e=>{
    const image = document.querySelector('.wrapper .qr-code .image')
    if(image.classList.contains('active')){
        const image = document.querySelector('.wrapper .qr-code .image')
        image.classList.remove('active')  
        const loader = document.querySelector('.wrapper .qr-code .loader')
        loader.classList.add('show') 
        setTimeout(()=>{
            const loader = document.querySelector('.wrapper .qr-code .loader')
            loader.classList.remove('show')   
            let link = qrURL.value;
            qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${link}`
            const image = document.querySelector('.wrapper .qr-code .image')
            image.classList.add('active')    
        },1500)
    }
    else {
        const qr_container = document.querySelector('.wrapper')
        qr_container.classList.add('show')
        setTimeout(()=>{
            const loader = document.querySelector('.wrapper .qr-code .loader')
            loader.classList.add('show')      
        },2500)
        setTimeout(()=>{
            const loader = document.querySelector('.wrapper .qr-code .loader')
            loader.classList.remove('show')   
            let link = qrURL.value;
            qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${link}`
            const image = document.querySelector('.wrapper .qr-code .image')
            image.classList.add('active')    
        },4000)
    }
})