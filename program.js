function storeData(){

    var data = new Object();

    data.client = document.getElementById('cname').value;
    data.program = document.getElementById('pname').value;
    data.budget = document.getElementById('budget').value;

    if(sessionStorage.d){
        d = JSON.parse(sessionStorage.getItem('d'));
    }else{
        d = [];
    }

    d.push(data);
    sessionStorage.setItem('d',JSON.stringify(d));

    var retrive = sessionStorage.getItem('d');

    console.log(retrive);


}

function res(){

    document.getElementById('cname').value = '';
    document.getElementById('pname').value = '';
    document.getElementById('budget').value = '';
}


