

const checkAge = () => {
    const inputAge = parseInt(document.getElementById('input-age').value);
    const err = document.getElementById('error')
    try {
        if (isNaN(inputAge)) {
            throw 'Please Enter the right value'; 
        }else if(inputAge < 18 ){
            throw 'Children Not allowed'
        }else if(inputAge > 31){
            throw 'You are not eligible for this post'
        }
        else{
            document.getElementById('input-age').value = '';
            err.innerHTML = ''
        }
    } catch (error) {
        err.innerHTML = `Error Found ! ${error}`
        console.log(err);
    }
    finally{
        console.log('All done using try and catch');
    }
}


/*
*if(typeof inputAge === ''){
        alert('Error Notification')
    }else{
        
    }
*/