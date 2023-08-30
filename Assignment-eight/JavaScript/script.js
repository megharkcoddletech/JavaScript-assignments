let obj = new XMLHttpRequest();
obj.open("get","data.json");
obj.send();
obj.onreadystatechange = function(){
  if(obj.readyState == 4 && obj.status == 200){
      let data = JSON.parse(obj.responseText);
      console.log(this.responseText);
      let html_content = "";
      for( let i=0; i<data.length; i++){
          let current_record = data[i];
          html_content += "<tr><td>"+current_record.id+ " </td><td>"+ current_record.name + "</td><td>"+ current_record.username + "</td><td>"+current_record.age + "</td></tr>";
          document.getElementById("result_area").innerHTML = html_content;
      }
  }
}