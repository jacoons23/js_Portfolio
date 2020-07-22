// Global Declarations / Documentations

// console.log ("f: INDEX.JS");

g_Default_Tab = "Quotes_Section";

/*
   InitSystem()                     // All one-time initialization (deferred)

   FAV Object (Favorites)
      FAV Functions: Init, Load, NextPage, PrevPage, FirstPage, LastPage, UpdatePaging, MakeRolodex
      FAV Variables: List[], Page[], BegIndex, EndIndex, MaxIndex, ItemsPerPage, CurPage, MaxPage, UpdatePaging

   F500 Object (Fortune 500)
      F500 Functions: Init, Load, NextPage, PrevPage, FirstPage, LastPage, UpdatePaging, MakeRolodex
      F500 Variables: List[], Page[], BegIndex, EndIndex, MaxIndex, ItemsPerPage, CurPage, MaxPage

   QOD.Load()                       // Pull next Quote of the Day
   QOD.FontAdd()                    // Increase Font Size of Quote of the Day
   QOD.FontSub()                    // Decrease Font Size of Quote of the Day
   STA.Load()                       // Load States Array
   AGT.Load()                       // Load Engines Array
   TTL.Load()                       // Load Titles Array Array

   // *** MENU - FUNCTIONS ***
   click_Menu(event)                // Menu Click Functions
*/

// Create Base Settings, read User Settings, overlay Base Settings with User Settings

// *** Quotes Section *** /Quotes
var QOD =
   {
   Index: (new Date().getDate()), // Use a different starting quote depending on day of month
   List: [
      "The greatest glory in living lies not in never falling, but in rising every time we fall.<br><br>&nbsp;- Nelson Mandela",
      "The way to get started is to quit talking and begin doing.<br><br>&nbsp;- Walt Disney",
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.<br><br>&nbsp;- Steve Jobs",
      "If life were predictable it would cease to be life, and be without flavor.<br><br>&nbsp;- Eleanor Roosevelt",
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.<br><br>&nbsp;- James Cameron",
      "Life is what happens when you're busy making other plans.<br><br>&nbsp;- John Lennon",
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. Injustice anywhere is a threat to justice everywhere. Our lives begin to end the day we become silent about things that matter.<br><br>&nbsp;- Martin Luther King, Jr"
   ],
   Load: () => { // console.log ("f: QOD.Load, Index=" + QOD.Index);
      // QOD.Load (used here and copied for clicking on "NEXT QUOTE" Button)
      QOD.Index = (QOD.Index + 1) % (QOD.List.length);
      document.getElementById("id_Quotes").innerHTML = "#" + (QOD.Index+1) + ": " + QOD.List [QOD.Index];
      },
   }

// *** State List Section *** /States
var STA =
   {
   List: [
         "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
         "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
         "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
         "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
         "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
         "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
         "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
         "Wisconsin", "Wyoming"
         ],
   /* *** Load States Section ********************************************* */
   Load: () => { // console.log ("f: STA.Load: " /* + STA.List */);
      // STA.Load
      var select = document.getElementById("id_States");
      select.innerHTML = STA.List.map
/*            ( e =>`<button class="Medium_Button" style="width: auto; height: auto;">*/
         ( e =>`<button class="axMenuButton">
         
         <a href="https://en.wikipedia.org/wiki/${e}" target="_blank">
         ${e}</a></button>` ).join('');
         // <img src="https://www.states101.com/img/flags/svg/${e.toLowerCase}.svg" width=15px;>
      }
   };

// *** Search List Section *** /Engines
var AGT =
   {
      List: [
         {Name: "CareerBliss  ", URL: "https://www.careerbliss.com/search/?q=[COMPANY%20NAME]&l=louisville,%20ky&typeFilter=job&sf=true"},
         {Name: "CareerBuilder", URL: "http://www.careerbuilder.com/jobs-[COMPANY-NAME]-in-louisville,ky"},
         {Name: "Dice         ", URL: "http://www.dice.com/jobs?q=[COMPANY NAME]&l=louisville+ky"},
         {Name: "GlassDoor    ", URL: "https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=[COMPANY+NAME]&locT=C&locId=1137724&jobType=&context=Jobs&sc.keyword=[COMPANY+NAME]&dropdown=0"},
         {Name: "Google       ", URL: "https://www.google.com/search?&q=Jobs+at+'[COMPANY+NAME]'+in+Louisville+KY"},
         {Name: "Indeed       ", URL: "https://www.indeed.com/jobs?q=[COMPANY+NAME]&l=Louisville+KY"},
         {Name: "Lensa        ", URL: "https://lensa.com/talent/job-opportunities?job-title=[COMPANY NAME]&location=louisville+ky"},
         {Name: "LinkedIn     ", URL: "https://www.linkedin.com/jobs/search/?keywords=[COMPANY NAME]&location=Louisville%20Metropolitan%20Area"},
         {Name: "Monster      ", URL: "https://www.monster.com/jobs/search/?q=[COMPANY-NAME]&where=Louisville__2C-KY"},
         {Name: "MyJobResource", URL: "https://myjobresource.com/indexjobs.php?k=[COMPANY NAME]&l=40223"},
         {Name: "SimplyHired  ", URL: "http://www.simplyhired.com/search?q='[COMPANY+NAME]'&l=louisville+ky"},
         {Name: "StartWire    ", URL: "https://www.startwire.com/job/search?query='[COMPANY+NAME]'&location_title=Louisville%2C%20KY"}
         ],
      /* *** Load Engines Section ********************************************* */
      Load: () => { // console.log ("f: AGT.Load: " /* + AGT.List */);
         // AGT.Load
         var select = document.getElementById("id_Engines");
         select.innerHTML = "testing"
         select.innerHTML = AGT.List.map
            ( e =>
               `
                  <button class="axMenuButton" style="width: auto; height: auto;">
                  <a href="${e.URL}" target="_blank">
                  ${e.Name}</a></button>
               ` 
            ).join('');
         }
      };

// *** Title List Section *** /TITLES
var TTL =
   {
      List: [
         {Name: "Business Analyst     ", URL: " ?"},
         {Name: "Database Analyst     ", URL: " ?"},
         {Name: "Technical Writer     ", URL: " ?"},
         {Name: "SQL Developer        ", URL: " ?"},
         {Name: "Data Conversion (ETL)", URL: " ?"},
         {Name: "Project Manager      ", URL: " ?"},
         {Name: "Web Developer        ", URL: " ?"},
         {Name: "Systems Administrator", URL: " ?"},
         {Name: "Frontend Developer   ", URL: " ?"},
         {Name: "Backend Developer    ", URL: " ?"}
         ],
      /* *** Load Titles Section ********************************************* */
      Load: () => { // console.log ("f: TTL.Load: " /* + TTL.List */);
         // TTL.Load
         var select = document.getElementById("id_Titles");
         var i;
         select.innerHTML = TTL.List.map
            ( e =>`<button class="axMenuButton"
                   style="width: auto; height: auto;">
            <a href="${e.URL}" target="_blank">
            ${e.Name}</a></button>` ).join('');
         }
      };

