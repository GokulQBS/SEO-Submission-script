async function SEOSubmission(title, url, name, mail, reciprocal,keywords, description, category1, category2) {
  let inputFields = ["title","url","mail","name","rec","key","desc"]
  let Userinput = [title,url,mail,name,reciprocal,keywords,description]
  let UserinputCategory = [category1,category2]
  let functionruntime = 0;

  Userinput.forEach(value =>{

    if (value != undefined) {
      let executiontimes = 0;
      let elements = document.getElementsByTagName("input");

      for (let i = 0; i < elements.length; i++) {
          if (elements[i].name.toLowerCase().includes(inputFields[functionruntime])){
              elements[i].value=value;
              executiontimes++;
          }
      }

      if(executiontimes == 0){
        console.log("cannot insert "+value);
      }

    }
    functionruntime++;
  })

  if(UserinputCategory != undefined){

  }

  if ( category == undefined) {
    document.querySelectorAll("select");
    for (var i = 0; i <= textfields.options.length; i++) {
      if (textfields.options[i].innerHTML.include(category) || textfields.options[i].innerHTML.include(category1) != false) {
        textfields.selectedIndex = i;
        break;
      }
    }
  }
}
