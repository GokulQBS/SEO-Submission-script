
function SEOSubmission(title, url, name, mail, category, category2, description, reciprocal,keywords) {
  let Rname, Rmail, Rurl, Rdescription, Rtitle, Rreciprocal,Rkeywords,Rcategory = true;
  let Output = "Error in";
  let elmnt = document.querySelectorAll("select")[0];


  if (description != undefined) {
    if(document.querySelectorAll("textarea").length > 0){
      document.querySelectorAll("textarea")[0].value = description;
    }else{
      Rdescription = false
    }
  }


  if (title != undefined) {
    if (document.getElementsByName("TITLE").length > 0) {
      document.getElementsByName("TITLE")[0].value = title;
    } else if (document.getElementsByName("title").length > 0) {
      document.getElementsByName("title")[0].value = title;
    } else {
      Rtitle = false;
    }
  }
   
  if (url != undefined) {
    if (document.getElementsByName("URL").length > 0) {
      document.getElementsByName("URL")[0].value = url;
    } else if (document.getElementsByName("url").length > 0) {
      document.getElementsByName("url")[0].value = url;
    } else if (document.getElementsByName("urlsite").length > 0) {
      document.getElementsByName("urlsite")[0].value = url;
    } else {
      Rurl = false;
    }
  }

  if (mail != undefined) {
    if (document.getElementsByName("MAIL").length > 0) {
      document.getElementsByName("MAIL")[0].value = mail;
    } else if (document.getElementsByName("OWNER_EMAIL").length > 0) {
      document.getElementsByName("OWNER_EMAIL")[0].value = mail;
    }else if (document.getElementsByName("email").length > 0) {
      document.getElementsByName("email")[0].value = mail;
    }else if (document.getElementsByName("Email").length > 0) {
      document.getElementsByName("Email")[0].value = mail;
    } else if (document.getElementsByName("your_email").length > 0) {
      document.getElementsByName("your_email")[0].value = mail;
    }else if (document.getElementsByName("siteml").length > 0) {
      document.getElementsByName("siteml")[0].value = mail;
    }
    else {
      Rmail = false;
    }
  }


  if (name != undefined) {
    if (document.getElementsByName("name").length > 0) {
      document.getElementsByName("name")[0].value = name;
    } else if (document.getElementsByName("NAME").length > 0) {
      document.getElementsByName("NAME")[0].value = name;
    }else if (document.getElementsByName("sitem").length > 0) {
      document.getElementsByName("sitem")[0].value = name;
    } else if (document.getElementsByName("OWNER_NAME").length > 0) {
      document.getElementsByName("OWNER_NAME")[0].value = name;
    } else if (document.getElementsByName("your_name").length > 0) {
      document.getElementsByName("your_name")[0].value = name;
    }
    else {
      Rname = false;
    }
  }

  if (reciprocal != undefined) {
    if (document.getElementsByName("reciprocal").length > 0) {
      document.getElementsByName("reciprocal")[0].value = reciprocal;
    } else if (document.getElementsByName("RECIPROCAL").length > 0) {
      document.getElementsByName("RECIPROCAL")[0].value = reciprocal;
    }else if (document.getElementsByName("RECPR_URL").length > 0) {
      document.getElementsByName("RECPR_URL")[0].value = reciprocal;
    } else {
      Rreciprocal = false;
    }
  }
  if (keywords != undefined) {
    if (document.getElementsByName("keywords").length > 0) {
      document.getElementsByName("keywords")[0].value = keywords;
    } else if (document.getElementsByName("KEYWORDS").length > 0) {
      document.getElementsByName("KEYWORDS")[0].value = keywords;
    }else if (document.getElementsByName("META_KEYWORDS").length > 0) {
      document.getElementsByName("META_KEYWORDS")[0].value = keywords;
    } else {
      Rkeywords = false;
    }
  }

  if ( category != undefined) {
    if(document.querySelectorAll('select')[0] !=undefined){
    let options = document.querySelectorAll('select')[0].options.length;
    let finded=false;
    for (let i = 0; i < options; i++) {
        if (document.querySelectorAll('select')[0].options[i].innerText.toLowerCase().includes(category)) {
            document.querySelectorAll('select')[0].selectedIndex = i;
            finded =true;
            break;
        }
    }
  
    if(finded == false){
       for (let i = 0; i < options; i++) {
        if (document.querySelectorAll('select')[0].options[i].innerText.toLowerCase().includes(category2)) {
            document.querySelectorAll('select')[0].selectedIndex = i;
            finded =true;
            break;
        }
    }
      if(finded == false){
        Rcategory = false;
      }
    }
}
}

  if (Rname || Rmail || Rurl || Rdescription || Rtitle || Rreciprocal || Rkeywords != true) {
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
    if (Rreciprocal == false) {
      Output = Output + ", Reciprocal";
    }
    if(Rkeywords == false){
      Output = Output + ", keywords";
    }
    if(Rcategory == false){
      Output = Output + ", category";
    }
    return ("--------------" + Output + "--------------");
  } else {
    return ("---------Executed Successfully---------")
  }
}