// *** Favorites Section *** /Favorites
var FAV =
   { // /here
      BegIndex: 0,         // FAV.BegIndex     : Starting Index for data paging (index range varies)
      EndIndex: 0,         // FAV.EndIndex     : Ending Index for data paging (index range varies)
      MaxIndex: 0,         // FAV.MaxIndex     : Last Calculated Index for data paging (index max, fixed)
      ItemsPerPage: 15,    // FAV.ItemsPerPage : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // FAV.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // FAV.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      MaxHeight: 0,        // FAV.MaxHeight    : Height Flag to maintain size on last Page

      Sliced_List: [],     // Arry holding Sliced Array Items (paging)
      Filtered_List: [],   // Array holding Filtered Array Items

      // FAV.List          // Original Array containing Name and URL of Internet Favorites (from MS Edge export)
      List: [
         {Name: "100 Great CSS Menu Tutorials, The JotForm Blog", URL: "https://www.jotform.com/blog/100-great-css-menu-tutorials"},
         {Name: "10303 Judith Ct, Louisville, KY 40223 - Get Owner Info", URL: "https://www.truepeoplesearch.com/find/address/10303-judith-ct_louisville-ky-40223#"},
         {Name: "12 CSS 3D Text Effects", URL: "https://freefrontend.com/css-3d-text-effects"},
         {Name: "135 CSS Menu", URL: "https://freefrontend.com/css-menu"},
         {Name: "14 HTML Resume Templates", URL: "https://freefrontend.com/html-resume-templates"},
         {Name: "150+ Must-Have Skills for Any Resume [With Tips + Tricks]", URL: "https://novoresume.com/career-blog/most-important-skills-to-put-on-your-resume"},
         {Name: "17 CSS Book Effects", URL: "https://freefrontend.com/css-book-effects"},
         {Name: "18+ JavaScript Libraries for Creating Beautiful Charts", URL: "https://www.sitepoint.com/best-javascript-charting-libraries"},
         {Name: "31 JavaScript Text Effects", URL: "https://freefrontend.com/javascript-text-effects"},
         {Name: "5 Business Requirements Gathering Template Powerpoint Guide, Presentation PowerPoint Templates, PPT Slide Templates, Present", URL: "https://www.slideteam.net/5-business-requirements-gathering-template-powerpoint-guide.html"},
         {Name: "55 Remote Writing  &amp;  Content Jobs That Are Currently Hiring", URL: "https://medium.com/@oldremote/55-remote-writing-content-jobs-that-are-currently-hiring-ab53120444bc"},
         {Name: "9 CSS Neumorphism Examples", URL: "https://freefrontend.com/css-neumorphism-examples"},
         {Name: "ABC", URL: "https://abc.com/watch-live/abc-news"},
         {Name: "API Web Service", URL: "https://www.weather.gov/documentation/services-web-api"},
         {Name: "Advocates, National HIRE Network", URL: "https://www.hirenetwork.org/advocates"},
         {Name: "Agile User Stories - YouTube", URL: "https://www.youtube.com/watch?v=apOvF9NVguA"},
         {Name: "Air Supply At Vina Del Mar", URL: "https://www.youtube.com/watch?v=rVUmrXtlrhQ"},
         {Name: "Air Supply", URL: "https://www.youtube.com/watch?v=jQd669b2ur4"},
         {Name: "Algebra", URL: "https://www.mathpapa.com/algebra-calculator.html"},
         {Name: "Algebra Calculator - MathPapa", URL: "https://www.mathpapa.com/algebra-calculator.html"},
         {Name: "Ambient Canvas Backgrounds, Codrops", URL: "https://tympanus.net/codrops/2018/12/13/ambient-canvas-backgrounds"},
         {Name: "Articles API - LinkedIn, Microsoft Docs", URL: "https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/articles-api"},
         {Name: "Artweaver - Download", URL: "https://www.artweaver.de/en/download"},
         {Name: "Auto Macros, Microsoft Docs", URL: "https://docs.microsoft.com/en-us/office/vba/word/concepts/customizing-word/auto-macros"},
         {Name: "AutoComplete - Patterns", URL: "https://baymard.com/blog/autocomplete-design"},
         {Name: "BABYLON - Babylon.js Documentation", URL: "https://doc.babylonjs.com/api"},
         {Name: "Babylon - Heightmap demo physics engine", URL: "https://www.babylonjs-playground.com/#D3LQD#7"},
         {Name: "Babylon Playground 1", URL: "https://www.babylonjs-playground.com/#E6IX1#3"},
         {Name: "Babylon.js Documentation", URL: "https://doc.babylonjs.com/how_to"},
         {Name: "Babylon.js Documentation", URL: "https://doc.babylonjs.com/playground"},
         {Name: "Babylon.js Playground", URL: "https://www.babylonjs-playground.com/#CXOLW#3"},
         {Name: "Babylon.js Playground", URL: "https://www.babylonjs-playground.com/#VUJG1#1"},
         {Name: "BabylonJS Documentation", URL: "http://grideasy.github.io/overviews/interesting_playgrounds"},
         {Name: "Barry Manilow", URL: "https://www.youtube.com/watch?v=TwqIcq-2NlM"},
         {Name: "BeFunky: Free Cartoonizer", URL: "https://www.befunky.com/create"},
         {Name: "Beatles A", URL: "https://www.youtube.com/watch?v=7tVT6zZENm8&amp;t=1419s"},
         {Name: "Beatles B", URL: "https://www.youtube.com/watch?v=7tVT6zZENm8"},
         {Name: "Beatles Tribute Concert", URL: "https://www.youtube.com/watch?v=4rHiDArtjuM"},
         {Name: "Beautiful Angular Charts  &amp;  Graphs, CanvasJS", URL: "https://canvasjs.com/angular-charts"},
         {Name: "Bee Gees", URL: "https://www.youtube.com/watch?v=B0acfV8Z1cY&amp;t=3164s"},
         {Name: "Beshear 1", URL: "https://www.facebook.com/898100260320577/posts/1843100575820536/?sfnsn=mo&amp;extid=b1f9JNAxyXAV9zOq"},
         {Name: "Beshear 2", URL: "https://www.facebook.com/GovAndyBeshear"},
         {Name: "Best eCard Sites Like JibJab - YouTube", URL: "https://www.youtube.com/watch?v=38dR_06i2SY"},
         {Name: "Billy Joel  Concert", URL: "https://www.youtube.com/watch?v=46n1WSuaxOs&amp;list=RDDbGqXpDIHjo&amp;index=27"},
         {Name: "Billy Joel 1", URL: "https://www.youtube.com/watch?v=IZ4WlJj9LnU"},
         {Name: "Bootstrap Code Examples", URL: "https://freefrontend.com/bootstrap-code-examples"},
         {Name: "Bump Map Playground", URL: "https://www.babylonjs-playground.com/#20OAV9#23"},
         {Name: "Bureau of Labor Statistics Data For Graphing", URL: "https://data.bls.gov/pdq/SurveyOutputServlet"},
         {Name: "Business Analysis Fundamentals - YouTube", URL: "https://www.youtube.com/watch?v=lHCTtgg05Hk"},
         {Name: "Business Analyst User Stories Tutorial, Agile Scrum Methodologies, User Story Mapping, Sprint - YouTube", URL: "https://www.youtube.com/watch?v=o8i59DFPcQQ"},
         {Name: "Buy a geico gecko lizard", URL: "https://www.google.com/search?q=buy+a+geico+gecko+lizard&amp;source=lnms&amp;tbm=isch&amp;sa=X&amp;ved=0ahUKEwi3wL-HqYbkAhUFLKwKHWf-A54Q_AUIEigC&amp;biw=1333&amp;bih=629"},
         {Name: "Freelancing Jobs", URL: "https://angel.co/job-collections/part-time-remote-jobs?utm_campaign=platform-newsletter&amp;utm_medium=email+"},
         {Name: "COBOL - Ancient Computer Language", URL: "https://finance.yahoo.com/news/ancient-computer-language-slowing-america-090000639.html"},
         {Name: "COVID Map", URL: "https://news.google.com/covid19/map?hl=en-US&amp;mid=/m/0nn83&amp;gl=US&amp;ceid=US:en"},
         {Name: "COVID-19_response_fund_0.pdf", URL: "https://louisvilleky.gov/sites/default/files/community_services/pdfs/covid-19_response_fund_0.pdf"},
         {Name: "CSS 2", URL: "https://stackoverflow.com/questions/339923/set-cellpadding-and-cellspacing-in-css"},
         {Name: "CSS Box Model", URL: "https://www.w3schools.com/css/css_boxmodel.asp"},
         {Name: "CSS Code Examples", URL: "https://freefrontend.com/css-code-examples"},
         {Name: "CSS Ghost Buttons", URL: "https://www.webfx.com/blog/images/assets/cdn.sixrevisions.com/0468-01-css-ghost-buttons/index.html"},
         {Name: "CSS Snippets, CSS-Tricks", URL: "https://css-tricks.com/snippets/css"},
         {Name: "CSS Styling Images", URL: "https://www.w3schools.com/css/css3_images.asp"},
         {Name: "CSS Website Layout", URL: "https://www.w3schools.com/css/css_website_layout.asp"},
         {Name: "CSS", URL: "https://www.tutorialrepublic.com/faq/how-to-set-table-cellpadding-and-cellspacing-using-css.php"},
         {Name: "CSS-Tricks - Complete Guide to Flexbox", URL: "https://css-tricks.com/snippets/css/a-guide-to-flexbox"},
         {Name: "Calculating a Least Squares Regression Line: Equation, Example, Explanation, Technology Networks", URL: "https://www.technologynetworks.com/informatics/articles/calculating-a-least-squares-regression-line-equation-example-explanation-310265"},
         {Name: "Calculus", URL: "https://books.google.com/books?id=g1Bul7oPMF4C&amp;pg=PR13&amp;lpg=PR13&amp;dq=y%3D(x%5E2%2B4)/(x%5E3-4x%5E2-8)+graph&amp;source=bl&amp;ots=y9otCuTDBc&amp;sig=ACfU3U2QzClYlZ_RfvBvRuRQs_jZSD40Lw&amp;hl=en&amp;sa=X&amp;ved=2ahUKEwjEkISAqMDpAhWScc0KHT0yA_QQ6AEwGHoECA4QAQ#v=onepage&amp;q=y%3D(x%5E2%2B4)%2F(x%5E3-4x%5E2-8)%20graph&amp;f=false"},
         {Name: "CareerExplorer", URL: "https://www.careerexplorer.com"},
         {Name: "Carrabba's - CSPR23", URL: "https://togo.carrabbasonlineordering.com/?&amp;_ga=2.193713317.965549854.1588120202-534951482.1588120202#"},
         {Name: "Cat Stevens", URL: "https://www.youtube.com/watch?v=8hUcy0IrdJw"},
         {Name: "Census - 2020 Census Jobs", URL: "https://2020census.gov/en/jobs/job-details.html"},
         {Name: "Chart Gallery  ,   Google Developers", URL: "https://developers.google.com/chart/interactive/docs/gallery"},
         {Name: "Cheat Sheets", URL: "http://www.smashingapps.com/2011/07/13/50-must-have-cheat-sheets-for-web-designers-developers.html"},
         {Name: "Chris Cross", URL: "https://www.youtube.com/watch?v=nbcoywq1Oiw"},
         {Name: "Circle GIFs - Get the best gif on GIFER", URL: "https://gifer.com/en/gifs/circle"},
         {Name: "City of Shelbyville-City Hall - Posts", URL: "https://www.facebook.com/898100260320577/posts/1843100575820536/?sfnsn=mo&amp;extid=b1f9JNAxyXAV9zOq"},
         {Name: "Coding Examples", URL: "https://happycodings.com"},
         {Name: "Coffee and Conversation", URL: "https://www.eventbrite.com/e/coffee-and-conversation-tickets-54658070761?aff=ebdssbdestsearch"},
         {Name: "Companies Hiring Online Jobs, Monster.com", URL: "https://www.monster.com/career-advice/article/companies-hiring-now"},
         {Name: "Compare Files", URL: "https://www.google.com/search?source=hp&amp;ei=vaBLXdqRN4eutQaC8YqQDA&amp;q=how+to+compare+2+folders&amp;oq=how+to+compare+2+folders&amp;gs_l=psy-ab.3..0l8.2293.6628..6690...1.0..2.1614.4937.17j7j1j6-1j0j1......0....1..gws-wiz.....0..0i131.mdzr95nqiGs&amp;ved=0ahUKEwia5Obrs_LjAhUHV80KHYK4AsIQ4dUDCAc&amp;uact=5"},
         {Name: "Confirmation,  To Go Order,  Olive Garden Italian Restaurant", URL: "https://www.olivegarden.com/commerce/order-confirmation"},
         {Name: "Converting Colors - Hex - 345678", URL: "https://convertingcolors.com/hex-color-345678.html"},
         {Name: "Cory Bledsoe - LinkedIn", URL: "https://www.linkedin.com/in/cory-bledsoe-44ba7b93"},
         {Name: "Crackle", URL: "https://www.crackle.com/watch/playlist/2131371/2510872"},
         {Name: "CraigsList 3", URL: "https://techgrilled.com/best-websites-like-craigslist"},
         {Name: "CraigsList 4", URL: "https://www.investopedia.com/articles/personal-finance/091515/4-best-alternatives-craigslist.asp"},
         {Name: "Craigslist 2", URL: "https://wellkeptwallet.com/sites-like-craigslist"},
         {Name: "Craigslist Alternatives 1", URL: "https://www.topbestalternatives.com/craigslist"},
         {Name: "Cultivating Talent – IBM Z and LinuxONE Community", URL: "https://www.ibm.com/community/z/talent"},
         {Name: "Cyndi Lauper - 1989 Concert in Chile", URL: "https://www.youtube.com/watch?v=M4S3dX0YCq4"},
         {Name: "DOM Events", URL: "https://www.w3schools.com/jsref/dom_obj_event.asp"},
         {Name: "Clever Ways to Find an Unadvertised Tech Jobs", URL: "https://insights.dice.com/2018/06/27/clever-ways-find-unadvertised-job-tech/?CMPID=EM_RE_UP_JS_US_LC_LA2_JH&amp;utm_campaign=LC_LA2_JobHunting&amp;utm_source=Responsys&amp;utm_medium=Email"},
         {Name: "Danilo Montero", URL: "https://www.youtube.com/watch?v=glSRfUlq5mI"},
         {Name: "Data Science and Cognitive Computing Courses - Cognitive Class", URL: "https://cognitiveclass.ai"},
         {Name: "Data Visualization - What can you see? #baai17", URL: "https://www.slideshare.net/eoloughlin/data-visualization-what-can-you-see-baai17?next_slideshow=2"},
         {Name: "DataCamp (Login with LinkedIn)", URL: "https://www.datacamp.com/onboarding/learn?technology=sql"},
         {Name: "Design Patterns", URL: "https://ui-patterns.com/patterns/SortByColumn"},
         {Name: "Design Patterns: Walmart (SmashingMagazine)", URL: "https://www.smashingmagazine.com/2009/09/search-results-design-best-practices-and-design-patterns"},
         {Name: "Design patterns « Theresa Neil", URL: "https://theresaneil.wordpress.com/category/design-patterns"},
         {Name: "Developer - Online Courses, Classes, Training, Tutorials on Lynda", URL: "https://www.lynda.com/Developer-training-tutorials/50-0.html"},
         {Name: "Diff Checker", URL: "https://www.diffchecker.com/diff#left-31"},
         {Name: "Digitize 1", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmagesblog.com%2Fimg%2Fmagesblog%2Fdigitizer.png&amp;imgrefurl=https%3A%2F%2Fmagesblog.com%2Fpost%2F2012-02-27-show-me-data-or-how-to-digitize-plots%2F&amp;tbnid=Zl4wJ2XAnuCsWM&amp;vet=10CAMQxiAoAGoXChMImPrp4Mml6QIVAAAAAB0AAAAAEAY..i&amp;docid=YkjqOVDM3SEEnM&amp;w=856&amp;h=508&amp;itg=1&amp;q=graph%20x%5E2%2By%5E2%3D81&amp;safe=active&amp;ved=0CAMQxiAoAGoXChMImPrp4Mml6QIVAAAAAB0AAAAAEAY"},
         {Name: "Digitize 2", URL: "https://alternativeto.net/software/digitizeit"},
         {Name: "Digitize you charts with Engauge Digitizer – Jean-Etienne's blog", URL: "https://jepoirrier.org/2017/08/04/digitize-you-charts-with-engauge-digitizer"},
         {Name: "Dire Straits - Et Al", URL: "https://www.youtube.com/watch?v=6CB9OrGZ7-c"},
         {Name: "District (j.c@y.c, DH_spr23)", URL: "https://um.realpage.com"},
         {Name: "District", URL: "https://districtathurstbourne.residentportal.com/resident_portal/?module=authentication&amp;action=view_login"},
         {Name: "Do SquarePeg - Intelligent Job Matching", URL: "https://www.squarepeghires.com"},
         {Name: "Dot, dots, hamburger, menu, nav icon", URL: "https://www.iconfinder.com/icons/1772146/dot_dots_hamburger_menu_nav_icon"},
         {Name: "Dropdown Menus, CheckBoxes, etc (CSS-Tricks)", URL: "https://css-tricks.com/the-checkbox-hack"},
         {Name: "EXCEL: Top 100 Useful Excel MACRO CODES Examples [VBA Library] + PDF", URL: "https://excelchamps.com/blog/useful-macro-codes-for-vba-newcomers"},
         {Name: "Earl Dean - LinkedIn", URL: "https://www.linkedin.com/in/earl-dean-a3939572"},
         {Name: "Earle Stanley Gardner - Writing Techniques", URL: "https://books.google.com/books?id=hubiBAAAQBAJ&amp;pg=PT166&amp;lpg=PT166&amp;dq=writing+techniques:+Accomplices&amp;source=bl&amp;ots=fdnHFjNlGG&amp;sig=ACfU3U0K2zqFWOvQmi3b2R7MCWA_O7kLBg&amp;hl=en&amp;sa=X&amp;ved=2ahUKEwjavbn2oYHoAhUZZc0KHdipAvIQ6AEwAHoECBEQAQ#v=onepage&amp;q=writing%20techniques%3A%20Accomplices&amp;f=false"},
         {Name: "Edge Browser occasional flickering - Windows 10 Forums", URL: "https://www.tenforums.com/browsers-email/95020-edge-browser-occasional-flickering.html"},
         {Name: "Elevation - Material Design", URL: "https://material.io/design/environment/elevation.html#default-elevations"},
         {Name: "Elton John", URL: "https://www.youtube.com/watch?v=teYZM0Aft0A"},
         {Name: "Encapsulation, Attributes and Operations - Dharma's Excel VBA", URL: "http://darumaexcel.uijin.com/en/aboutooa/encapsulation_attr_method.html"},
         {Name: "Entertainment, Live Music, Blind Squirrel Restaurant", URL: "https://blindsquirrelrestaurant.com/entertainment"},
         {Name: "Epson Customer Support", URL: "https://www.epsonprintersupport247.com/how-to-fix-epson-printer-communication-error-on-mac"},
         {Name: "Epson ET-2760", URL: "https://epson.com/Support/Printers/All-In-Ones/ET-Series/Epson-ET-2760/s/SPT_C11CG22203"},
         {Name: "Equalonyzer  /  BabylonJS", URL: "http://synergy-development.fr/equalonyzer"},
         {Name: "Eric Clapton Live Full Concert 2018 - YouTube", URL: "https://www.youtube.com/watch?v=3F4JVO-zWUw"},
         {Name: "Excel - Excel shortcuts you really should know", URL: "https://exceljet.net/the-54-excel-shortcuts-you-really-should-know"},
         {Name: "Excel - FileDialog", URL: "https://docs.microsoft.com/en-us/office/vba/api/excel.application.filedialog"},
         {Name: "Excel - Icon Sets", URL: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ficon-library.com%2Fimages%2Fclear-filter-icon%2Fclear-filter-icon-5.jpg&amp;imgrefurl=http%3A%2F%2Ficon-library.com%2Ficon%2Fclear-filter-icon-13.html&amp;tbnid=-DHdOCxCqhOiWM&amp;vet=12ahUKEwiu_oDfgPboAhUQZq0KHf82DLkQMyguegQIARBs..i&amp;docid=KlrSlbLWho_NlM&amp;w=528&amp;h=281&amp;q=filter%20icons&amp;hl=en&amp;safe=active&amp;ved=2ahUKEwiu_oDfgPboAhUQZq0KHf82DLkQMyguegQIARBs"},
         {Name: "Excel - Keyboard shortcuts", URL: "https://support.office.com/en-us/article/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f"},
         {Name: "Excel - List of SQL commands for Commonly Used Excel Operations", URL: "https://www.analyticsvidhya.com/blog/2015/12/sql-commands-common-excel-operations"},
         {Name: "Excel - MailSystem", URL: "https://docs.microsoft.com/en-us/office/vba/api/excel.application.mailsystem"},
         {Name: "Excel - OnKey", URL: "https://docs.microsoft.com/en-us/office/vba/api/excel.application.onkey"},
         {Name: "Excel - Property Procedures - Passing Information to and from Forms", URL: "https://peltiertech.com/Excel/PropertyProcedures.html"},
         {Name: "Excel - SendKeys", URL: "https://docs.microsoft.com/en-us/office/vba/api/excel.application.sendkeys"},
         {Name: "Excel - Use MS Query to Treat Excel as a Relational Data Source", URL: "http://www.exceluser.com/formulas/msquery-excel-relational-data.htm"},
         {Name: "Excel - VBA - Save Range as JPG Image, DEVelopers HUT", URL: "https://www.devhut.net/2020/04/06/excel-vba-save-range-as-jpg-image"},
         {Name: "Excel - WebQuery", URL: "https://jkp-ads.com/Articles/WebQuery.asp"},
         {Name: "Excel Expert needed to generate 150,000 unique codes - Freelance job in Data Science And Analytics - 870 (INR) per hour, posted", URL: "https://www.toogit.com/freelance-jobs/excel-expert-needed-to-generate-150000-unique-codes"},
         {Name: "Excel Properties", URL: "https://docs.microsoft.com/en-us/office/vba/api/excel.sheets"},
         {Name: "Excel Tips", URL: "https://excel.tips.net/C0195_MRU_List.html"},
         {Name: "Excel VBA: Process Modeling", URL: "https://www.lynda.com/Excel-tutorials/Excel-VBA-Process-Modeling/2810942-2.html"},
         {Name: "Excel functions (alphabetical)", URL: "https://support.office.com/en-us/article/excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188"},
         {Name: "Excel sorting is not in ASCII order - Microsoft Community", URL: "https://answers.microsoft.com/en-us/office/forum/officeversion_other-excel/excel-sorting-is-not-in-ascii-order/36a6d145-89e5-44b9-b0c4-e49c92135808"},
         {Name: "FREELANCING: Skilled freelancers earn more per hour than 70% of workers in US", URL: "https://www.cnbc.com/2019/10/03/skilled-freelancers-earn-more-per-hour-than-70percent-of-workers-in-us.html"},
         {Name: "FREELANCING: Truelancer Jobs - February 2020", URL: "https://www.truelancer.com/freelance-jobs?jobfilter_skills%5B%5D=999"},
         {Name: "FUTURE - Online research and excel - Freelance Job in Web Research - Hours to be determined - More than 6 months - Upwork", URL: "https://www.upwork.com/job/Online-research-and-excel_~01504d389a2f1ca9ad/?utm_campaign=google_jobs_apply&amp;utm_source=google_jobs_apply&amp;utm_medium=organic"},
         {Name: "FaceFilm - Blend and Morph Face Photos Free Download", URL: "https://facefilm-blend-and-morph-face-photos-for-slideshow-effects--ios.soft112.com"},
         {Name: "Fair Chance Hiring Initiative, Department of Commerce, City of Philadelphia", URL: "https://www.phila.gov/programs/fair-chance-hiring-initiative"},
         {Name: "Find resumes: Boolean search", URL: "https://resources.workable.com/find-resumes-boolean-search-strings"},
         {Name: "Fitting ellipses, fitting circles, fitting lines. Ellipse fits, Circle fits, Line fits.", URL: "https://people.cas.uab.edu/~mosya/cl"},
         {Name: "Fiverr - Videos", URL: "https://www.fiverr.com/categories/lifestyle/promote-your-message?source=category_tree"},
         {Name: "FlexJobs - Job Categories", URL: "https://www.flexjobs.com/jobs"},
         {Name: "FlexJobs - Job Search", URL: "https://www.flexjobs.com/search?search=business+analyst&amp;location=Louisville%2C+KY"},
         {Name: "FlexJobs in KY", URL: "https://www.flexjobs.com/us/Kentucky-telecommuting-jobs"},
         {Name: "Flexbox - CSS Reference", URL: "https://cssreference.io/flexbox"},
         {Name: "Flexbox - Google Search", URL: "https://www.google.com/search?newwindow=1&amp;safe=active&amp;sxsrf=ALeKk02sq2ApU9KA0HImGwlZDcDaosc9dA%3A1592711959709&amp;ei=F9vuXtHoKordtQaPnJGwCw&amp;q=flexbox&amp;oq=flexbox&amp;gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIICAAQkQIQiwMyBwgAEEMQiwMyBwgAEEMQiwMyBwgAEEMQiwMyCQgAEAcQHhCLAzIJCAAQBxAeEIsDMgcIABBDEIsDMgcIABBDEIsDMgcIABBDEIsDOgQIABBHUIN9WIN9YMJ_aABwAXgAgAGRAogBkQKSAQMyLTGYAQCgAQGqAQdnd3Mtd2l6uAEB&amp;sclient=psy-ab&amp;ved=0ahUKEwiR0Nm0gpLqAhWKbs0KHQ9OBLYQ4dUDCAw&amp;uact=5#kpfb-stage=1"},
         {Name: "Flexbox - Google Search", URL: "https://www.google.com/search?newwindow=1&amp;safe=active&amp;sxsrf=ALeKk02sq2ApU9KA0HImGwlZDcDaosc9dA%3A1592711959709&amp;ei=F9vuXtHoKordtQaPnJGwCw&amp;q=flexbox&amp;oq=flexbox&amp;gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIICAAQkQIQiwMyBwgAEEMQiwMyBwgAEEMQiwMyBwgAEEMQiwMyCQgAEAcQHhCLAzIJCAAQBxAeEIsDMgcIABBDEIsDMgcIABBDEIsDMgcIABBDEIsDOgQIABBHUIN9WIN9YMJ_aABwAXgAgAGRAogBkQKSAQMyLTGYAQCgAQGqAQdnd3Mtd2l6uAEB&amp;sclient=psy-ab&amp;ved=0ahUKEwiR0Nm0gpLqAhWKbs0KHQ9OBLYQ4dUDCAw&amp;uact=5#kpfb-stage=1"},
         {Name: "Flexbox - Google Search", URL: "https://www.google.com/search?newwindow=1&amp;safe=active&amp;sxsrf=ALeKk02sq2ApU9KA0HImGwlZDcDaosc9dA%3A1592711959709&amp;ei=F9vuXtHoKordtQaPnJGwCw&amp;q=flexbox&amp;oq=flexbox&amp;gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIICAAQkQIQiwMyBwgAEEMQiwMyBwgAEEMQiwMyBwgAEEMQiwMyCQgAEAcQHhCLAzIJCAAQBxAeEIsDMgcIABBDEIsDMgcIABBDEIsDMgcIABBDEIsDOgQIABBHUIN9WIN9YMJ_aABwAXgAgAGRAogBkQKSAQMyLTGYAQCgAQGqAQdnd3Mtd2l6uAEB&amp;sclient=psy-ab&amp;ved=0ahUKEwiR0Nm0gpLqAhWKbs0KHQ9OBLYQ4dUDCAw&amp;uact=5#kpfb-stage=1"},
         {Name: "Flexplorer", URL: "https://bennettfeely.com/flexplorer"},
         {Name: "Flow field n.2", URL: "https://codepen.io/supah/pen/ExabJxB"},
         {Name: "Free Career Management Tools and Resources: Your Go-To List", URL: "https://insights.dice.com/2019/11/18/free-career-management-tools-resources/?amp&amp;utm_campaign=Advisory_DiceAdvisor_Default_B&amp;utm_source=Responsys&amp;utm_medium=Email"},
         {Name: "Free Frontend", URL: "https://freefrontend.com"},
         {Name: "Free TV - Movies, and Video Online, DisableMyCable", URL: "https://www.disablemycable.com/remote-control"},
         {Name: "Freelance Excel VBA Jobs (UpWork)", URL: "https://www.business-spreadsheets.com/freelance-jobs.asp"},
         {Name: "Freelance Excel VBA Jobs", URL: "https://www.business-spreadsheets.com/freelance-jobs.asp"},
         {Name: "Freelance Jobs  &amp;  Freelance Work Projects - PeoplePerHour", URL: "https://www.peopleperhour.com/freelance-jobs"},
         {Name: "Freelancers in programming, Groups - LinkedIn", URL: "https://www.linkedin.com/groups/2110488"},
         {Name: "Full Agile Process, Scrum Process, Agile Interview Questions - YouTube[end]", URL: "https://www.youtube.com/watch?v=xxhO54Ej_mM"},
         {Name: "Future Lou", URL: "https://www.futurelou.com"},
         {Name: "Fuzzy - Hybrid Fuzzy Name Matching - Towards Data Science", URL: "https://towardsdatascience.com/hybrid-fuzzy-name-matching-52a4ec8b749c"},
         {Name: "Fuzzy - Implementing a Fuzzy Search Algorithm for The Debuginator", URL: "https://medium.com/@Srekel/implementing-a-fuzzy-search-algorithm-for-the-debuginator-cacc349e6c55"},
         {Name: "Fuzzy - Reverse Engineering Sublime Text’s Fuzzy Match : programming", URL: "https://www.reddit.com/r/programming/comments/4cfz8r/reverse_engineering_sublime_texts_fuzzy_match"},
         {Name: "GOOD - Flexbox - Learn web development 2, MDN", URL: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"},
         {Name: "Gabriel B. Espoz Aliaga - LinkedIn", URL: "https://www.linkedin.com/in/gabriel-espoz"},
         {Name: "Get started with the Universal Windows Platform (UWP) - Windows UWP applications, Microsoft Docs", URL: "https://docs.microsoft.com/en-us/windows/uwp/get-started/?ocid=WinClient_Ver1703_Settings_TipCreateApp"},
         {Name: "Good - Flex Help", URL: "https://flexbox.help"},
         {Name: "Google - How to find candidates - Boolean search", URL: "https://resources.workable.com/find-candidates-location-boolean-search-strings"},
         {Name: "Google Blogger", URL: "https://www.blogger.com/about/?r=2"},
         {Name: "Google Classroom (9bk4kl9)", URL: "https://classroom.google.com/c/NDE0ODE3OTg3MDFa"},
         {Name: "Google Classroom", URL: "https://classroom.google.com/h"},
         {Name: "Google Image Result for https://cdn.slidesharecdn.com/ss_thumbnails/lsntap1707dataviztools-170706220301-thumbnail-4.jpg?cb=1499", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.slidesharecdn.com%2Fss_thumbnails%2Flsntap1707dataviztools-170706220301-thumbnail-4.jpg%3Fcb%3D1499379648&amp;imgrefurl=https%3A%2F%2Fwww.slideshare.net%2FLSNTAP%2Fdata-visualization-tools-77592388&amp;docid=06RfhAAUU2reXM&amp;tbnid=5EKFdwXbxm6jgM%3A&amp;vet=1&amp;w=768&amp;h=576&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoCXoECAEQMQ&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://cfvod.kaltura.com/p/2354731/sp/235473100/thumbnail/entry_id/1_8wka1ypg/version/100001/width/412", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcfvod.kaltura.com%2Fp%2F2354731%2Fsp%2F235473100%2Fthumbnail%2Fentry_id%2F1_8wka1ypg%2Fversion%2F100001%2Fwidth%2F412%2Fheight%2F248&amp;imgrefurl=https%3A%2F%2Fostate.tv%2Fmedia%2FData%2Band%2BDonutsA%2BIntroduction%2Bto%2BData%2BVisualization%2F1_8wka1ypg&amp;docid=uj7mYtX9WSnRiM&amp;tbnid=hDxcflyj8zd21M%3A&amp;vet=1&amp;w=412&amp;h=232&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoAnoECAEQHA&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://d1m75rqqgidzqn.cloudfront.net/2019/09/Blog-infographics-Data-2-sets-1.jpg", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd1m75rqqgidzqn.cloudfront.net%2F2019%2F09%2FBlog-infographics-Data-2-sets-1.jpg&amp;imgrefurl=https%3A%2F%2Fwww.mygreatlearning.com%2Fblog%2Fintroduction-to-data-visualisation-why-is-it-important%2F&amp;docid=34Mnv19RvMEarM&amp;tbnid=UOm3sd2cJhEd1M%3A&amp;vet=1&amp;w=750&amp;h=603&amp;itg=1&amp;safe=active&amp;bih=755&amp;biw=1600&amp;ved=2ahUKEwiD_uWqrejoAhWIQs0KHQAnBNEQxiAoAnoECAEQHA&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://i.ytimg.com/vi/I4lxaYrgEsU/maxresdefault.jpg", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FI4lxaYrgEsU%2Fmaxresdefault.jpg&amp;imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DI4lxaYrgEsU&amp;docid=bEFWZE6lB6ZyJM&amp;tbnid=AloU8bJ113hypM%3A&amp;vet=1&amp;w=1280&amp;h=720&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoA3oECAEQHw&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://i.ytimg.com/vi/mfd11L0pzoI/hqdefault.jpg", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fmfd11L0pzoI%2Fhqdefault.jpg&amp;imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dmfd11L0pzoI&amp;docid=-e2n0DhGTtgpoM&amp;tbnid=Oczq-Hm5MGKb7M%3A&amp;vet=1&amp;w=480&amp;h=360&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoAXoECAEQGQ&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://image.slidesharecdn.com/digitalstrategydatavisualizationtableau-170317050935/95/data-visualizat", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.slidesharecdn.com%2Fdigitalstrategydatavisualizationtableau-170317050935%2F95%2Fdata-visualization-trends-next-steps-for-tableau-2-638.jpg%3Fcb%3D1489956136&amp;imgrefurl=https%3A%2F%2Fwww.slideshare.net%2FArunimaGupta5%2Fdata-visualization-trends-next-steps-for-tableau&amp;docid=hv0bMKHaegNHFM&amp;tbnid=fOVuHtMFov5iAM%3A&amp;vet=1&amp;w=638&amp;h=479&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoCnoECAEQNA&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://image.slidesharecdn.com/gaintrodatavisualizationworkshop2015hunterwhitneydraft-150208160154-con", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.slidesharecdn.com%2Fgaintrodatavisualizationworkshop2015hunterwhitneydraft-150208160154-conversion-gate01%2F95%2Fintroduction-to-data-visualization-workshop-for-general-assembly-by-hunter-whitney-feb-2015-1-638.jpg%3Fcb%3D1423413832&amp;imgrefurl=https%3A%2F%2Fwww.slideshare.net%2Fhunterwhitney%2Fga-intro-data-visualization-workshop-2015-hunter-whitney-draft&amp;docid=xOqi8erHIGytsM&amp;tbnid=Xhtls9QzKvXEbM%3A&amp;vet=1&amp;w=638&amp;h=359&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoC3oECAEQNw&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://image.slidesharecdn.com/the-importance-of-data-visualization-150428072131-conversion-gate01/95/", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.slidesharecdn.com%2Fthe-importance-of-data-visualization-150428072131-conversion-gate01%2F95%2Fthe-importance-of-data-visualization-1-638.jpg%3Fcb%3D1430210013&amp;imgrefurl=https%3A%2F%2Fwww.slideshare.net%2FCenterline_Digital%2Fthe-importance-of-data-visualization&amp;docid=jb1rQvmQfa5jwM&amp;tbnid=pvB2MCJLIszRRM%3A&amp;vet=1&amp;w=638&amp;h=360&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoCHoECAEQLg&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://library.gwu.edu/sites/default/files/events/data-day-intro-data-visualization-square-01.png", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flibrary.gwu.edu%2Fsites%2Fdefault%2Ffiles%2Fevents%2Fdata-day-intro-data-visualization-square-01.png&amp;imgrefurl=https%3A%2F%2Flibrary.gwu.edu%2Fnews-events%2Fevents%2Fintroduction-data-visualization&amp;docid=cSVvV94nJofn0M&amp;tbnid=IlLwecoWc79qgM%3A&amp;vet=1&amp;w=300&amp;h=300&amp;itg=1&amp;safe=active&amp;bih=629&amp;biw=1333&amp;ved=2ahUKEwiT-uycjPPoAhXNbc0KHbQMAi4QxiAoAHoECAEQFg&amp;iact=c&amp;ictx=1"},
         {Name: "Google Image Result for https://library.gwu.edu/sites/default/files/events/data-day-intro-data-visualization-square-01.png", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flibrary.gwu.edu%2Fsites%2Fdefault%2Ffiles%2Fevents%2Fdata-day-intro-data-visualization-square-01.png&amp;imgrefurl=https%3A%2F%2Flibrary.gwu.edu%2Fnews-events%2Fevents%2Fintroduction-data-visualization&amp;docid=cSVvV94nJofn0M&amp;tbnid=IlLwecoWc79qgM%3A&amp;vet=1&amp;w=300&amp;h=300&amp;itg=1&amp;safe=active&amp;bih=755&amp;biw=1600&amp;ved=2ahUKEwiD_uWqrejoAhWIQs0KHQAnBNEQxiAoAXoECAEQGQ&amp;iact=c&amp;ictx=1"},
         {Name: "Google Keep", URL: "https://keep.google.com/u/0"},
         {Name: "Google Products (All)", URL: "https://about.google/intl/en/products/?tab=wh&amp;tip=parking-reminder"},
         {Name: "Google Sites", URL: "https://sites.google.com/new"},
         {Name: "Google X-Ray Search, Find Hidden Candidates", URL: "https://workology.com/how-to-use-a-google-x-ray-search-to-find-hidden-candidates"},
         {Name: "Google", URL: "https://www.google.com"},
         {Name: "Guide to the Best Companies for Remote, Part-Time, and Flexible Jobs, FlexJobs", URL: "https://www.flexjobs.com/company-guide"},
         {Name: "Guru - Hire Freelancers Online and Find Freelance Jobs Online", URL: "https://www.guru.com"},
         {Name: "Guru - Hire Freelancers Online and Find Freelance Jobs Online", URL: "https://www.guru.com"},
         {Name: "HP 3 year w/Accidental Care (U9ED6A)", URL: "https://store.hp.com/us/en/pdp/hp-3-year-pickup-and-return-support-w-accidental-damage-protection-hp-15-17---pav-10-nb?aoid=97289&amp;ProductNumber=4NC70UA&amp;SerialNumber=5CG9236D2C&amp;wsd=20190710&amp;wed=20200709"},
         {Name: "HP Printer Problems and Issues After Windows 10 Updates", URL: "https://support.hp.com/us-en/topic/windows-10-support-center-printing"},
         {Name: "HTML DOM IFrame Objects", URL: "https://www.w3schools.com/jsref/dom_obj_frame.asp"},
         {Name: "HTML Links", URL: "https://www.w3schools.com/html/html_links.asp"},
         {Name: "HTML: Search Object", URL: "https://www.w3schools.com/jsref/dom_obj_search.asp"},
         {Name: "Hamburger icon: How these three lines mystify most people - BBC News", URL: "https://www.bbc.com/news/magazine-31602745"},
         {Name: "HealthCare.gov - 2020 MartketPlace", URL: "https://www.healthcare.gov"},
         {Name: "Hire Freelancers  &amp;  Find Freelance Jobs Online - Truelancer", URL: "https://www.truelancer.com"},
         {Name: "Hire Freelancers  &amp;  Remote Workers For Free", URL: "https://talent.hubstaff.com"},
         {Name: "Holland Code (RIASEC) Test", URL: "https://openpsychometrics.org/tests/RIASEC"},
         {Name: "How To Cast Media To Device In Windows 10 [Tutorial] - YouTube", URL: "https://www.youtube.com/watch?v=n_AtfXSohU4"},
         {Name: "How To Create a Glowing Text", URL: "https://www.w3schools.com/howto/howto_css_glowing_text.asp"},
         {Name: "How To Create a Timeline", URL: "https://www.w3schools.com/howto/howto_css_timeline.asp"},
         {Name: "How To Write User Stories - YouTube", URL: "https://www.youtube.com/watch?v=eYZ8vBXL1kk"},
         {Name: "How to Build a Custom Mega Menu with Flexbox", URL: "https://webdesign.tutsplus.com/tutorials/how-to-build-a-mega-menu-with-flexbox--cms-33540"},
         {Name: "How to Cast Video From Your Computer to the TV - YouTube", URL: "https://www.youtube.com/watch?v=GAkpMfu642Q"},
         {Name: "How to Make Money at Home Using Microsoft Excel, ToughNickel", URL: "https://toughnickel.com/self-employment/Make-money-at-home-from-Excel"},
         {Name: "How to Play Movies From PC to TV Using Wireless - YouTube", URL: "https://www.youtube.com/watch?v=EPHuJiDAd-8"},
         {Name: "How to Use Google to Find Files Online", URL: "https://www.lifewire.com/use-google-to-find-open-files-3482196"},
         {Name: "How to Work Remotely: A Beginner's Guide to Landing a Remote Job", URL: "https://www.goskills.com/Office-Productivity/Articles/How-to-work-remotely"},
         {Name: "How to Write a Resume, 2019 Beginner's Guide, Novorésumé", URL: "https://novoresume.com/career-blog/how-to-write-a-resume-guide"},
         {Name: "How to cast media from Windows 10 PC to your Smart TV - Dignited", URL: "https://www.dignited.com/33783/how-to-cast-media-from-windows-10-pc-to-smart-tv"},
         {Name: "Huey Lewis", URL: "https://www.youtube.com/watch?v=IwztgcEPnoE"},
         {Name: "Hybrid Jobs - Why you should care about the Hybrid Jobs Trend – ApTask", URL: "https://www.aptask.com/why-you-should-care-about-the-hybrid-jobs-trend"},
         {Name: "IBM Talent Match - Skills Gateway - Global", URL: "https://www.ibm.com/services/learning/R035159C60850Z79"},
         {Name: "Imperfect Produce Jobs, AngelList", URL: "https://angel.co/company/imperfect-produce/jobs?utm_campaign=platform-newsletter&amp;utm_medium=email"},
         {Name: "Info.com - Search The Web", URL: "https://www.info.com"},
         {Name: "Infographic - Functional Formats", URL: "https://www.pinterest.com/templicate/core-functional-formatted-resumes"},
         {Name: "Introduction to Data Visualization, Data Visualization With Tableau, Tableau Tutorial, Edureka - YouTube", URL: "https://www.youtube.com/watch?v=mfd11L0pzoI"},
         {Name: "Inverse Function Calculator - eMathHelp", URL: "https://www.emathhelp.net/calculators/algebra-2/inverse-function-calculator/?f=%289x-4%29%5E%281%2F3%29&amp;steps=on"},
         {Name: "IrfanView 64-bit version", URL: "https://www.irfanview.com/64bit.htm"},
         {Name: "Iz Israel Kamakawiwo'ole", URL: "https://www.youtube.com/watch?v=yoRpWEE-E0Q"},
         {Name: "J2 Dash", URL: "https://www.att.com/ecms/dam/att/devicesupport/ATT-J260A-DASH-EN-UM-TN-SC6-050919-FINAL-WEB-AC52319.pdf"},
         {Name: "JOBS - Louisville Free Classes", URL: "https://www.futurelou.com"},
         {Name: "JOBS - Talent Network", URL: "https://www.careerbuilder.com/s/talent-networks"},
         {Name: "JS: Create a Filter/Search List", URL: "https://www.w3schools.com/howto/howto_js_filter_lists.asp"},
         {Name: "JavaScript Code Examples", URL: "https://freefrontend.com/javascript-code-examples"},
         {Name: "JavaScript Line Charts  &amp;  Graphs, CanvasJS2", URL: "https://canvasjs.com/html5-javascript-line-chart"},
         {Name: "JavaScript Tutorial", URL: "https://www.w3schools.com/js/default.asp"},
         {Name: "Javascript - Real time data graphing on a line chart with html5 - Stack Overflow", URL: "https://stackoverflow.com/questions/6502827/real-time-data-graphing-on-a-line-chart-with-html5"},
         {Name: "Javascript code to parse CSV data - Stack Overflow", URL: "https://stackoverflow.com/questions/1293147/javascript-code-to-parse-csv-data"},
         {Name: "Jesus Adrian Romero - Concierto Desde Nuestro Encierro 2", URL: "https://www.youtube.com/watch?v=2pyiaVVyQ7A"},
         {Name: "Job - mySkills myFuture, CareerOneStop", URL: "https://www.myskillsmyfuture.org/skillstransferability/GetStartedPageHelp.aspx"},
         {Name: "Job Board — KentuckianaWorks", URL: "https://www.kentuckianaworks.org/jobs"},
         {Name: "Job-Hunt.org", URL: "https://www.job-hunt.org"},
         {Name: "Jobs - JobList", URL: "https://www.joblist.com/search?l=Hurstbourne%2C%20KY&amp;nm=1"},
         {Name: "Jobs - Jobtomic", URL: "https://www.jobtomic.com/jobs/results.jsp?job=All%20Jobs&amp;location=40222&amp;CID=3494&amp;SID=3494JOBS&amp;OID=1313"},
         {Name: "Jobs - Upward", URL: "https://www.upward.careers/results.jsp?CID=4139&amp;SID=1w8ro17del&amp;location=Hurstbourne,%20KY&amp;job="},
         {Name: "Joe Cocker", URL: "https://www.youtube.com/watch?v=9640qqY3yrk&amp;t=5440s"},
         {Name: "Joe", URL: "https://www.facebook.com/joe.donaldson.5817"},
         {Name: "KentuckianaWorks Job Board", URL: "https://www.kentuckianaworks.org/jobs"},
         {Name: "Kiran B. -Excel Expert, Hire Freelancer from India", URL: "https://www.toogit.com/freelancer/profile/kiran-bajulge"},
         {Name: "Krita Desktop ", URL: "https://krita.org/en/download/krita-desktop"},
         {Name: "LI", URL: "https://www.linkedin.com/feed"},
         {Name: "Land the Right Job, Labtuit", URL: "https://www.labtuit.com"},
         {Name: "LaserShip® Contact, Package Delivery Company, Contact Us", URL: "http://www.lasership.com/contact.php"},
         {Name: "Latest COBOL technical questions topics - Open Mainframe Project Community Forums", URL: "https://community.openmainframeproject.org/c/cobol-technical-questions/16"},
         {Name: "Least Squares Regression", URL: "https://www.mathsisfun.com/data/least-squares-regression.html"},
         {Name: "Library - LFPL - Lynda.com", URL: "http://www.lfpl.org/lynda"},
         {Name: "Library - LFPL - Research Tools", URL: "http://www.lfpl.org/research/Subjects/atozdatabaselistremote.asp"},
         {Name: "Line Chart  ,   Charts  ,   Google Developers", URL: "https://developers.google.com/chart/interactive/docs/gallery/linechart"},
         {Name: "Linear Regression: Simple Steps, Video. Find Equation, Coefficient, Slope - Statistics How To", URL: "https://www.statisticshowto.com/probability-and-statistics/regression-analysis/find-a-linear-regression-equation"},
         {Name: "LinkedIn Learning", URL: "https://www.linkedin.com/learning/me"},
         {Name: "LinkedIn", URL: "https://www.linkedin.com/me/search-appearances"},
         {Name: "LinkedIn", URL: "https://www.linkedin.com/mynetwork/invite-connect/connections"},
         {Name: "Living Forward Assessment - Building Champions, Inc., Begin", URL: "https://www.livingforwardassessment.com"},
         {Name: "Louisville Events", URL: "https://do502.com/p/this-week"},
         {Name: "Louisville Networking", URL: "https://www.eventbrite.com/e/the-louisville-networking-group-tickets-65567232357?aff=ebdssbdestsearch"},
         {Name: "MDN - CSS Flexible Box Layout", URL: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"},
         {Name: "MDN - Flexbox (Cards, Forms, Media, etc)", URL: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox"},
         {Name: "Macros in Windows 10", URL: "https://support.microsoft.com/en-us/help/4052290/accessories-how-do-i-create-macros"},
         {Name: "Marcos Witt", URL: "https://www.youtube.com/watch?v=ARqnSSGrNMM"},
         {Name: "Mastering CSS Layout with Flexbox", URL: "https://www.sketchingwithcss.com/samplechapter/cheatsheet.html"},
         {Name: "Mathway, Algebra Problem Solver", URL: "https://www.mathway.com/Algebra"},
         {Name: "Menus - Pure", URL: "https://purecss.io/menus"},
         {Name: "Michael Jackson - Billie Jean Tribute", URL: "https://www.youtube.com/watch?v=B9qeMLKjTPA"},
         {Name: "Michael Jackson - Smooth Criminal", URL: "https://www.youtube.com/watch?v=h_D3VFfhvs4"},
         {Name: "Michael Jackson - Super Bowl", URL: "https://www.youtube.com/watch?v=nBkNQZ-6QHg"},
         {Name: "MicroSoft - Start developing for Windows", URL: "https://developer.microsoft.com/en-us/windows/get-started-windows-10"},
         {Name: "MicroSoft - Technical documentation, API, and code examples, Microsoft Docs", URL: "https://docs.microsoft.com/en-us"},
         {Name: "MicroSoft - Visual Studio IDE, Code Editor, Azure DevOps, &amp;  App Center - Visual Studio", URL: "https://visualstudio.microsoft.com"},
         {Name: "MicroSoft Reference", URL: "https://docs.microsoft.com/en-us/previous-versions/office/developer/office-2007/aa338202(v=office.12)"},
         {Name: "Microsoft Access 2019 Open Academic", URL: "https://softwarekeep.com/microsoft-access-2019-open-academic.html#fo_c=3088&amp;fo_k=9031b33cd3e29956cadf577b53137734&amp;fo_s=gplaus?gclid=CjwKCAjwqdn1BRBREiwAEbZcR7gs2Z4XhxvtqbsAHybL09oZfLkohSZBRk4RlkF8VfbQ7o2Nz9SWBRoC9CoQAvD_BwE"},
         {Name: "Microsoft Account, Profile", URL: "https://account.microsoft.com/profile"},
         {Name: "Microsoft Docs - Learning System", URL: "https://docs.microsoft.com/en-us/learn/browse"},
         {Name: "Microsoft Edge Flashing/Blinking screen while browsing certain - Microsoft Community", URL: "https://answers.microsoft.com/en-us/edge/forum/all/microsoft-edge-flashingblinking-screen-while/10982e90-f140-41a4-8e6b-efd387baa912"},
         {Name: "Microsoft Learn, Microsoft Docs", URL: "https://docs.microsoft.com/en-us/learn"},
         {Name: "Microsoft PowerPoint - Turning Search into Find AODC.pptx", URL: "http://www.ellisonconsulting.com/downloads/Turning_Search_into_Find_AODC.pdf"},
         {Name: "Mirror Aid", URL: "https://autocleantips.com/gadgets/mirror-list.php?affId=89D94428&amp;c1=listicle_us&amp;c2=readersdigest-rd"},
         {Name: "Mission Partner—Re:Center Ministries, Southeast Christian Church", URL: "https://www.southeastchristian.org/stories/recenter-ministries"},
         {Name: "Music - Cyndi Lauper Album", URL: "https://www.youtube.com/watch?v=PIb6AZdTr-A&amp;list=RDEM9owQQD9S_ol8ThdwMNSO5w&amp;start_radio=1"},
         {Name: "Music - Elton John - Festival de Viña 2013", URL: "https://www.youtube.com/watch?v=9_5UFmJ7YhM"},
         {Name: "Music - Israel  IZ  Kamakawiwoʻole", URL: "https://www.youtube.com/watch?v=yoRpWEE-E0Q"},
         {Name: "Music - Israel Kamakawiwo'ole", URL: "https://www.youtube.com/watch?v=KIn-q6NLZoA"},
         {Name: "Music - James Taylor", URL: "https://www.youtube.com/watch?v=wbUs--JK6Vc"},
         {Name: "Music - John Denver - Vina del Mar, Chile [02/14/1985] (Full) - YouTube", URL: "https://www.youtube.com/watch?v=dn8XEP2auVQ"},
         {Name: "Music - John Denver Album", URL: "https://www.youtube.com/watch?v=l7D6H3pFYkc"},
         {Name: "Music - Loreena McKennitt", URL: "https://www.youtube.com/watch?v=RooTTuLCfNM"},
         {Name: "Music - Phil Collins Album", URL: "https://www.youtube.com/watch?v=MUCxn6vcuQo"},
         {Name: "Music - Phil Collins Concert (In The Air Tonight)", URL: "https://www.youtube.com/watch?v=IeDMnyQzS88"},
         {Name: "Music - Rick Astley at Festival de Viña del Mar 2016", URL: "https://www.youtube.com/watch?v=TAhUy0MWjP8"},
         {Name: "Music - Samvel Yervinyan", URL: "https://www.youtube.com/results?search_query=Samvel+Yervinyan"},
         {Name: "Music - Sangah Noon (Beatles)", URL: "https://www.youtube.com/watch?v=-oVMImsDWGI"},
         {Name: "Music - Simon and Garfunkel", URL: "https://www.youtube.com/watch?v=7aZ-8fENf9g"},
         {Name: "Music - Sting Collection", URL: "https://www.youtube.com/watch?v=RRwebyePnPk"},
         {Name: "Music - Sting at Vina Del Mar", URL: "https://www.youtube.com/watch?v=u1QAbdIEicw"},
         {Name: "Music - The Police Live 2008", URL: "https://www.youtube.com/watch?v=DbGqXpDIHjo"},
         {Name: "Music - Yanni - The Storm", URL: "https://www.youtube.com/watch?v=lHF_9qtcTvM&amp;list=RDlHF_9qtcTvM&amp;start_radio=1&amp;t=0"},
         {Name: "Music - Yanni PlayList", URL: "https://www.youtube.com/watch?v=jlI547QDm8c"},
         {Name: "My Playground - Opacity", URL: "https://www.babylonjs-playground.com/#ASI4KC"},
         {Name: "My Playground - Skull", URL: "https://www.babylonjs-playground.com/#GK7FK#80"},
         {Name: "MyPlan :: Assessment :: Values Assessment", URL: "https://www.myplan.com/assess/values.php"},
         {Name: "NCPTC (PCMStore.net)", URL: "https://www.pcmstore.net/secure/default.aspx"},
         {Name: "Neil Diamond 1", URL: "https://www.youtube.com/watch?v=cIZt5BPYEv4"},
         {Name: "Neil Diamond 2 (UK)", URL: "https://www.youtube.com/watch?v=KM0QNl4-w7w"},
         {Name: "Networking Events", URL: "https://www.eventbrite.com/d/ky--louisville/networking/?page=2"},
         {Name: "Norton", URL: "https://nortonhealthcare.com/contact-us"},
         {Name: "NotePad++ Installer", URL: "https://notepad-plus-plus.org/downloads/v7.7.1"},
         {Name: "Notifications - LinkedIn", URL: "https://www.linkedin.com/notifications"},
         {Name: "Older Workers in Tech Can Fight Against Ageism's Impact", URL: "https://insights.dice.com/2019/01/09/older-workers-tech-fight-against-ageism-impact"},
         {Name: "Online Courses During COVID-19: Programming Languages, Tech Skills", URL: "https://insights.dice.com/2020/05/04/online-courses-during-covid-19-programming-languages-tech-skills/?amp&amp;utm_campaign=Advisory_DiceAdvisor_Default_A&amp;utm_source=Responsys&amp;utm_medium=Email"},
         {Name: "Online Word Cloud Generators", URL: "http://www.smashingapps.com/2011/12/15/nine-excellent-yet-free-online-word-cloud-generators.html"},
         {Name: "Opportunity - Leads", URL: "https://myopportunity.com/leads/2647930-2844088"},
         {Name: "Opportunity Login", URL: "https://www.myopportunity.com"},
         {Name: "PAINT SPLATTER VISUALIZER - Google Search", URL: "https://www.google.com/search?q=PAINT+SPLATTER+VISUALIZER&amp;newwindow=1&amp;safe=active&amp;sxsrf=ALeKk00q_VGsC-QLMp5NU2TWLFxeXFrLog:1590552710277&amp;source=lnms&amp;tbm=isch&amp;sa=X&amp;ved=2ahUKEwjFjqvKltPpAhWCBc0KHcSGC9oQ_AUoAXoECBYQAw&amp;biw=1600&amp;bih=757#imgrc=9N9t8vPiMmhZpM"},
         {Name: "PATRIOTIC Music", URL: "https://www.youtube.com/watch?v=4daJ8gMtE-g"},
         {Name: "PHP: Manual Quick Reference", URL: "https://www.php.net/manual-lookup.php?pattern=Sub&amp;lang=en&amp;scope=404quickref"},
         {Name: "Parker - In Choice Care Network PPO", URL: "https://www.humana.com/finder/medical/results?pageId=0a3495debb654cbe9bf1e27d073f8b40"},
         {Name: "Passport - Business Analyst Application", URL: "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?lang=en_US&amp;cid=b8f4ae32-7770-44c4-8b50-39f0557a9734&amp;ccId=19000101_000001"},
         {Name: "Paul Simon 06/2020", URL: "https://www.youtube.com/watch?v=dYhPLiWuVjs"},
         {Name: "Pet shops in louisville", URL: "https://www.google.com/search?q=pet+shops+in+louisville+ky&amp;npsic=0&amp;rflfq=1&amp;rlha=0&amp;rllag=38249600,-85608554,4138&amp;tbm=lcl&amp;ved=2ahUKEwjwzIWP3qnkAhUEaq0KHQCCAKEQtgN6BAgLEAU&amp;tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10&amp;rldoc=1#rlfi=hd:;si:;mv:!1m2!1d38.37716517290721!2d-85.1928592483435!2m2!1d38.067527771955525!2d-85.9509158889685!4m2!1d38.2225112038493!2d-85.571887568656!5i11"},
         {Name: "Phil Collins", URL: "https://www.youtube.com/watch?v=TLDeyFP6d0E"},
         {Name: "PicMorph - Morph Faces", URL: "https://www.picmorph.co"},
         {Name: "Picture to People - Free Online Photo Editors and Text Generators", URL: "http://www.picturetopeople.org"},
         {Name: "Piedmont - Operations agent Jobs in Sdf at Piedmont Airlines, Inc.", URL: "https://piedmont.jobs.net/en-US/search?keywords=Operations%20agent&amp;location=sdf"},
         {Name: "Piedmont Airline - Operations Agent in Louisville, KY at Piedmont Airlines, Inc.", URL: "https://piedmont.jobs.net/en-US/job/operations-agent/J3V16H705C7RMSQ4ZX9"},
         {Name: "PostgreSQL - Syntax - Tutorialspoint", URL: "https://www.tutorialspoint.com/postgresql/postgresql_syntax.htm"},
         {Name: "PostgreSQL SQL Syntax and Use, PostgreSQL Naming Rules, InformIT", URL: "https://www.informit.com/articles/article.aspx?p=409471"},
         {Name: "PostgreSQL: Documentation: 9.2: SQL Syntax", URL: "https://www.postgresql.org/docs/9.2/sql-syntax.html"},
         {Name: "Pre-Algebra Calculators - eMathHelp", URL: "https://www.emathhelp.net/calculators/pre-algebra"},
         {Name: "Predictive Search: Is This the Future or the End of Search?", URL: "https://www.wordstream.com/blog/ws/2013/06/24/predictive-search"},
         {Name: "Principles of Data Visualization", URL: "https://www.slideshare.net/eamonnmag/principles-of-data-visualization-71834041"},
         {Name: "Programming Excel/VBA Part II (A. Fring)", URL: "http://www.staff.city.ac.uk/o.castro-alvaredo/PROGRAMMING/Lect4.pdf"},
         {Name: "Programming: Happy Coding", URL: "http://www.happycodings.com"},
         {Name: "Quadratic Regression", URL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhome.ubalt.edu%2Fntsbarsh%2FBusiness-stat%2Fotherapplets%2FquadraticScatter.gif&amp;imgrefurl=https%3A%2F%2Fhome.ubalt.edu%2Fntsbarsh%2FBusiness-stat%2Fotherapplets%2FQuadReg.htm&amp;tbnid=x0zvsY_XLw-JJM&amp;vet=12ahUKEwj3h9fpt7fpAhVYQa0KHWmGDmgQMygregQIARBz..i&amp;docid=xSQRZTi3Dyfi0M&amp;w=552&amp;h=353&amp;q=quadratic%20regression%20equation&amp;safe=active&amp;ved=2ahUKEwj3h9fpt7fpAhVYQa0KHWmGDmgQMygregQIARBz"},
         {Name: "Quadratic Regression: Simple Definition, TI-Calculator Instructions - Statistics How To", URL: "https://www.statisticshowto.com/quadratic-regression"},
         {Name: "Query Language Understood by SQLite", URL: "https://www.sqlite.org/lang.html"},
         {Name: "Quick Google Cheat Sheet for Search", URL: "https://www.lifewire.com/google-cheat-sheet-codes-1616808"},
         {Name: "Real Id - (WDRB) Kentucky's switch to Real IDs threatens to close small circuit clerk offices", URL: "https://www.wdrb.com/news/kentucky-s-switch-to-real-ids-threatens-to-close-small/article_6c5358cc-1b60-11e9-bd5e-176dd5c06389.html"},
         {Name: "Real Id - IDocument Guide (drive.ky.gov)", URL: "https://drive.ky.gov/confidentKY/pages/IDocument-Guide.aspx"},
         {Name: "Real Id - Jefferson County Clerk", URL: "http://www.jeffersoncountyclerk.org"},
         {Name: "Real Id - Kentucky Driver Licenses", URL: "https://www.drivejefferson.com"},
         {Name: "Real Id - ValidProofDocuments.pdf", URL: "https://drive.ky.gov/Docs/ValidProofDocuments.pdf"},
         {Name: "Regression Analysis: Step by Step Articles, Videos, Simple Definitions", URL: "https://www.statisticshowto.com/probability-and-statistics/regression-analysis/#MRA"},
         {Name: "Regression Slope Intercept: How to Find it in Easy Steps - Statistics How To", URL: "https://www.statisticshowto.com/find-regression-slope-intercept"},
         {Name: "Remote Excel Jobs in April 2020", URL: "https://remoteok.io/remote-excel-jobs"},
         {Name: "Remote Excel Jobs, Employment in Louisville, KY, Indeed.com", URL: "https://www.indeed.com/jobs?q=Remote+Excel&amp;l=Louisville%2C+KY"},
         {Name: "Remote freelance teaching excel -upwork - Google Search", URL: "https://www.google.com/search?q=remote+freelance+teaching+excel+-upwork&amp;newwindow=1&amp;safe=active&amp;sxsrf=ALeKk01bAyfetOyTkK_FTiGM1BdICsLZIg:1585799691101&amp;source=lnms&amp;tbm=isch&amp;sa=X&amp;ved=2ahUKEwiMnJea7MjoAhXRQc0KHbCvCWgQ_AUoAXoECBYQAw&amp;biw=1600&amp;bih=755"},
         {Name: "RenderTargetTexture - Babylon.js Documentation", URL: "https://doc.babylonjs.com/api/classes/babylon.rendertargettexture"},
         {Name: "Report Writer List", URL: "https://docs.oracle.com/cd/E57185_01/ESBTR/rw_cmd_ref.html"},
         {Name: "Research: full stack developer - Google Search", URL: "https://www.google.com/search?sxsrf=ACYBGNSKHl0moE20rRhljPwieyOrbi25sA%3A1572664547239&amp;source=hp&amp;ei=4_S8XcngC43QtAWlq6igDQ&amp;q=what+is+a+full+stack+developer&amp;oq=what+is+a+full+stack+developer&amp;gs_l=psy-ab.3..35i39l2j0i131j0l3j0i131j0l3.2229.5893..6524...0.0..0.290.486.0j1j1......0....1..gws-wiz.....10..35i362i39.bP9roDGk-vU&amp;ved=0ahUKEwiJ3r79x8rlAhUNKK0KHaUVCtQQ4dUDCAc&amp;uact=5"},
         {Name: "Responsive Web Design Patterns  ,   Web Fundamentals  ,   Google Developers", URL: "https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns"},
         {Name: "Resume Examples for Your 2019 Job Application", URL: "https://novoresume.com/career-blog/resume-examples"},
         {Name: "Resumes - Functional Style", URL: "https://www.businessnewsdaily.com/7770-functional-resume.html"},
         {Name: "Robot Rain", URL: "https://codepen.io/walsh9/pen/oigDA"},
         {Name: "SECC Career Transitions", URL: "https://www.southeastchristian.org/search?q=career"},
         {Name: "SECC", URL: "https://online.southeastchristian.org"},
         {Name: "SELECT", URL: "https://www.sqlite.org/lang_select.html"},
         {Name: "SQL Resume Samples, Velvet Jobs", URL: "https://www.velvetjobs.com/resume/sql-resume-sample"},
         {Name: "SQLite Sample Database And Its Diagram (in PDF format)", URL: "https://www.sqlitetutorial.net/sqlite-sample-database"},
         {Name: "SQLite Sample Database And Its Diagram (in PDF format)", URL: "https://www.sqlitetutorial.net/sqlite-sample-database"},
         {Name: "SQLite Tutorial - An Easy Way to Master SQLite Fast", URL: "https://www.sqlitetutorial.net"},
         {Name: "Samsung Galaxy J2 Dash J260A User Manual", URL: "https://www.att.com/ecms/dam/att/devicesupport/ATT-J260A-DASH-EN-UM-TN-SC6-050919-FINAL-WEB-AC52319.pdf"},
         {Name: "Scrape - United States Business Directory - Bizapedia", URL: "https://www.bizapedia.com/us"},
         {Name: "Scrape www.jobs2creers.com", URL: "https://www.jobs2careers.com/search/results?q=business%20analyst&amp;l=Louisville%2C%20KY&amp;jobType=0&amp;exactMatch=0&amp;distance=24&amp;experienceLevel=0&amp;relevancyWeight=0"},
         {Name: "Search Patterns.pdf", URL: "http://storage.hinterland.nu/webdav/Documents/To%20Read/Search%20Patterns.pdf"},
         {Name: "ShellExecuteA function (shellapi.h) - Win32 apps, Microsoft Docs", URL: "https://docs.microsoft.com/en-us/windows/win32/api/shellapi/nf-shellapi-shellexecutea"},
         {Name: "Simon &amp; Garfunkel 1", URL: "https://www.youtube.com/watch?v=Bxryb3xN-Lo"},
         {Name: "Simon &amp; Garfunkel 2", URL: "https://www.youtube.com/watch?v=o-urzDZdbQY"},
         {Name: "Singularity is Near -SIN Graph - Processor Performance (MIPS)", URL: "http://www.singularity.com/charts/page64.html"},
         {Name: "SketchBook Free Download, Download SketchBook App, Autodesk", URL: "https://www.autodesk.com/products/sketchbook/free-download"},
         {Name: "Sketchable App for Windows Gets Mirror Image, Lock Transparency and More Features", URL: "https://windowsreport.com/sketchable-app-windows"},
         {Name: "Smart Search Using Fuzzy with Autocomplete Control, Syncfusion Blogs", URL: "https://www.syncfusion.com/blogs/post/implement-smart-search-using-fuzzy-search-logic-with-syncfusion-autocomplete-control.aspx"},
         {Name: "Sound visualizers - Google Search", URL: "https://www.google.com/search?newwindow=1&amp;safe=active&amp;sxsrf=ALeKk02Hoi41FRNoeH-PuvCAdBgXKkInsQ%3A1589083632110&amp;source=hp&amp;ei=8H23XtPOBMPbtAaZ0pm4BA&amp;q=sound+visualizers&amp;oq=sound+visualizers&amp;gs_lcp=CgZwc3ktYWIQAzICCAAyCAgAEBYQChAeMgYIABAWEB46BQgAEIMBOgQIABAKUJcIWLEXYMIYaABwAHgAgAFziAGsDJIBBDE1LjKYAQCgAQGqAQdnd3Mtd2l6&amp;sclient=psy-ab&amp;ved=0ahUKEwjThqLrtajpAhXDLc0KHRlpBkcQ4dUDCAk&amp;uact=5"},
         {Name: "Spanish - Flemenco", URL: "https://www.youtube.com/watch?v=lDeTnqNn8ME"},
         {Name: "Spanish - Guitar", URL: "https://www.youtube.com/watch?v=rI03bxj4y34"},
         {Name: "Splitting User Stories - Agile Practices - YouTube", URL: "https://www.youtube.com/watch?v=EDT0HMtDwYI"},
         {Name: "Spreadsheets Jobs, Upwork", URL: "https://www.upwork.com/freelance-jobs/spreadsheets"},
         {Name: "SquarePeg - Intelligent Job Matching", URL: "https://www.squarepeghires.com"},
         {Name: "Staples® Official Online Store", URL: "https://www.staples.com"},
         {Name: "Start Morphing - MorphThing.com", URL: "http://www.morphthing.com/morph"},
         {Name: "Stimulus Payment - Internal Revenue Service", URL: "https://www.irs.gov/coronavirus/economic-impact-payments"},
         {Name: "Sting 1", URL: "https://www.youtube.com/watch?v=u1QAbdIEicw"},
         {Name: "Sting 2", URL: "https://www.youtube.com/watch?v=pu9R4egeg_I&amp;list=RDDbGqXpDIHjo&amp;index=15"},
         {Name: "Sting Concert - Kaunas 2017", URL: "https://www.youtube.com/watch?v=LT5ZHWxB-ww"},
         {Name: "Storage Object", URL: "https://www.w3schools.com/jsref/api_storage.asp"},
         {Name: "Susan Chapman - Opus Virtual Solutions", URL: "http://opusvirtualsolutions.com/va-cost-benefits"},
         {Name: "TAXES - 10 Tips on How to Reduce Taxable Income for Small Businesses", URL: "https://sba.thehartford.com/finance/taxes/how-to-reduce-taxable-income"},
         {Name: "TAXES - 18 Ways to Reduce Your Taxes", URL: "https://www.fool.com/retirement/18-ways-to-reduce-your-taxes-boost-refund.aspx"},
         {Name: "TAXES - 6 Difficulties With Small Business Taxes - Block Advisors", URL: "https://web.blockadvisors.com/small-business-owner-unintended-tax-consequences"},
         {Name: "TAXES - How Is Hobby Income Taxed? Tax Experts Explain., Credit Karma Tax®", URL: "https://www.creditkarma.com/tax/i/hobby-income-taxed"},
         {Name: "TAXES - Limited Liability Company (LLC}, Internal Revenue Service", URL: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc"},
         {Name: "TAXES - Login", URL: "https://sa.www4.irs.gov/eauth/pub/login_password.jsp?ChallengeToken=EgNBRVMEEPLisa75HZVPtmxb63nm3MPXF9cNsfg9PhjNvxTSSauuVqYC81ASg%2F3A3ue%2F3%2F5QEBLtt0VR5mDKHfCDM1rXQYBL67hBOIP%2FpZpO2pLYkYHFsXW9x5fsvzhnGkgCUwxrfdWlIemw9nl4R8Pf0Kx62H9FzcKohLzuYimk4ui9c7cE2VFyu2j84yz5UT7cQ2xcTEYYA%2BHHrW4mwgSvP%2BpRZUghSHSZkwt1IejKZ07jvt4%2FBMoNakt9slG9DPrToDp%2Fw7dmez%2BgM22k46BVR5HqxLNSrHBGLHwX%2F%2FM3Z5YTJFILwYWGM8mL13WnOH4dPSRpXx7q7ktnr6y7%2FBIJXsr%2Fu8H7irVlX4SF7wjyvgXDwhJrx0gqVwBHt0bW%2FTTD3SLpOcKPVNUrzULTMhUIt9YnZHMDuQfZoTor%2BW14bv2EyHVKzZsFZQ%2FbEyNIY4d7AjopfWWTPHPn24Gmd45OhzSUL7kUBoSKg11HVBXKuxtnSNncPfwJ55AzEc7JrzsDOUAnahT%2BE0E1OrlD7fPL97q%2BuM8t3qFYcyu9h0nHzfdG%2B929&amp;SMAUTHREASON=27&amp;SMAGENTNAME=UOkC7yx4eMTO24FGxPfBRb5q3Mj3Xh3pyXfBEjYyHJ97nGCXu16wx5MzFHjfZmlG&amp;TARGET=-SM-https%3a%2f%2fsa%2ewww4%2eirs%2egov%2ficce--core%2fload%2fgettrans%2fpages%2favailableTranscripts%2exhtml"},
         {Name: "TAXES - Sole Proprietorships, Internal Revenue Service", URL: "https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships"},
         {Name: "TV", URL: "https://watch.spectrum.net/livetv"},
         {Name: "Tables in Excel VBA - Explained with Examples!", URL: "https://analysistabs.com/excel-vba/tables-examples"},
         {Name: "Talent Networks", URL: "https://www.careerbuilder.com/s/talent-networks"},
         {Name: "Teach Excel Jobs  &amp;  Projects - PeoplePerHour", URL: "https://www.peopleperhour.com/freelance-teach-excel-jobs"},
         {Name: "Technical documentation, API, and code examples, Microsoft Docs", URL: "https://docs.microsoft.com/en-us"},
         {Name: "Technology Job Positions Hiring During the COVID-19 Crisis", URL: "https://insights.dice.com/2020/03/27/31-technology-job-positions-hiring-during-the-covid-19-crisis/?amp&amp;utm_campaign=Advisory_DiceAdvisor_Default_A&amp;utm_source=Responsys&amp;utm_medium=Email"},
         {Name: "Text Filtering in Power BI - Excelerator BI", URL: "https://exceleratorbi.com.au/text-filtering-power-bi"},
         {Name: "The Best Free Creative Resume Templates of 2019", URL: "https://skillcrush.com/2018/12/17/free-creative-resume-templates-2019"},
         {Name: "The Best Sites to Cartoon Yourself For Free", URL: "https://www.techjunkie.com/cartoon-yourself"},
         {Name: "The Latest Remote Work Jobs: 600+ Companies Hiring Remotely", URL: "https://open.buffer.com/remote-jobs"},
         {Name: "The Outliers (text)", URL: "https://banco.az/sites/default/files/books/outliers-the_story_of_success.pdf"},
         {Name: "The Over-Reactors", URL: "https://www.facebook.com/theoverreactors"},
         {Name: "The Skills Required for Business Analysts to Manage Stakeholders Expectations - YouTube", URL: "https://www.youtube.com/watch?v=8Nn3UUbJG8s"},
         {Name: "The Ultimate List of 21 Free and Open Source Data Visualization Tools", URL: "https://solutionsreview.com/business-intelligence/the-ultimate-list-of-open-source-and-free-data-visualization-tools"},
         {Name: "The VBA Guide To ListObject Excel Tables — The Spreadsheet Guru", URL: "https://www.thespreadsheetguru.com/blog/2014/6/20/the-vba-guide-to-listobject-excel-tables"},
         {Name: "The W3C CSS Validation Service", URL: "http://jigsaw.w3.org/css-validator/#validate_by_input"},
         {Name: "The W3C CSS Validation Service", URL: "http://jigsaw.w3.org/css-validator/#validate_by_uri"},
         {Name: "The W3C CSS Validation Service", URL: "http://jigsaw.w3.org/css-validator/#validate_by_uri"},
         {Name: "The remote jobs you can do anywhere in the world, Monster.co.uk", URL: "https://www.monster.co.uk/career-advice/article/remote-jobs-you-can-do-anywhere-in-the-world"},
         {Name: "Theorems for Finding Zeros of Polynomials ( Read }, Algebra, CK-12 Foundation", URL: "https://www.ck12.org/algebra/theorems-for-finding-zeros-of-polynomials/lesson/Real-Zeros-of-Polynomials-MAT-ALY"},
         {Name: "ThumbsPlus Alternatives", URL: "https://alternativeto.net/software/thumbsplus"},
         {Name: "Timer", URL: "https://www.online-stopwatch.com/loop-countdown"},
         {Name: "TitanTV", URL: "https://titantv.com/default.aspx"},
         {Name: "Top Companies Hiring Technologists, February and March 2020", URL: "https://insights.dice.com/2020/03/19/top-companies-hiring-technologists-february-march-2020/?amp&amp;utm_campaign=Advisory_DiceAdvisor_Default_A&amp;utm_source=Responsys&amp;utm_medium=Email"},
         {Name: "Top Remote Companies Hiring in 2020", URL: "https://remoteok.io/remote-companies"},
         {Name: "TracFone Refill", URL: "https://www.tracfone.com/purchasesummary"},
         {Name: "TracFone", URL: "https://shop.tracfone.com/shop/en/tracfonestore/phones"},
         {Name: "Transparent Scrolling Example", URL: "https://www.placesnearme.store/things-to-do/fireworks-near-me"},
         {Name: "Trend Analysis: Simple Definition, Examples - Statistics How To", URL: "https://www.statisticshowto.com/trend-analysis"},
         {Name: "Tryit Editor v3.6", URL: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible"},
         {Name: "Tryit Editor v3.6", URL: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol"},
         {Name: "U.S. Bureau of Labor Statistics", URL: "https://www.bls.gov/bls/demographics.htm"},
         {Name: "UI Design Patterns", URL: "https://www.mobile-patterns.com/search"},
         {Name: "UI layout design - 6 must know examples - Justinmind", URL: "https://www.justinmind.com/blog/ui-layout-design-6-must-know-patterns"},
         {Name: "UI-Patterns.com", URL: "https://ui-patterns.com"},
         {Name: "UI-Patterns.com", URL: "https://ui-patterns.com"},
         {Name: "US Jobs - Search Jobs from Thousands of Niche USA Job Boards, US.Jobs", URL: "https://us.jobs"},
         {Name: "USAJOBS - API Reference", URL: "https://developer.usajobs.gov/API-Reference"},
         {Name: "UX: Search Patterns (good)", URL: "https://uxplanet.org/search-interface-20-things-to-consider-4b1466e98881"},
         {Name: "Ultimate Chocolate Cake, Recipe, ChefSteps", URL: "https://www.chefsteps.com/activities/ultimate-chocolate-cake"},
         {Name: "Ultimate Guide to Free Textures for Cinema 4D", URL: "https://www.schoolofmotion.com/blog/ultimate-guide-to-free-textures-for-cinema-4d"},
         {Name: "Unemployment - Bashear - City Hall", URL: "https://www.facebook.com/898100260320577/posts/1843100575820536/?sfnsn=mo&amp;extid=b1f9JNAxyXAV9zOq"},
         {Name: "Unemployment - Kentucky Career Center", URL: "https://kcc.ky.gov/Pages/default.aspx"},
         {Name: "Use These 25 Job Sites to Find Your First Developer Job - Skillcrush", URL: "https://skillcrush.com/2015/07/14/job-sites-to-find-your-first-developer-job"},
         {Name: "VB: Pattern Searching in Text", URL: "https://www.geeksforgeeks.org/algorithms-gq/pattern-searching"},
         {Name: "VBA - Checking to see if an application is already running", URL: "http://visualbasic.happycodings.com/windows-and-controls/code5.html"},
         {Name: "VBA - Code Module - CodeProject", URL: "https://www.codeproject.com/Articles/640258/Deconstruction-of-a-VBA-Code-Module"},
         {Name: "VBA - Design Patterns 032420", URL: "https://uxdesign.cc/design-better-data-tables-4ecc99d23356"},
         {Name: "VBA - Excel used as SQL Database", URL: "https://chandoo.org/wp/using-excel-as-your-database"},
         {Name: "VBA - Finding matching window handles using wildcards Code Example", URL: "http://visualbasic.happycodings.com/other/code22.html"},
         {Name: "VBA - Is this application already started", URL: "http://visualbasic.happycodings.com/windows-and-controls/code17.html"},
         {Name: "VBA - Make the toolbar flat like in Office", URL: "http://visualbasic.happycodings.com/windows-and-controls/code21.html"},
         {Name: "VBA - Opening Files and URLs, DEVelopers HUT", URL: "https://www.devhut.net/2020/04/30/vba-opening-files-and-urls"},
         {Name: "VBA - See all running applications", URL: "http://visualbasic.happycodings.com/windows-and-controls/code35.html"},
         {Name: "VBA - Send the text in a range to a Word Doc", URL: "http://visualbasic.happycodings.com/windows-and-controls/code36.html"},
         {Name: "VBA - Show the Windows 'Run' Dialog", URL: "http://visualbasic.happycodings.com/windows-and-controls/code38.html"},
         {Name: "VBA - Solve Sudoku Puzzles using Excel Macros - Excel Games", URL: "https://chandoo.org/wp/solve-sudoku-using-excel"},
         {Name: "VBA - Use of the Toolbar Control", URL: "http://visualbasic.happycodings.com/windows-and-controls/code47.html"},
         {Name: "VBA Class - Program with class modules, Microsoft Docs", URL: "https://docs.microsoft.com/en-us/office/vba/access/concepts/error-codes/program-with-class-modules"},
         {Name: "VBA Dashboards", URL: "https://chandoo.org/wp/excel-salary-survey-contest-results"},
         {Name: "VBA Language Reference", URL: "https://docs.microsoft.com/en-us/office/vba/api/overview/language-reference"},
         {Name: "VBA SKILLS – Learn and discover more about VBA language", URL: "https://vbaskills.com"},
         {Name: "VBA Speech - Free Speech Recognition Tutorial 8 - Dictating To Excel - YouTube", URL: "https://www.youtube.com/watch?v=oTTWztPVMug"},
         {Name: "VBA Speech - How can I enter data into Excel 2007 using speech recognition? I am using Windows 7?, Yahoo Answers", URL: "https://uk.answers.yahoo.com/question/index?qid=20110407043400AA4ST9m"},
         {Name: "VBA Speech - Part 1 — VBA Speech Recognition — SAPI STT - Mike Forde - Medium", URL: "https://medium.com/@FordeMike/vba-speech-recognition-sapi-stt-5bd5cbad49f9"},
         {Name: "VBA Using Code VBA to create and use classes", URL: "http://codevba.com/help/frmClass.htm#.Xo3QhUBFwiR"},
         {Name: "VBA: Determining the extent of an Excel Range Code Example", URL: "https://visualbasic.happycodings.com/other/code14.html"},
         {Name: "VBA: Display information about a file Code Example", URL: "https://visualbasic.happycodings.com/code-snippets/code45.html"},
         {Name: "VBA: Get a list of the macros of a module in excel, and then call all those macros - Stack Overflow", URL: "https://stackoverflow.com/questions/28132276/get-a-list-of-the-macros-of-a-module-in-excel-and-then-call-all-those-macros"},
         {Name: "VBA: SQL With Excel - Read data from a closed workbook using ADO Code Example", URL: "http://visualbasic.happycodings.com/database-sql-stuff/code18.html"},
         {Name: "VBA: Shell and wait for a process to finish Code Example", URL: "http://visualbasic.happycodings.com/other/code38.html"},
         {Name: "VBA: Shell out to browser Code Example", URL: "https://visualbasic.happycodings.com/code-snippets/code101.html"},
         {Name: "VBA: Wildcard Matching", URL: "https://www.gnu.org/software/libc/manual/html_node/Wildcard-Matching.html"},
         {Name: "VBA: Working with Microsoft Excel Tables in VBA", URL: "https://www.excelandaccess.com/working-with-tables-in-vba"},
         {Name: "VMA - Class Module", URL: "https://vbaskills.com/class-modules"},
         {Name: "View Rendered Source - Chrome Web Store", URL: "https://chrome.google.com/webstore/detail/view-rendered-source/ejgngohbdedoabanmclafpkoogegdpob?hl=en"},
         {Name: "Visual Studio - Launch", URL: "https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=community&amp;rel=16&amp;utm_medium=microsoft&amp;utm_source=docs.microsoft.com&amp;utm_campaign=download+from+relnotes&amp;utm_content=vs2019ga+button"},
         {Name: "Visual Studio IDE, Code Editor, Azure DevOps, &amp;  App Center - Visual Studio", URL: "https://visualstudio.microsoft.com"},
         {Name: "W3 - CSS Flexible Box Layout", URL: "https://www.w3.org/TR/css-flexbox-1"},
         {Name: "Walking Trails - Hit the Trails, LouisvilleKy.gov", URL: "https://louisvilleky.gov/government/parks/hit-trails"},
         {Name: "Walking Trails - Louisville Metro - WeCanKy", URL: "http://www.wecanky.org/louisvillemetro.html"},
         {Name: "We Work Remotely: Remote jobs in design, programming, marketing and more", URL: "https://weworkremotely.com"},
         {Name: "Weather", URL: "https://www.google.com/search?sxsrf=ACYBGNS4Pr8i-I7v_wCedDeCn2Vm1sXo8A%3A1576734910477&amp;source=hp&amp;ei=vhD7XcnDGs60ggfv_KfgAQ&amp;q=weather+forecast&amp;oq=weather+forecast&amp;gs_l=psy-ab.1.0.35i39i285i70i256j0j0i20i263j0l2j0i67j0l4.3483.7466..10479...2.0..1.279.1543.15j0j1......0....1..gws-wiz.....10..35i362i39j35i39j0i131j0i131i67j35i39i285.9kazZKOB5Cc"},
         {Name: "Web Scraping with WebQuery", URL: "https://analyze6.com/analyze6/articles/excel_webscraping.html"},
         {Name: "Weebly / Edit", URL: "https://www.weebly.com/editor/main.php#"},
         {Name: "Welcome", URL: "https://www.lynda.com/Excel-tutorials/Welcome/590822/643257-4.html"},
         {Name: "What The Flexbox?! — A simple 20 video course that will help you master CSS Flexbox", URL: "https://flexbox.io"},
         {Name: "What will my baby look like? Morph Faces and Celebrities Online For Free - MorphThing.com", URL: "http://www.morphthing.com"},
         {Name: "Word Cloud", URL: "https://www.wordclouds.com"},
         {Name: "Work with Charlene Burke - Search by Burke", URL: "https://searchbyburke.com/workwithcharlene"},
         {Name: "Yahoo Groups - writing", URL: "https://groups.yahoo.com/neo/search?query=WRITING"},
         {Name: "Yahoo", URL: "https://www.yahoo.com"},
         {Name: "Yahoo", URL: "https://www.yahoo.com"},
         {Name: "Yanni (The Forbidden City)", URL: "https://www.youtube.com/watch?v=pJEph8peK8I"},
         {Name: "Yanni", URL: "https://www.youtube.com/watch?v=Dbr_mXwFZgI"},
         {Name: "YouTube", URL: "https://www.youtube.com"},
         {Name: "Z-COVID", URL: "https://form.jotform.com/201383877573061"},
         {Name: "Zoom-SECC", URL: "https://zoom.com/j/174154667"},
         {Name: "Zoom-me", URL: "https://us04web.zoom.us/s/3491730534?status=success"},
         {Name: "Zulilly - Order #9031885019", URL: "https://www.zulily.com/account/orders"},
         ],
         
      // *** F500.Init - Initialize F500 System *********************************************
      Init: () => { // console.log ("f: FAV.Init:"); //init
         FAV.MaxIndex = FAV.List.length - 1;
         FAV.MaxPage = Math.floor(FAV.MaxIndex / FAV.ItemsPerPage) + 1;
         FAV.MakeRolodex();
         FAV.UpdatePaging();
         },
         
      // FAV.FirstPage - Go to First Page
      FirstPage: () => { // console.log ("f: NextPage => (Items " + (FAV.BegIndex + 1) + "-" + (FAV.EndIndex+1) + " of " + (FAV.MaxIndex + 1) + ")");
         FAV.BegIndex = 0;
         FAV.UpdatePaging()
         },
         
      // FAV.PrevPage - Go to Previous Page 
      PrevPage: () => { //console.log ("f: PrevPage => (Items " + (FAV.BegIndex+1) + "-" + (FAV.EndIndex+1) + " of " + (FAV.MaxIndex+1) + ")");
         FAV.BegIndex = FAV.BegIndex - FAV.ItemsPerPage;
         FAV.UpdatePaging()
         },

      // FAV.NextPage - Go to Next Page 
      NextPage: () => { //console.log ("f: NextPage => (Items " + (FAV.BegIndex + 1) + "-" + (FAV.EndIndex+1) + " of " + (FAV.MaxIndex + 1) + ")");
         FAV.BegIndex = FAV.BegIndex + FAV.ItemsPerPage;
         FAV.UpdatePaging()
         },
         
      // FAV.LastPage - Go to Last Page 
      LastPage: () => { //console.log ("f: LastPage => (Items " + (FAV.BegIndex+1) + "-" + (FAV.EndIndex+1) + " of " + (FAV.MaxIndex+1) + ")");
         FAV.BegIndex = (FAV.MaxPage - 1) * FAV.ItemsPerPage;
         FAV.UpdatePaging()
         },

      // *** Point to the Page indicate by the Rolodex Button that was pressed ******************
      // FAV.Click_Rolodex - Click on Rolodex Button //click rolodex //rolodex
      Click_Rolodex: (event) => { console.log ("f: FAV.Click_Rolodex:")
         var me_Id = event.target.id;
         xSplit = me_Id.split("_"); // Id Format is "FAV_n"
         me_Page = xSplit [1];
         FAV.BegIndex = (me_Page - 1) * FAV.ItemsPerPage ;
         FAV.UpdatePaging()
       },

      // FAV.MakeRolodex - Create Rolodex (by Page Numbers)
      MakeRolodex: () => { // console.log ("f: MakeRolodex")
         // /ROLODEX /Make
         var xList = "";
         var i;
         for (i = 0; i < FAV.MaxPage; i++)
            {
               xRolodex = "<button class='FAV_Rolodex_Button' " +
                  " onclick='FAV.Click_Rolodex(event)' " +
                  "id='FAV_" + (i+1) + "' style='width:3em;' >" + (i+1) + "</button>"
               xList = xList + xRolodex
            }
         document.getElementById("id_FAV_Rolodex").innerHTML = xList
         },

      /* *** Update index and vars for Favorites (BegIndex, EndIndex, MaxIndex) ******* */
      /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
      // /ROLODEX /PAGING
      //Filtered_List: [];
      //Sliced_List: [];
      UpdatePaging: () => { // console.log ("f: UpdatePaging:")
         var i;
// console.log (FAV.BegIndex);
         if (FAV.BegIndex > FAV.MaxIndex) {     // If index too big, wrap
            FAV.BegIndex = 0;
            }
         if (FAV.BegIndex < 0) {                // If index too small, wrap
            FAV.BegIndex = (FAV.MaxPage - 1) * FAV.ItemsPerPage;
            }
         FAV.EndIndex = FAV.BegIndex + FAV.ItemsPerPage - 1;
            if (FAV.EndIndex > FAV.MaxIndex) {  // If End index too big, truncate
               FAV.EndIndex = FAV.MaxIndex;
               }
         FAV.CurPage = Math.floor(FAV.BegIndex / FAV.ItemsPerPage) + 1; 
         FAV.Sliced_List = FAV.List.slice(FAV.BegIndex, FAV.EndIndex + 1);  // Get part of List => Sliced_List

         select = document.getElementById("id_FAV_List");
         select.innerHTML = FAV.Sliced_List.map 
            ( (e,ix) =>
               `
               <div class="axInline"></b>${ix + FAV.BegIndex + 1}.&nbsp; </div>
               <div class="list_Favorites axInline">
               <a class="axInline" href="${e.URL}" target="_blank">
               ${e.Name}</a>
               </div><br>
               `
            ).join('');

         document.getElementById("id_FAV_List_Pages").innerHTML = " Pages " + FAV.CurPage + " of " + FAV.MaxPage + ", ";
         document.getElementById("id_FAV_List_Items").innerHTML = " Items " + (FAV.BegIndex + 1) + "-" 
            + (FAV.EndIndex+1) + " of " + (FAV.MaxIndex + 1);
         }
      }
// /fart2

// *** Fortune 500 Section *** /Fortune500
var F500 =
   { // /here
      BegIndex: 0,         // F500.BegIndex     : Starting Index for data paging (index range varies)
      EndIndex: 0,         // F500.EndIndex     : Ending Index for data paging (index range varies)
      MaxIndex: 0,         // F500.MaxIndex     : Last Calculated Index for data paging (index max, fixed)
      ItemsPerPage: 15,    // F500.ItemsPerPage : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // F500.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // F500.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      MaxHeight: 0,        // F500.MaxHeight    : Height Flag to maintain size on last Page

      Sliced_List: [],     // Arry holding Sliced Array Items (paging)
      Filtered_List: [],   // Array holding Filtered Array Items

      // F500.List    // Original Array containing Name and URL of Internet Fortune 500 (from MS Edge export)
      List: [
         {Name: "Walmart", Ranking: "1"}, 
         {Name: "Exxon Mobil", Ranking: "2"}, 
         {Name: "Apple", Ranking: "3"}, 
         {Name: "Berkshire Hathaway", Ranking: "4"}, 
         {Name: "Amazon.com", Ranking: "5"}, 
         {Name: "UnitedHealth Group", Ranking: "6"}, 
         {Name: "McKesson", Ranking: "7"}, 
         {Name: "CVS Health", Ranking: "8"}, 
         {Name: "AT&T", Ranking: "9"}, 
         {Name: "AmerisourceBergen", Ranking: "10"}, 
         {Name: "Chevron", Ranking: "11"}, 
         {Name: "Ford Motor", Ranking: "12"}, 
         {Name: "General Motors", Ranking: "13"}, 
         {Name: "Costco Wholesale", Ranking: "14"}, 
         {Name: "Alphabet", Ranking: "15"}, 
         {Name: "Cardinal Health", Ranking: "16"}, 
         {Name: "Walgreens Boots Alliance", Ranking: "17"}, 
         {Name: "JPMorgan Chase", Ranking: "18"}, 
         {Name: "Verizon Communications", Ranking: "19"}, 
         {Name: "Kroger", Ranking: "20"}, 
         {Name: "General Electric", Ranking: "21"}, 
         {Name: "Fannie Mae", Ranking: "22"}, 
         {Name: "Phillips 66", Ranking: "23"}, 
         {Name: "Valero Energy", Ranking: "24"}, 
         {Name: "Bank of America", Ranking: "25"}, 
         {Name: "Microsoft", Ranking: "26"}, 
         {Name: "Home Depot", Ranking: "27"}, 
         {Name: "Boeing", Ranking: "28"}, 
         {Name: "Wells Fargo", Ranking: "29"}, 
         {Name: "Citigroup", Ranking: "30"}, 
         {Name: "Marathon Petroleum", Ranking: "31"}, 
         {Name: "Comcast", Ranking: "32"}, 
         {Name: "Anthem", Ranking: "33"}, 
         {Name: "Dell Technologies", Ranking: "34"}, 
         {Name: "DuPont de Nemours", Ranking: "35"}, 
         {Name: "State Farm Insurance", Ranking: "36"}, 
         {Name: "Johnson & Johnson", Ranking: "37"}, 
         {Name: "IBM", Ranking: "38"}, 
         {Name: "Target", Ranking: "39"}, 
         {Name: "Freddie Mac", Ranking: "40"}, 
         {Name: "United Parcel Service", Ranking: "41"}, 
         {Name: "Lowe's", Ranking: "42"}, 
         {Name: "Intel", Ranking: "43"}, 
         {Name: "MetLife", Ranking: "44"}, 
         {Name: "Procter & Gamble", Ranking: "45"}, 
         {Name: "United Technologies", Ranking: "46"}, 
         {Name: "FedEx", Ranking: "47"}, 
         {Name: "PepsiCo", Ranking: "48"}, 
         {Name: "Archer Daniels Midland", Ranking: "49"}, 
         {Name: "Prudential Financial", Ranking: "50"}, 
         {Name: "Centene", Ranking: "51"}, 
         {Name: "Albertsons", Ranking: "52"}, 
         {Name: "Walt Disney", Ranking: "53"}, 
         {Name: "Sysco", Ranking: "54"}, 
         {Name: "HP", Ranking: "55"}, 
         {Name: "Humana", Ranking: "56"}, 
         {Name: "Facebook", Ranking: "57"}, 
         {Name: "Caterpillar", Ranking: "58"}, 
         {Name: "Energy Transfer", Ranking: "59"}, 
         {Name: "Lockheed Martin", Ranking: "60"}, 
         {Name: "Pfizer", Ranking: "61"}, 
         {Name: "Goldman Sachs Group", Ranking: "62"}, 
         {Name: "Morgan Stanley", Ranking: "63"}, 
         {Name: "Cisco Systems", Ranking: "64"}, 
         {Name: "Cigna", Ranking: "65"}, 
         {Name: "AIG", Ranking: "66"}, 
         {Name: "HCA Healthcare", Ranking: "67"}, 
         {Name: "American Airlines Group", Ranking: "68"}, 
         {Name: "Delta Air Lines", Ranking: "69"}, 
         {Name: "Charter Communications", Ranking: "70"}, 
         {Name: "New York Life Insurance", Ranking: "71"}, 
         {Name: "American Express", Ranking: "72"}, 
         {Name: "Nationwide", Ranking: "73"}, 
         {Name: "Best Buy", Ranking: "74"}, 
         {Name: "Liberty Mutual Insurance Group", Ranking: "75"}, 
         {Name: "Merck", Ranking: "76"}, 
         {Name: "Honeywell International", Ranking: "77"}, 
         {Name: "United Continental Holdings", Ranking: "78"}, 
         {Name: "TIAA", Ranking: "79"}, 
         {Name: "Tyson Foods", Ranking: "80"}, 
         {Name: "Oracle", Ranking: "81"}, 
         {Name: "Allstate", Ranking: "82"}, 
         {Name: "World Fuel Services", Ranking: "83"}, 
         {Name: "Massachusetts Mutual Life Insurance", Ranking: "84"}, 
         {Name: "TJX", Ranking: "85"}, 
         {Name: "ConocoPhillips", Ranking: "86"}, 
         {Name: "Deere", Ranking: "87"}, 
         {Name: "Tech Data", Ranking: "88"}, 
         {Name: "Enterprise Products Partners", Ranking: "89"}, 
         {Name: "Nike", Ranking: "90"}, 
         {Name: "Publix Super Markets", Ranking: "91"}, 
         {Name: "General Dynamics", Ranking: "92"}, 
         {Name: "Exelon", Ranking: "93"}, 
         {Name: "Plains GP Holdings", Ranking: "94"}, 
         {Name: "3M", Ranking: "95"}, 
         {Name: "AbbVie", Ranking: "96"}, 
         {Name: "CHS", Ranking: "97"}, 
         {Name: "Capital One Financial", Ranking: "98"}, 
         {Name: "Progressive", Ranking: "99"}, 
         {Name: "Coca-Cola", Ranking: "100"}, 
         {Name: "USAA", Ranking: "101"}, 
         {Name: "Hewlett Packard Enterprise", Ranking: "102"}, 
         {Name: "Abbott Laboratories", Ranking: "103"}, 
         {Name: "Twenty-First Century Fox", Ranking: "104"}, 
         {Name: "Micron Technology", Ranking: "105"}, 
         {Name: "Travelers", Ranking: "106"}, 
         {Name: "Rite Aid", Ranking: "107"}, 
         {Name: "Northrop Grumman", Ranking: "108"}, 
         {Name: "Arrow Electronics", Ranking: "109"}, 
         {Name: "Philip Morris International", Ranking: "110"}, 
         {Name: "Northwestern Mutual", Ranking: "111"}, 
         {Name: "INTL FCStone", Ranking: "112"}, 
         {Name: "PBF Energy", Ranking: "113"}, 
         {Name: "Raytheon", Ranking: "114"}, 
         {Name: "Kraft Heinz", Ranking: "115"}, 
         {Name: "Mondelez International", Ranking: "116"}, 
         {Name: "U.S. Bancorp", Ranking: "117"}, 
         {Name: "Macy's", Ranking: "118"}, 
         {Name: "Dollar General", Ranking: "119"}, 
         {Name: "Nucor", Ranking: "120"}, 
         {Name: "Starbucks", Ranking: "121"}, 
         {Name: "DXC Technology", Ranking: "122"}, 
         {Name: "Eli Lilly", Ranking: "123"}, 
         {Name: "Thermo Fisher Scientific", Ranking: "124"}, 
         {Name: "US Foods Holding", Ranking: "125"}, 
         {Name: "Duke Energy", Ranking: "126"}, 
         {Name: "Halliburton", Ranking: "127"}, 
         {Name: "Cummins", Ranking: "128"}, 
         {Name: "Amgen", Ranking: "129"}, 
         {Name: "Paccar", Ranking: "130"}, 
         {Name: "Southern", Ranking: "131"}, 
         {Name: "CenturyLink", Ranking: "132"}, 
         {Name: "International Paper", Ranking: "133"}, 
         {Name: "Union Pacific", Ranking: "134"}, 
         {Name: "Dollar Tree", Ranking: "135"}, 
         {Name: "Penske Automotive Group", Ranking: "136"}, 
         {Name: "Qualcomm", Ranking: "137"}, 
         {Name: "Bristol-Myers Squibb", Ranking: "138"}, 
         {Name: "Gilead Sciences", Ranking: "139"}, 
         {Name: "Jabil", Ranking: "140"}, 
         {Name: "ManpowerGroup", Ranking: "141"}, 
         {Name: "Southwest Airlines", Ranking: "142"}, 
         {Name: "Aflac", Ranking: "143"}, 
         {Name: "Tesla", Ranking: "144"}, 
         {Name: "AutoNation", Ranking: "145"}, 
         {Name: "CBRE Group", Ranking: "146"}, 
         {Name: "Lear", Ranking: "147"}, 
         {Name: "Whirlpool", Ranking: "148"}, 
         {Name: "McDonald's", Ranking: "149"}, 
         {Name: "Broadcom", Ranking: "150"}, 
         {Name: "Marriott International", Ranking: "151"}, 
         {Name: "Western Digital", Ranking: "152"}, 
         {Name: "Visa", Ranking: "153"}, 
         {Name: "Lennar", Ranking: "154"}, 
         {Name: "WellCare Health Plans", Ranking: "155"}, 
         {Name: "Kohl's", Ranking: "156"}, 
         {Name: "AECOM", Ranking: "157"}, 
         {Name: "Synnex", Ranking: "158"}, 
         {Name: "PNC Financial Services", Ranking: "159"}, 
         {Name: "Danaher", Ranking: "160"}, 
         {Name: "Hartford Financial Services", Ranking: "161"}, 
         {Name: "Altria Group", Ranking: "162"}, 
         {Name: "Bank of New York Mellon", Ranking: "163"}, 
         {Name: "Fluor", Ranking: "164"}, 
         {Name: "Avnet", Ranking: "165"}, 
         {Name: "Icahn Enterprises", Ranking: "166"}, 
         {Name: "Occidental Petroleum", Ranking: "167"}, 
         {Name: "Molina Healthcare", Ranking: "168"}, 
         {Name: "Genuine Parts", Ranking: "169"}, 
         {Name: "Freeport-McMoRan", Ranking: "170"}, 
         {Name: "Kimberly-Clark", Ranking: "171"}, 
         {Name: "Tenet Healthcare", Ranking: "172"}, 
         {Name: "Synchrony Financial", Ranking: "173"}, 
         {Name: "CarMax", Ranking: "174"}, 
         {Name: "HollyFrontier", Ranking: "175"}, 
         {Name: "Performance Food Group", Ranking: "176"}, 
         {Name: "Sherwin-Williams", Ranking: "177"}, 
         {Name: "Emerson Electric", Ranking: "178"}, 
         {Name: "NGL Energy Partners", Ranking: "179"}, 
         {Name: "XPO Logistics", Ranking: "180"}, 
         {Name: "EOG Resources", Ranking: "181"}, 
         {Name: "Applied Materials", Ranking: "182"}, 
         {Name: "PG&E", Ranking: "183"}, 
         {Name: "NextEra Energy", Ranking: "184"}, 
         {Name: "C.H. Robinson Worldwide", Ranking: "185"}, 
         {Name: "Gap", Ranking: "186"}, 
         {Name: "Lincoln National", Ranking: "187"}, 
         {Name: "DaVita", Ranking: "188"}, 
         {Name: "Jones Lang LaSalle", Ranking: "189"}, 
         {Name: "WestRock", Ranking: "190"}, 
         {Name: "CDW", Ranking: "191"}, 
         {Name: "American Electric Power", Ranking: "192"}, 
         {Name: "Cognizant Technology Solutions", Ranking: "193"}, 
         {Name: "D.R. Horton", Ranking: "194"}, 
         {Name: "Becton Dickinson", Ranking: "195"}, 
         {Name: "Nordstrom", Ranking: "196"}, 
         {Name: "Netflix", Ranking: "197"}, 
         {Name: "Aramark", Ranking: "198"}, 
         {Name: "Texas Instruments", Ranking: "199"}, 
         {Name: "General Mills", Ranking: "200"}, 
         {Name: "Supervalu", Ranking: "201"}, 
         {Name: "Colgate-Palmolive", Ranking: "202"}, 
         {Name: "Goodyear Tire & Rubber", Ranking: "203"}, 
         {Name: "PayPal Holdings", Ranking: "204"}, 
         {Name: "PPG Industries", Ranking: "205"}, 
         {Name: "Omnicom Group", Ranking: "206"}, 
         {Name: "Celgene", Ranking: "207"}, 
         {Name: "Jacobs Engineering Group", Ranking: "208"}, 
         {Name: "Ross Stores", Ranking: "209"}, 
         {Name: "Marsh & McLennan", Ranking: "210"}, 
         {Name: "Mastercard", Ranking: "211"}, 
         {Name: "Land O'Lakes", Ranking: "212"}, 
         {Name: "Waste Management", Ranking: "213"}, 
         {Name: "Illinois Tool Works", Ranking: "214"}, 
         {Name: "Ecolab", Ranking: "215"}, 
         {Name: "Booking Holdings", Ranking: "216"}, 
         {Name: "CBS", Ranking: "217"}, 
         {Name: "Parker-Hannifin", Ranking: "218"}, 
         {Name: "Principal Financial", Ranking: "219"}, 
         {Name: "DTE Energy", Ranking: "220"}, 
         {Name: "BlackRock", Ranking: "221"}, 
         {Name: "United States Steel", Ranking: "222"}, 
         {Name: "Community Health Systems", Ranking: "223"}, 
         {Name: "Kinder Morgan", Ranking: "224"}, 
         {Name: "Qurate Retail", Ranking: "225"}, 
         {Name: "Loews", Ranking: "226"}, 
         {Name: "Arconic", Ranking: "227"}, 
         {Name: "Stanley Black & Decker", Ranking: "228"}, 
         {Name: "Textron", Ranking: "229"}, 
         {Name: "Las Vegas Sands", Ranking: "230"}, 
         {Name: "Estee Lauder", Ranking: "231"}, 
         {Name: "DISH Network", Ranking: "232"}, 
         {Name: "Stryker", Ranking: "233"}, 
         {Name: "Kellogg", Ranking: "234"}, 
         {Name: "Biogen", Ranking: "235"}, 
         {Name: "Alcoa", Ranking: "236"}, 
         {Name: "Anadarko Petroleum", Ranking: "237"}, 
         {Name: "Dominion Energy", Ranking: "238"}, 
         {Name: "ADP", Ranking: "239"}, 
         {Name: "salesforce.com", Ranking: "240"}, 
         {Name: "L Brands", Ranking: "241"}, 
         {Name: "Henry Schein", Ranking: "242"}, 
         {Name: "Newell Brands", Ranking: "243"}, 
         {Name: "Guardian Life Ins. Co. of America", Ranking: "244"}, 
         {Name: "BJ's Wholesale Club", Ranking: "245"}, 
         {Name: "BB&T Corp.", Ranking: "246"}, 
         {Name: "State Street Corp.", Ranking: "247"}, 
         {Name: "Viacom", Ranking: "248"}, 
         {Name: "Ameriprise Financial", Ranking: "249"}, 
         {Name: "Core-Mark Holding", Ranking: "250"}, 
         {Name: "Reinsurance Group of America", Ranking: "251"}, 
         {Name: "VF", Ranking: "252"}, 
         {Name: "Discover Financial Services", Ranking: "253"}, 
         {Name: "Global Partners", Ranking: "254"}, 
         {Name: "Edison International", Ranking: "255"}, 
         {Name: "Oneok", Ranking: "256"}, 
         {Name: "Murphy USA", Ranking: "257"}, 
         {Name: "Bed Bath & Beyond", Ranking: "258"}, 
         {Name: "Consolidated Edison", Ranking: "259"}, 
         {Name: "CSX", Ranking: "260"}, 
         {Name: "J.C. Penney", Ranking: "261"}, 
         {Name: "LKQ", Ranking: "262"}, 
         {Name: "FirstEnergy", Ranking: "263"}, 
         {Name: "Steel Dynamics", Ranking: "264"}, 
         {Name: "Lithia Motors", Ranking: "265"}, 
         {Name: "MGM Resorts International", Ranking: "266"}, 
         {Name: "Tenneco", Ranking: "267"}, 
         {Name: "Nvidia", Ranking: "268"}, 
         {Name: "Sempra Energy", Ranking: "269"}, 
         {Name: "Farmers Insurance Exchange", Ranking: "270"}, 
         {Name: "Ball", Ranking: "271"}, 
         {Name: "Group 1 Automotive", Ranking: "272"}, 
         {Name: "Unum Group", Ranking: "273"}, 
         {Name: "Xcel Energy", Ranking: "274"}, 
         {Name: "Reliance Steel & Aluminum", Ranking: "275"}, 
         {Name: "Huntsman", Ranking: "276"}, 
         {Name: "Norfolk Southern", Ranking: "277"}, 
         {Name: "Laboratory Corp. of America", Ranking: "278"}, 
         {Name: "Corning", Ranking: "279"}, 
         {Name: "Expedia Group", Ranking: "280"}, 
         {Name: "AutoZone", Ranking: "281"}, 
         {Name: "W.W. Grainger", Ranking: "282"}, 
         {Name: "Quanta Services", Ranking: "283"}, 
         {Name: "Crown Holdings", Ranking: "284"}, 
         {Name: "Office Depot", Ranking: "285"}, 
         {Name: "Baxter International", Ranking: "286"}, 
         {Name: "Lam Research", Ranking: "287"}, 
         {Name: "Entergy", Ranking: "288"}, 
         {Name: "Charles Schwab", Ranking: "289"}, 
         {Name: "L3 Technologies", Ranking: "290"}, 
         {Name: "NRG Energy", Ranking: "291"}, 
         {Name: "Live Nation Entertainment", Ranking: "292"}, 
         {Name: "Universal Health Services", Ranking: "293"}, 
         {Name: "Molson Coors Brewing", Ranking: "294"}, 
         {Name: "eBay", Ranking: "295"}, 
         {Name: "AES", Ranking: "296"}, 
         {Name: "Devon Energy", Ranking: "297"}, 
         {Name: "Pacific Life", Ranking: "298"}, 
         {Name: "CenterPoint Energy", Ranking: "299"}, 
         {Name: "Discovery", Ranking: "300"}, 
         {Name: "BorgWarner", Ranking: "301"}, 
         {Name: "Targa Resources", Ranking: "302"}, 
         {Name: "Ally Financial", Ranking: "303"}, 
         {Name: "SunTrust Banks", Ranking: "304"}, 
         {Name: "IQVIA Holdings", Ranking: "305"}, 
         {Name: "American Family Insurance Group", Ranking: "306"}, 
         {Name: "Delek US Holdings", Ranking: "307"}, 
         {Name: "Navistar International", Ranking: "308"}, 
         {Name: "Chesapeake Energy", Ranking: "309"}, 
         {Name: "United Natural Foods", Ranking: "310"}, 
         {Name: "Leidos Holdings", Ranking: "311"}, 
         {Name: "PulteGroup", Ranking: "312"}, 
         {Name: "Eastman Chemical", Ranking: "313"}, 
         {Name: "Republic Services", Ranking: "314"}, 
         {Name: "Mohawk Industries", Ranking: "315"}, 
         {Name: "Sonic Automotive", Ranking: "316"}, 
         {Name: "Owens & Minor", Ranking: "317"}, 
         {Name: "Xerox", Ranking: "318"}, 
         {Name: "Boston Scientific", Ranking: "319"}, 
         {Name: "DCP Midstream", Ranking: "320"}, 
         {Name: "Autoliv", Ranking: "321"}, 
         {Name: "Interpublic Group", Ranking: "322"}, 
         {Name: "Public Service Enterprise Group", Ranking: "323"}, 
         {Name: "PVH", Ranking: "324"}, 
         {Name: "Mosaic", Ranking: "325"}, 
         {Name: "Advance Auto Parts", Ranking: "326"}, 
         {Name: "Altice USA", Ranking: "327"}, 
         {Name: "Hormel Foods", Ranking: "328"}, 
         {Name: "O'Reilly Automotive", Ranking: "329"}, 
         {Name: "Calpine", Ranking: "330"}, 
         {Name: "Hertz Global Holdings", Ranking: "331"}, 
         {Name: "First Data", Ranking: "332"}, 
         {Name: "Pioneer Natural Resources", Ranking: "333"}, 
         {Name: "Coty", Ranking: "334"}, 
         {Name: "AGCO", Ranking: "335"}, 
         {Name: "Mutual of Omaha Insurance", Ranking: "336"}, 
         {Name: "Vistra Energy", Ranking: "337"}, 
         {Name: "Avis Budget Group", Ranking: "338"}, 
         {Name: "Adobe", Ranking: "339"}, 
         {Name: "Peter Kiewit Sons'", Ranking: "340"}, 
         {Name: "News Corp.", Ranking: "341"}, 
         {Name: "Brighthouse Financial", Ranking: "342"}, 
         {Name: "Voya Financial", Ranking: "343"}, 
         {Name: "Air Products & Chemicals", Ranking: "344"}, 
         {Name: "Hilton Worldwide Holdings", Ranking: "345"}, 
         {Name: "GameStop", Ranking: "346"}, 
         {Name: "Veritiv", Ranking: "347"}, 
         {Name: "Williams", Ranking: "348"}, 
         {Name: "Campbell Soup", Ranking: "349"}, 
         {Name: "Rockwell Collins", Ranking: "350"}, 
         {Name: "Thrivent Financial for Lutherans", Ranking: "351"}, 
         {Name: "Westlake Chemical", Ranking: "352"}, 
         {Name: "Univar", Ranking: "353"}, 
         {Name: "J.B. Hunt Transport Services", Ranking: "354"}, 
         {Name: "Frontier Communications", Ranking: "355"}, 
         {Name: "Jones Financial (Edward Jones)", Ranking: "356"}, 
         {Name: "National Oilwell Varco", Ranking: "357"}, 
         {Name: "Eversource Energy", Ranking: "358"}, 
         {Name: "Dick's Sporting Goods", Ranking: "359"}, 
         {Name: "Genworth Financial", Ranking: "360"}, 
         {Name: "Fidelity National Information Services", Ranking: "361"}, 
         {Name: "Yum China Holdings", Ranking: "362"}, 
         {Name: "Ryder System", Ranking: "363"}, 
         {Name: "Anixter International", Ranking: "364"}, 
         {Name: "Caesars Entertainment", Ranking: "365"}, 
         {Name: "Masco", Ranking: "366"}, 
         {Name: "Thor Industries", Ranking: "367"}, 
         {Name: "Alaska Air Group", Ranking: "368"}, 
         {Name: "Amphenol", Ranking: "369"}, 
         {Name: "WESCO International", Ranking: "370"}, 
         {Name: "Huntington Ingalls Industries", Ranking: "371"}, 
         {Name: "Jefferies Financial Group", Ranking: "372"}, 
         {Name: "Dana", Ranking: "373"}, 
         {Name: "Expeditors Intl. of Washington", Ranking: "374"}, 
         {Name: "EMCOR Group", Ranking: "375"}, 
         {Name: "Darden Restaurants", Ranking: "376"}, 
         {Name: "SpartanNash", Ranking: "377"}, 
         {Name: "Assurant", Ranking: "378"}, 
         {Name: "United Rentals", Ranking: "379"}, 
         {Name: "Liberty Media", Ranking: "380"}, 
         {Name: "Erie Insurance Group", Ranking: "381"}, 
         {Name: "Auto-Owners Insurance", Ranking: "382"}, 
         {Name: "Cheniere Energy", Ranking: "383"}, 
         {Name: "Fifth Third Bancorp", Ranking: "384"}, 
         {Name: "Foot Locker", Ranking: "385"}, 
         {Name: "Conagra Brands", Ranking: "386"}, 
         {Name: "Zimmer Biomet Holdings", Ranking: "387"}, 
         {Name: "Tractor Supply", Ranking: "388"}, 
         {Name: "Berry Global Group", Ranking: "389"}, 
         {Name: "Alliance Data Systems", Ranking: "390"}, 
         {Name: "Hershey", Ranking: "391"}, 
         {Name: "PPL", Ranking: "392"}, 
         {Name: "Dean Foods", Ranking: "393"}, 
         {Name: "Builders FirstSource", Ranking: "394"}, 
         {Name: "Oshkosh", Ranking: "395"}, 
         {Name: "EnLink Midstream", Ranking: "396"}, 
         {Name: "W.R. Berkley", Ranking: "397"}, 
         {Name: "WEC Energy Group", Ranking: "398"}, 
         {Name: "JetBlue Airways", Ranking: "399"}, 
         {Name: "UGI", Ranking: "400"}, 
         {Name: "A-Mark Precious Metals", Ranking: "401"}, 
         {Name: "Fidelity National Financial", Ranking: "402"}, 
         {Name: "Constellation Brands", Ranking: "403"}, 
         {Name: "Quest Diagnostics", Ranking: "404"}, 
         {Name: "Activision Blizzard", Ranking: "405"}, 
         {Name: "Weyerhaeuser", Ranking: "406"}, 
         {Name: "Raymond James Financial", Ranking: "407"}, 
         {Name: "Casey's General Stores", Ranking: "408"}, 
         {Name: "Keurig Dr Pepper", Ranking: "409"}, 
         {Name: "American Tower", Ranking: "410"}, 
         {Name: "Apache", Ranking: "411"}, 
         {Name: "Dover", Ranking: "412"}, 
         {Name: "KeyCorp", Ranking: "413"}, 
         {Name: "J.M. Smucker", Ranking: "414"}, 
         {Name: "Citizens Financial Group", Ranking: "415"}, 
         {Name: "Motorola Solutions", Ranking: "416"}, 
         {Name: "Magellan Health", Ranking: "417"}, 
         {Name: "American Axle & Manufacturing", Ranking: "418"}, 
         {Name: "Newmont Goldcorp", Ranking: "419"}, 
         {Name: "Spirit AeroSystems Holdings", Ranking: "420"}, 
         {Name: "Western & Southern Financial Group", Ranking: "421"}, 
         {Name: "Fortive", Ranking: "422"}, 
         {Name: "Graybar Electric", Ranking: "423"}, 
         {Name: "NVR", Ranking: "424"}, 
         {Name: "Avery Dennison", Ranking: "425"}, 
         {Name: "Celanese", Ranking: "426"}, 
         {Name: "American Financial Group", Ranking: "427"}, 
         {Name: "Toll Brothers", Ranking: "428"}, 
         {Name: "Sanmina", Ranking: "429"}, 
         {Name: "Insight Enterprises", Ranking: "430"}, 
         {Name: "Owens Corning", Ranking: "431"}, 
         {Name: "Packaging Corp. of America", Ranking: "432"}, 
         {Name: "TravelCenters of America", Ranking: "433"}, 
         {Name: "Olin", Ranking: "434"}, 
         {Name: "Arthur J. Gallagher", Ranking: "435"}, 
         {Name: "MasTec", Ranking: "436"}, 
         {Name: "Alleghany", Ranking: "437"}, 
         {Name: "Owens-Illinois", Ranking: "438"}, 
         {Name: "Asbury Automotive Group", Ranking: "439"}, 
         {Name: "CMS Energy", Ranking: "440"}, 
         {Name: "Markel", Ranking: "441"}, 
         {Name: "Blackstone Group", Ranking: "442"}, 
         {Name: "AK Steel Holding", Ranking: "443"}, 
         {Name: "Hanesbrands", Ranking: "444"}, 
         {Name: "R.R. Donnelley & Sons", Ranking: "445"}, 
         {Name: "Wayfair", Ranking: "446"}, 
         {Name: "Regions Financial", Ranking: "447"}, 
         {Name: "Wynn Resorts", Ranking: "448"}, 
         {Name: "Ulta Beauty", Ranking: "449"}, 
         {Name: "Regeneron Pharmaceuticals", Ranking: "450"}, 
         {Name: "Burlington Stores", Ranking: "451"}, 
         {Name: "Rockwell Automation", Ranking: "452"}, 
         {Name: "Northern Trust", Ranking: "453"}, 
         {Name: "Chemours", Ranking: "454"}, 
         {Name: "Seaboard", Ranking: "455"}, 
         {Name: "Marathon Oil", Ranking: "456"}, 
         {Name: "Ascena Retail Group", Ranking: "457"}, 
         {Name: "Dillard's", Ranking: "458"}, 
         {Name: "Cintas", Ranking: "459"}, 
         {Name: "Advanced Micro Devices", Ranking: "460"}, 
         {Name: "Hess", Ranking: "461"}, 
         {Name: "M&T Bank Corp.", Ranking: "462"}, 
         {Name: "ABM Industries", Ranking: "463"}, 
         {Name: "Beacon Roofing Supply", Ranking: "464"}, 
         {Name: "NCR", Ranking: "465"}, 
         {Name: "iHeartMedia", Ranking: "466"}, 
         {Name: "Franklin Resources", Ranking: "467"}, 
         {Name: "Ameren", Ranking: "468"}, 
         {Name: "Intercontinental Exchange", Ranking: "469"}, 
         {Name: "S&P Global", Ranking: "470"}, 
         {Name: "Post Holdings", Ranking: "471"}, 
         {Name: "Analog Devices", Ranking: "472"}, 
         {Name: "Ralph Lauren", Ranking: "473"}, 
         {Name: "Harris", Ranking: "474"}, 
         {Name: "Booz Allen Hamilton", Ranking: "475"}, 
         {Name: "Polaris Industries", Ranking: "476"}, 
         {Name: "Clorox", Ranking: "477"}, 
         {Name: "Realogy Holdings", Ranking: "478"}, 
         {Name: "HD Supply Holdings", Ranking: "479"}, 
         {Name: "Graphic Packaging Holding", Ranking: "480"}, 
         {Name: "Old Republic International", Ranking: "481"}, 
         {Name: "Intuit", Ranking: "482"}, 
         {Name: "NetApp", Ranking: "483"}, 
         {Name: "Tapestry", Ranking: "484"}, 
         {Name: "ON Semiconductor", Ranking: "485"}, 
         {Name: "Ingredion", Ranking: "486"}, 
         {Name: "Zoetis", Ranking: "487"}, 
         {Name: "Fiserv", Ranking: "488"}, 
         {Name: "TreeHouse Foods", Ranking: "489"}, 
         {Name: "Robert Half International", Ranking: "490"}, 
         {Name: "First American Financial", Ranking: "491"}, 
         {Name: "Harley-Davidson", Ranking: "492"}, 
         {Name: "Windstream Holdings", Ranking: "493"}, 
         {Name: "Yum Brands", Ranking: "494"}, 
         {Name: "Williams-Sonoma", Ranking: "495"}, 
         {Name: "Simon Property Group", Ranking: "496"}, 
         {Name: "Navient", Ranking: "497"}, 
         {Name: "Western Union", Ranking: "498"}, 
         {Name: "Peabody Energy", Ranking: "499"}, 
         {Name: "Levi Strauss", Ranking: "500"}  
         ],

      // *** F500.Init - Initialize F500 System *********************************************
      Init: () => { // console.log ("f: F500.Init:"); //init
         F500.MaxIndex = F500.List.length - 1;
         F500.MaxPage = Math.floor(F500.MaxIndex / F500.ItemsPerPage) + 1;
         F500.MakeRolodex();
         F500.UpdatePaging();
         },
         
      // F500.FirstPage - Go to First Page
      FirstPage: () => { //console.log ("f: F500.FirstPage => (Items " + (F500.BegIndex + 1) + "-" + (F500.EndIndex+1) + " of " + (F500.MaxIndex + 1) + ")");
         F500.BegIndex = 0;
         F500.UpdatePaging()
         },
         
      // F500.PrevPage - Go to Previous Page 
      PrevPage: () => { //console.log ("f: F500.PrevPage => (Items " + (F500.BegIndex+1) + "-" + (F500.EndIndex+1) + " of " + (F500.MaxIndex+1) + ")");
         F500.BegIndex = F500.BegIndex - F500.ItemsPerPage;
         F500.UpdatePaging()
         },

      // F500.NextPage - Go to Next Page 
      NextPage: () => { //console.log ("f: F500.NextPage => (Items " + (F500.BegIndex + 1) + "-" + (F500.EndIndex+1) + " of " + (F500.MaxIndex + 1) + ")");
         F500.BegIndex = F500.BegIndex + F500.ItemsPerPage;
         F500.UpdatePaging()
         },
         
      // F500.LastPage - Go to Last Page 
      LastPage: () => { //console.log ("f: F500.LastPage => (Items " + (F500.BegIndex+1) + "-" + (F500.EndIndex+1) + " of " + (F500.MaxIndex+1) + ")");
         F500.BegIndex = (F500.MaxPage - 1) * F500.ItemsPerPage;
         F500.UpdatePaging()
         },

      // F500.MakeRolodex - Create Rolodex (by Page Numbers)
      MakeRolodex: () => { // console.log ("f: F500.MakeRolodex")
         // /ROLODEX /Make
         var xList = "";
         var i;
         for (i = 0; i < F500.MaxPage; i++)
            {
               xRolodex = "<button class='F500_Rolodex_Button' " +
                  " onclick='F500.Click_Rolodex(event)' " +
                  "id='F500_" + (i+1) + "' style='width:3em;' >" + (i+1) + "</button>"
               xList = xList + xRolodex
            }
         document.getElementById("id_F500_Rolodex").innerHTML = xList
         },

      // *** Point to the Page indicate by the Rolodex Button that was pressed ******************
      // F500.Click_Rolodex - Click on Rolodex Button //click rolodex //rolodex
      Click_Rolodex: (event) => { console.log ("f: F500.Click_Rolodex:")
         var me_Id = event.target.id;
         xSplit = me_Id.split("_"); // Id Format is "F500_n"
         me_Page = xSplit [1];
         F500.BegIndex = (me_Page - 1) * F500.ItemsPerPage ;
         F500.UpdatePaging()
       },

      /* *** Update index and vars for Fortune 500 (BegIndex, EndIndex, MaxIndex) ******* */
      /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
      // /ROLODEX /PAGING
      //Filtered_List: [];
      //Sliced_List: [];
      UpdatePaging: () => { // console.log ("f: UpdatePaging:")
         var i;
         if (F500.BegIndex > F500.MaxIndex) {     // If index too big, wrap
            F500.BegIndex = 0;
            }
         if (F500.BegIndex < 0) {                // If index too small, wrap
            F500.BegIndex = (F500.MaxPage - 1) * F500.ItemsPerPage;
            }
         F500.EndIndex = F500.BegIndex + F500.ItemsPerPage - 1;
            if (F500.EndIndex > F500.MaxIndex) {  // If End index too big, truncate
               F500.EndIndex = F500.MaxIndex;
               }
         F500.CurPage = Math.floor(F500.BegIndex / F500.ItemsPerPage) + 1; 
         F500.Sliced_List = F500.List.slice(F500.BegIndex, F500.EndIndex + 1);  // Get part of List => Sliced_List

         select = document.getElementById("id_F500_List");
         select.innerHTML = F500.Sliced_List.map 
            ( (e,ix) =>
               `
               <div class="axInline"></b>${ix + F500.BegIndex + 1}.&nbsp; </div>
               <div class="list_Fortune500 axInline">
               <div class="axInline">${e.Name}</u></div>
               <div class="list_Fortune500 axInline"></b></u> - Ranked: ${e.Ranking} </div>
               </div><br>
               `
            ).join('');

         document.getElementById("id_F500_List_Pages").innerHTML = " Pages " + F500.CurPage + " of " + F500.MaxPage + ", ";
         document.getElementById("id_F500_List_Items").innerHTML = " Items " + (F500.BegIndex + 1) + "-" 
            + (F500.EndIndex+1) + " of " + (F500.MaxIndex + 1);
         }

      }

/* Menu Click Functions */
function xclick_Menu(event) { 
   var Menu_Item     = event.target.id;
console.log ("f: click_Menu: Menu_Item = " + Menu_Item); //click_Menu   
alert ("oops");
console.log (Menu_Item.parent);

   // Hide all Sections
   // var x = document.getElementsByClassName("b_SectionBorder");
   var x = document.getElementsByClassName("axContainer");
   for (i = 0; i < x.length; i++) {x[i].style.display = "none";}

   // Unhide "Active" Section, process ALL and NONE
   switch (Menu_Item) {
      case "nav_States": // /States
         Hide_All_Sections ()
         document.getElementById("States_Section").style.display = "block";
         break;
      case "nav_Titles": // /Titles
         Hide_All_Sections ()
         document.getElementById("Titles_Section").style.display = "block";
         break;
      case "nav_Engines": // /Engines
         Hide_All_Sections ()
         document.getElementById("Engines_Section").style.display = "block";
         break;
      case "nav_Quotes": // /Quotes
         Hide_All_Sections ()
         document.getElementById("Quotes_Section").style.display = "block";
         break;
      case "nav_Favorites": // /Favorites
         Hide_All_Sections ()
         document.getElementById("Favorites_Section").style.display = "block";
         break;
      case "nav_Fortune500": // /Fortune500
         Hide_All_Sections ()
         document.getElementById("Fortune500_Section").style.display = "block";
         break;
      case "nav_Themes": // /Themes
         Hide_All_Sections ()
         document.getElementById("Themes_Section").style.display = "block";
         break;
      case "nav_All": // /All
         document.getElementById("Themes_Section").style.display = "block";     
         document.getElementById("States_Section").style.display = "block";     
         document.getElementById("Titles_Section").style.display = "block";     
         document.getElementById("Engines_Section").style.display = "block";   
         document.getElementById("Quotes_Section").style.display = "block";     
         document.getElementById("Resume_Section").style.display = "block";     
         
         document.getElementById("Favorites_Section").style.display = "block";  
         document.getElementById("Fortune500_Section").style.display = "block"; 
         break;
      case "nav_None": 
         Hide_All_Sections ()
         break;
      default:
         console.log("   => Invalid Menu Option: " + Menu_Item);
   }

 }

InitSystem();  // Call Initialization Routine /Init/InitSystem

function InitSystem() { // console.log ("f: InitSystem()"); 
   // Init Sections and Hide/Unhide default sections as desired //Init /defaults
   document.getElementById("Header_Notes_Section").style.display = "none";
   /* document.getElementById("Hide_Header_Notes").style.display = "none"; */
   
   document.getElementById("Footer_Notes_Section").style.display = "none";
   /* ument.getElementById("Hide_Footer_Notes").style.display = "none"; */

   InitThemes();
      document.getElementById("Themes_Section").style.display = "none";
      document.getElementById("Themes_Notes_Section").style.display = "none";
      /* ument.getElementById("Hide_Themes_Notes").style.display = "none"; */

   InitResume(); // InitResume
      document.getElementById("Resume_Section").style.display = "none";
      document.getElementById("Resume_Notes_Section").style.display = "none";
      /* document.getElementById("Hide_Resume_Notes").style.display = "none"; */
   
   STA.Load(); 
      document.getElementById("States_Section").style.display = "none";
      document.getElementById("States_Notes_Section").style.display = "none";
      /* document.getElementById("Hide_States_Notes").style.display = "none"; */
   TTL.Load(); 
      document.getElementById("Titles_Section").style.display = "none";
      document.getElementById("Titles_Notes_Section").style.display = "none";
      /* document.getElementById("Hide_Titles_Notes").style.display = "none"; */
   AGT.Load(); 
      document.getElementById("Engines_Section").style.display = "none";
      document.getElementById("Engines_Notes_Section").style.display = "none";
      /* document.getElementById("Hide_Engines_Notes").style.display = "none"; */
   QOD.Load(); 
      document.getElementById("Quotes_Section").style.display = "none";
      document.getElementById("Quotes_Notes_Section").style.display = "none";
      /* document.getElementById("Hide_Quotes_Notes").style.display = "none"; */
      
   FAV.Init(); 
      document.getElementById("Favorites_Section").style.display = "none";
   F500.Init(); 
      document.getElementById("Fortune500_Section").style.display = "none";

   document.getElementById(g_Default_Tab).style.display = "block";

   }

/* *** Init Resume Section ********************************************* */
function InitResume() { // console.log ("f: InitResume: " /* + InitResume */);
   // InitResume //resumes
   var select = document.getElementById("id_Resume");
      xList = "";
      xList = xList + "<a id='Resume_PDF_Link' href='./Images/James Coons Resume.pdf' target='_blank'> " +
         "Download  PDF Resume<br>" +
         "<img src='./Images/resume.bmp' width='150';>" +
         "</a><br><br>"
      xList = xList + "<object id='Resume_PDF' data='./Images/James Coons Resume.pdf' width=100% height=500em>";
   select.innerHTML = xList;
   }
   
/* *** Process Most Menu Clicks, including "Hide Myself" *** */
function Process_Clicks(event) { 
   // "id" indicates which "button" was pressed
   var xId = event.target.id; // + "=" + event.target.checked ;
   // console.log (event);
   // console.log (event.target);
   // console.log (event.target.id);
   console.log ("f: Process_Clicks: id=" + xId);

   switch (xId) {
      /* *** Header/Footer Processing *** */
      case "Hide_Header_Section": // /Clicked on Full Screen Button
         document.getElementById("Header_Section").style.display = "none";
         document.getElementById("Footer_Section").style.display = "none";
         document.getElementById("Hide_Header_Section").style.display = "none";
         document.getElementById("Show_Header_Section").style.display = "block";
         break;
      case "Show_Header_Section": // /Clicked on Main Screen Button
         document.getElementById("Header_Section").style.display = "block";
         document.getElementById("Footer_Section").style.display = "block";
         document.getElementById("Hide_Header_Section").style.display = "block";
         document.getElementById("Show_Header_Section").style.display = "none";
         break;
         
      case "Hide_Header_Notes": // /Clicked on Hide Header Notes
         document.getElementById("Header_Notes_Section").style.display = "none";
         document.getElementById("Hide_Header_Notes").style.display = "none";
         document.getElementById("Show_Header_Notes").style.display = "block";
         break;
      case "Show_Header_Notes": // /Clicked on Show Header Notes
         document.getElementById("Header_Notes_Section").style.display = "block";
         document.getElementById("Hide_Header_Notes").style.display = "block";
         document.getElementById("Show_Header_Notes").style.display = "none";
         break;

      case "Hide_Footer_Notes": // /Clicked on Hide Footer Notes
         document.getElementById("Footer_Notes_Section").style.display = "none";
         document.getElementById("Hide_Footer_Notes").style.display = "none";
         document.getElementById("Show_Footer_Notes").style.display = "block";
         break;
      case "Show_Footer_Notes": // /Clicked on Show Footer Notes
         document.getElementById("Footer_Notes_Section").style.display = "block";
         document.getElementById("Hide_Footer_Notes").style.display = "block";
         document.getElementById("Show_Footer_Notes").style.display = "none";
         break;

      /* *** Themes Processing *** */
      case "Hide_Themes_Notes": // /Themes /Self-Hide Notes
         document.getElementById("Themes_Notes_Section").style.display = "none";
         document.getElementById("Hide_Themes_Notes").style.display = "none";
         document.getElementById("Show_Themes_Notes").style.display = "block";
         break;
      case "Show_Themes_Notes": // /Themes /Self-Show Notes
         document.getElementById("Themes_Notes_Section").style.display = "block";
         document.getElementById("Show_Themes_Notes").style.display = "none";
         document.getElementById("Hide_Themes_Notes").style.display = "block";
         break;
      case "Hide_Themes_Section": // /Themes /Self-Hide Section
         document.getElementById("Themes_Section").style.display = "none";
         break;
      case "Show_Themes_Section": // /Themes /Self-Show Section
         document.getElementById("Themes_Section").style.display = "block";
         break;

      /* *** States Processing *** */
      case "Hide_States_Notes": // /States /Self-Hide Notes
         document.getElementById("States_Notes_Section").style.display = "none";
         document.getElementById("Hide_States_Notes").style.display = "none";
         document.getElementById("Show_States_Notes").style.display = "block";
         break;
      case "Show_States_Notes": // /States /Self-Show Notes
         document.getElementById("States_Notes_Section").style.display = "block";
         document.getElementById("Show_States_Notes").style.display = "none";
         document.getElementById("Hide_States_Notes").style.display = "block";
         break;
      case "Hide_States_Section": // /States /Self-Hide Section
         document.getElementById("States_Section").style.display = "none";
         break;
      case "Show_States_Section": // /States /Self-Show Section
         document.getElementById("States_Section").style.display = "block";
         break;

      /* *** Engines Processing *** */
      case "Hide_Engines_Notes": // /Engines /Self-Hide Notes
         document.getElementById("Engines_Notes_Section").style.display = "none";
         document.getElementById("Hide_Engines_Notes").style.display = "none";
         document.getElementById("Show_Engines_Notes").style.display = "block";
         break;
      case "Show_Engines_Notes": // /Engines /Self-Show Notes
         document.getElementById("Engines_Notes_Section").style.display = "block";
         document.getElementById("Show_Engines_Notes").style.display = "none";
         document.getElementById("Hide_Engines_Notes").style.display = "block";
         break;
      case "Hide_Engines_Section": // /Engines /Self-Hide Section
         document.getElementById("Engines_Section").style.display = "none";
         break;
      case "Show_Engines_Section": // /Engines /Self-Show Section
         document.getElementById("Engines_Section").style.display = "block";
         break;

      /* *** Titles Processing *** */
      case "Hide_Titles_Notes": // /Titles /Self-Hide Notes
         document.getElementById("Titles_Notes_Section").style.display = "none";
         document.getElementById("Hide_Titles_Notes").style.display = "none";
         document.getElementById("Show_Titles_Notes").style.display = "block";
         break;
      case "Show_Titles_Notes": // /Titles /Self-Show Notes
         document.getElementById("Titles_Notes_Section").style.display = "block";
         document.getElementById("Show_Titles_Notes").style.display = "none";
         document.getElementById("Hide_Titles_Notes").style.display = "block";
         break;
      case "Hide_Titles_Section": // /Titles /Self-Hide Section
         document.getElementById("Titles_Section").style.display = "none";
         break;
      case "Show_Titles_Section": // /Titles /Self-Show Section
         document.getElementById("Titles_Section").style.display = "block";
         break;

      /* *** Quotes Processing *** */
      case "Hide_Quotes_Notes": // /Quotes /Self-Hide Notes
         document.getElementById("Quotes_Notes_Section").style.display = "none";
         document.getElementById("Hide_Quotes_Notes").style.display = "none";
         document.getElementById("Show_Quotes_Notes").style.display = "block";
         break;
      case "Show_Quotes_Notes": // /Quotes /Self-Show Notes
         document.getElementById("Quotes_Notes_Section").style.display = "block";
         document.getElementById("Show_Quotes_Notes").style.display = "none";
         document.getElementById("Hide_Quotes_Notes").style.display = "block";
         break;
      case "Hide_Quotes_Section": // /Quotes /Self-Hide Section
         document.getElementById("Quotes_Section").style.display = "none";
         break;
      case "Show_Quotes_Section": // /Quotes /Self-Show Section
         document.getElementById("Quotes_Section").style.display = "block";
         break;
         
      case "Quotes_Next": // QOD.Load
         console.log ("f: QOD.Load, Index=" + QOD.Index);
         QOD.Index = (QOD.Index + 1) % (QOD.List.length);
         document.getElementById("id_Quotes").innerHTML = "#" + (QOD.Index+1) + ": " + QOD.List [QOD.Index];
         break;
      case "Quotes_Font_Small": // /Quotes /FontSmall
         document.getElementById("id_Quotes").style.fontSize = "1em";
         break;
      case "Quotes_Font_Medium": // /Quotes /FontMedium
         document.getElementById("id_Quotes").style.fontSize = "1.5em";
         break;
      case "Quotes_Font_Large": // /Quotes /FontLarge
         document.getElementById("id_Quotes").style.fontSize = "2.0em";
         break;

      /* *** Resume Processing *** */
      case "Hide_Resume_Notes": // /Resume /Self-Hide Notes
         document.getElementById("Resume_Notes_Section").style.display = "none";
         document.getElementById("Hide_Resume_Notes").style.display = "none";
         document.getElementById("Show_Resume_Notes").style.display = "block";
         break;
      case "Show_Resume_Notes": // /Resume /Self-Show Notes
         document.getElementById("Resume_Notes_Section").style.display = "block";
         document.getElementById("Show_Resume_Notes").style.display = "none";
         document.getElementById("Hide_Resume_Notes").style.display = "block";
         break;
      case "Hide_Resume_Section": // /Resume /Self-Hide Section
         document.getElementById("Resume_Section").style.display = "none";
         break;
      case "Show_Resume_Section": // /Resume /Self-Show Section
         document.getElementById("Resume_Section").style.display = "block";
         break;

      /* Process Menu Navigation Clicks */
      case "nav_Quotes": // /Quotes
         Hide_All_Sections ()
         document.getElementById("Quotes_Section").style.display = "block";
         break;
      case "nav_States": // /States
         Hide_All_Sections ()
         document.getElementById("States_Section").style.display = "block";
         break;
      case "nav_Engines": // /Engines
         Hide_All_Sections ()
         document.getElementById("Engines_Section").style.display = "block";
         break;
      case "nav_Titles": // /Titles
         Hide_All_Sections ()
         document.getElementById("Titles_Section").style.display = "block";
         break;
      case "nav_All": // /All
         document.getElementById("Quotes_Section").style.display = "block";     
         document.getElementById("States_Section").style.display = "block";     
         document.getElementById("Engines_Section").style.display = "block";   
         document.getElementById("Titles_Section").style.display = "block";     
         document.getElementById("Favorites_Section").style.display = "block";  
         document.getElementById("Fortune500_Section").style.display = "block"; 
         break;
      case "nav_None": // /None
         Hide_All_Sections ()
         /*
         document.getElementById("Quotes_Section");.style.display = "none";      
         document.getElementById("States_Section");.style.display = "none";      
         document.getElementById("Engines_Section");.style.display = "none";    
         document.getElementById("Titles_Section");.style.display = "none";      
         document.getElementById("Favorites_Section");.style.display = "none";   
         document.getElementById("Fortune500_Section");.style.display = "none";  
         */
         break;
      case "nav_Themes": // /Themes
         Hide_All_Sections ()
         document.getElementById("Themes_Section").style.display = "block";
         break;
      /* Process all THEMES COLORS Button /themes */
      case "idSetThemeColor": // /Quotes
         xBgColor = event.target.style.backgroundColor;
         console.log ("   => BgColor=" + xBgColor);
         document.getElementById("html").style.backgroundColor = xBgColor;
         document.getElementById("html").style.backgroundImage = "";
         break;
      case "nav_Resume": // /Resume
         Hide_All_Sections ()
         document.getElementById("Resume_Section").style.display = "block";
         break;

      default:
         console.log("   => Invalid xId: " + xId);
      }
      
      // console.log ("ANYTHING ELSE=" + xId)
      xPrefix = xId.split("_")
      // console.log (xPrefix);
      // Special for "idSetThemeImage_*" (Theme Image)
      if (xPrefix[0] == "idSetThemeImage")
         {
         xBgImage = document.getElementById(xId).style.backgroundImage
         console.log (xBgImage)
         document.getElementById("html").style.backgroundImage = xBgImage;
         console.log ("backgroundImage=" + document.getElementById("html").style.backgroundImage);
         }
   }

// *** NEW STUFF *************************************************************************************************

// Client-side storage
//    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage
// localStorage.setItem('name','Chris');
// let myName = localStorage.getItem('name');
// localStorage.removeItem('name');

/*
// Clone to work with Page Rolodex
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}
*/

/*
// Creates Unique values from Array
function unique(arr) {
  return Array.from(new Set(arr));
}*/

// Hide all Sections with "Class=Hideable" (used as a Flag)
function Hide_All_Sections() { // console.log ("f: Hide_All_Sections");
   var x = document.getElementsByClassName("Hideable");
   // axContainer3
   for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
   }

// Menu Click Functions 
function xxProcess_Clicks(event) { console.log ("f: Process_Clicks");
   var xMenu_Item     = event.target.id;
console.log ("xMenu_Item=" + xMenu_Item);
   
   // Hide all Sections
   var x = document.getElementsByClassName("Hideable");
   for (i = 0; i < x.length; i++) {x[i].style.display = "none";}

   // Unhide "Active" Section, process ALL and NONE

 }

function InitThemes() { //Init Themes
   /* Initialize with the "DEFAULT" Button */
   xThemes = 
      "<button " +
      "id='idSetThemeColor' " + 
      "onclick='Process_Clicks(event)' " + 
      "style='" + 
         "width:9vw; height:3vw; " +
         "background-color:rgb(019,047,096); " +
         "color:White" + 
      "'" + 
      ">" + 
      "</button>";

   // Build List of Background Colors 
   var xRgbList = xThemes;
   var xGrayList = "";
   var i;
   for (nR = 0; nR <= 4; nR++)
      {
      for (nG = 0; nG <= 4; nG++)
         {
         for (nB = 0; nB <= 4; nB++)
         {
            nRed   = nR * 64; if (nRed > 255) {nRed = 255};
            nGreen = nG * 64; if (nGreen > 255) {nGreen = 255};
            nBlue  = nB * 64; if (nBlue > 255) {nBlue = 255};
               
            nContrast = (nRed + nGreen + nBlue)/3;
            TextColor = "Black"
            if (nContrast < 127) {TextColor = "White"}            
            xThemes = 
               `
                  <button 
                  id="idSetThemeColor"
                  style=
                     "
                     width:3vw; height:3vw; 
                     background-color:rgb(${nRed}, ${nGreen}, ${nBlue});
                     color:${TextColor};
                     "
                  >
                  </button>
               `
            // console.log (xThemes);
            if (nRed == nGreen && nGreen == nBlue) {xGrayList = xGrayList + xThemes;} 
            if (nRed != nGreen | nGreen != nBlue) {xRgbList = xRgbList + xThemes;} 
            }
         }
      }
      // console.log ("xRgbList=" + xRgbList)

      // Build List of Background Images 
      list_Images = "BG_Blue_Noise.bmp|BG_Red_Noise.bmp|BG_Green_Noise.bmp|BG_Asphalt.bmp|BG_Grill.bmp|BG_Paper1.bmp|BG_Paper2.bmp|BG_Tile1.bmp|" + 
                    "BG_Tile2.bmp|BG_Tile3.bmp|BG_Dark_Noise.bmp|BG_Brown_Lines.bmp"
      img_Array = list_Images.split("|")
      // console.log (img_Array);

      xImageList = "";
      for (i = 0; i < img_Array.length; i++) 
         {
            xThisImage = 
               `
               <div 
                  id="idSetThemeImage_${i}" 
                  // border:5vw solid Black;
                  data-url="./images/${img_Array[i]}"
                  style="
                     height:90px; 
                     width:90px; 
                     margin:5px; 
                     box-shadow: 4px 4px 4px rgba(15, 11, 15, 0.7), 0px 0px 4px Black;
                     background-image:url('./Images/${img_Array[i]}'");
                     ">
               </div>
               `
            xImageList = xImageList + xThisImage
         }
      document.getElementById("id_Color_Themes").innerHTML = xRgbList + xGrayList; 
      document.getElementById("id_Image_Themes").innerHTML = xImageList
   }

// Show/Hide Click Functions 
function Toggle_NotesButton (event) { 
   /* <div class="image_HideInfo" onclick="Toggle_NotesButton(event)" id="Toggle_Header_Notes">HdSh</div> */
   var xId     = event.target.id;
   xCurText    = document.getElementById(xId).innerHTML
   xCurClass   = document.getElementById(xId).getAttribute("class")
   // console.log ("f: Toggle_NotesButton, Id=" + xId + ", CurText=" + xCurText);
   xNotesId = document.getElementById(xId).getAttribute("data-Section-Id")
      // console.log ("xNotesId=" + xNotesId);
   
   if(xCurText == "Hide")
      {xNewText = "Show";
       xNewClass = "Image_ShowInfo";
       xStyle = "width:2.0em; height:1em; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); " + 
                "color:White; display: inline; border:0.025em solid White; transition: 0.2s; padding-left: 1vw; padding-right:1vw; " + 
                "margin-left: 2vw; margin-right:2vw; color:White; background-color: rgb(32,32,192); box-shadow: 2px 2px 4px Black;"                
       xDisplayStyle="none";
      } 
   else
      {xNewText = "Hide";
       xNewClass = "Image_HideInfo";
       xStyle = "width:2.0em; height:1em; text-shadow:2px 2px 4px rgba(0, 0, 0, 0.7); " + 
                "color:White; display:inline; border:0.025em solid White; transition:0.2s; padding-left:1vw; padding-right:1vw; " +
                "margin-left:2vw; margin-right:2vw; color:White; background-color:rgb(192, 32, 32); box-shadow:2px 2px 4px Black; "
       xDisplayStyle="block";
      }
   /* Change InnerHTML, Style and Display properties according to if status is SHOW or HIDE */
   console.log ("f: inside Toggle_Header_Notes")
   document.getElementById(xId).innerHTML = xNewText
   document.getElementById(xId).style = xStyle
   document.getElementById(xNotesId).style.display = xDisplayStyle
   }
