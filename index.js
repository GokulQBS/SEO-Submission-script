function SEOSubmission(title,url,name,mail,category,category1,category2,category3,description) {
let Rname, Rmail, Rurl, Rdescription, Rtitle = true;
let Output = "Error in";
let elmnt = document.querySelectorAll("select")[0];

  if (document.querySelectorAll("textarea").length > 0) {
    document.querySelectorAll("textarea")[0].value = description;
  } else {
    Rdescription = false
  }


  if (document.getElementsByName("TITLE").length > 0) {
    document.getElementsByName("TITLE")[0].value = title;
  } else if (document.getElementsByName("title").length > 0) {
    document.getElementsByName("title")[0].value = title;
  } else {
    Rtitle = false;
  }

  if (document.getElementsByName("URL").length > 0) {
    document.getElementsByName("URL")[0].value = url;
  } else if (document.getElementsByName("url").length > 0) {
    document.getElementsByName("url")[0].value = url;
  } else {
    Rurl = false;
  }

  if (document.getElementsByName("MAIL").length > 0) {
    document.getElementsByName("MAIL")[0].value = mail;
  } else if (document.getElementsByName("OWNER_EMAIL").length > 0) {
    document.getElementsByName("OWNER_EMAIL")[0].value = mail;
  } else if (document.getElementsByName("your_email").length > 0) {
    document.getElementsByName("your_email")[0].value = mail;
  }
  else {
    Rmail = false;
  }

  if (document.getElementsByName("name").length > 0) {
    document.getElementsByName("name")[0].value = name;
  } else if (document.getElementsByName("NAME").length > 0) {
    document.getElementsByName("NAME")[0].value = name;
  } else if (document.getElementsByName("OWNER_NAME").length > 0) {
    document.getElementsByName("OWNER_NAME")[0].value = name;
  } else if(document.getElementsByName("your_name").length > 0){
    document.getElementsByName("your_name")[0].value = name;
  }
  else {
    Rname = false;
  }

  for (var i = 0; i <= elmnt.options.length; i++) {
    if (elmnt.options[i].innerHTML.includes(category) || elmnt.options[i].innerHTML.includes(category1) || elmnt.options[i].innerHTML.includes(category2) || elmnt.options[i].innerHTML.includes(category3) != false) {
      elmnt.selectedIndex = i;
      break;
    }
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
