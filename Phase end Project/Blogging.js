function display(){
    var data = new Object();

    data.title = document.getElementById('title').value;
    data.article = document.getElementById('article').value;
    data.link = document.getElementById('link').value;

    if(sessionStorage.d){
        d = JSON.parse(sessionStorage.getItem('d'));
    }else{
        d = [];
    }

    d.push(data);
    sessionStorage.setItem('d',JSON.stringify(d));

    var retrive = sessionStorage.getItem('d');

    console.log(retrive);

    // let d = sessionStorage.getItem('d');
    // let c = JSON.parse(d);

    // document.write('<table>');
    // document.write('<th>Client</th>');
    // document.write('<th>Program</th>');
    // document.write('<th>Budget</th></tr>');
    // document.write('<br/>');

    //         for(var i = 0; i < c.length; i++){
    //             document.write('<tr><td>' +c[i].client+'</td>');
    //             document.write('<td>' +c[i].program+'</td>');
    //             document.write('<td>'+c[i].budget+'</td></tr>');
    //             document.write('<br/>');
    //         }
    //         document.write('</table>');
    
}