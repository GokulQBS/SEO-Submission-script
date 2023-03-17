function SEOSubmission(title,url,name,mail,description,category,category1,category2,category3) {

let Stitle = title;
let Surl = url;
let Sname = name;
let Smail = mail;
let Sdescription = description;
let selectvalue = category;
let selectvalue1 = category1;
let selectvalue2 = category2;
let selectvalue3 = category3;
let Rname, Rmail, Rurl, Rdescription, Rtitle = true;
let Output = "Error in";
let elmnt = document.querySelectorAll("select")[0];

  for (var i = 0; i <= elmnt.options.length; i++) {
    if (elmnt.options[i].innerHTML.includes(selectvalue) || elmnt.options[i].innerHTML.includes(selectvalue1) || elmnt.options[i].innerHTML.includes(selectvalue2) || elmnt.options[i].innerHTML.includes(selectvalue3) != false) {
      elmnt.selectedIndex = i;
      break;
    }
  }
  if (document.querySelectorAll("textarea").length > 0) {
    document.querySelectorAll("textarea")[0].value = Sdescription;
  } else {
    Rdescription = false
  }


  if (document.getElementsByName("TITLE").length > 0) {
    document.getElementsByName("TITLE")[0].value = Stitle;
  } else if (document.getElementsByName("title").length > 0) {
    document.getElementsByName("title")[0].value = Stitle;
  } else {
    Rtitle = false;
  }

  if (document.getElementsByName("URL").length > 0) {
    document.getElementsByName("URL")[0].value = Surl;
  } else if (document.getElementsByName("url").length > 0) {
    document.getElementsByName("url")[0].value = Surl;
  } else {
    Rurl = false;
  }

  if (document.getElementsByName("MAIL").length > 0) {
    document.getElementsByName("MAIL")[0].value = Smail;
  } else if (document.getElementsByName("OWNER_EMAIL").length > 0) {
    document.getElementsByName("OWNER_EMAIL")[0].value = Smail;
  } else {
    Rmail = false;
  }

  if (document.getElementsByName("name").length > 0) {
    document.getElementsByName("name")[0].value = Sname;
  } else if (document.getElementsByName("NAME").length > 0) {
    document.getElementsByName("NAME")[0].value = Sname;
  } else if (document.getElementsByName("OWNER_NAME").length > 0) {
    document.getElementsByName("OWNER_NAME")[0].value = Sname;
  } else {
    Rname = false;
  }
  if (Rname || Rmail || Rurl || Rdescription || Rtitle != true) {
    if (Rname == false) {
      Output = Output + ", Name";
    }
    if (Rmail == false) {
      Output = Output + ", Mail";
    }
    if (Rurl == false) {
      Output = Output + ", Url";
    }
    if (Rdescription == false) {
      Output = Output + ", Description";
    }
    if (Rtitle == false) {
      Output = Output + ", Title";
    }
    return("--------------"+Output+"--------------");
  } else {
    return("---------Executed Successfully---------")
  }
}
