
function SEOSubmission(title, url, name, mail, category, category1, category2, category3, description, reciprocal) {
  let Rname, Rmail, Rurl, Rdescription, Rtitle, Rreciprocal = true;
  let Output = "Error in";
  let elmnt = document.querySelectorAll("select")[0];


  if (description != undefined) {
    // if (document.querySelectorAll("textarea").length > 0) {
    //   document.querySelectorAll("textarea")[0].value = description;
    //   document.querySelectorAll("textarea")[1].value = description;
    // } else 
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
    } else {
      Rreciprocal = false;
    }
  }

  if ( category == undefined) {
    for (var i = 0; i <= elmnt.options.length; i++) {
      if (elmnt.options[i].innerHTML.includes(category) || elmnt.options[i].innerHTML.includes(category1) || elmnt.options[i].innerHTML.includes(category2) || elmnt.options[i].innerHTML.includes(category3) != false) {
        elmnt.selectedIndex = i;
        break;
      }
    }
  }

  if (Rname || Rmail || Rurl || Rdescription || Rtitle || Rreciprocal != true) {
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
    return ("--------------" + Output + "--------------");
  } else {
    return ("---------Executed Successfully---------")
  }
}
SEOSubmission("granules detergent colour speckles manufacturers",
              "https://www.arumugachemicals.com",
              "Armuga Chemicals",
              "mail@arumugachemicals.com",
              "Chemicals",
              "chemicals",
              "Chemical",
              "chemical","Our chemical company involved only in trading of all types of detergent raw materials and has wide range of customers in soaps & detergents")


// let script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'https://gokulqbs.github.io/SEO-Submission-script/index.js';
// document.head.appendChild(script);
// SEOSubmission("granules detergent colour speckles manufacturers",
//               "https://www.arumugachemicals.com",
//               "Armuga Chemicals",
//               "mail@arumugachemicals.com",
//               "Chemicals",
//               "chemicals",
//               "Chemical",
//               "chemical","Our chemical company involved only in trading of all types of detergent raw materials and has wide range of customers in soaps & detergents")
