// popup.js
document.addEventListener('DOMContentLoaded', function () {
  const redirectButton = document.getElementById('redirectButton');
  const newRedirectButton = document.getElementById('newRedirectButton');
  const customTextArea = document.getElementById("customTextArea");
  const speechButton = document.getElementById("speechButton");

  speechButton.addEventListener('click', function speechToText() {

    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
        speechButton.style.backgroundColor = "#d96f6f";
    }
    recognization.onresult = (e) => {
        var transcript = e.results[0][0].transcript;
        customTextArea.value = transcript;

        speechButton.style.backgroundColor = "#c1cbd5";
    }
    recognization.start();

    // makeAPIRequestAndRedirect();

  });

  redirectButton.addEventListener('click', function makeAPIRequestAndRedirect() {
    
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = 'INSERT API KEY HERE';

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: ` You are a URL navigator bot, you will be given a dictionary.
          The dictionary is a key value pair.
          The key here is URL and the valule is an array of keywords.
          You have to understand the user query, given between #### and return the URL which best fits the user query using keywords.
          THe dictionary is as follows - 
          {
            "https://www.igdtuw.ac.in/placements.php": [
              "Placement",
              "placement",
              "Placements",
              "Campus Placements",
              "Job Placements",
              "Career Placements",
              "Placement Services",
              "Employment Placements",
              "College Placements",
              "Student Placements",
              "Graduate Placements",
              "Placement Opportunities",
              "Placement Programs",
              "Placement Assistance",
              "Placement Support",
              "Placement Resources",
              "Recruitment Placements",
              "TNP Placements",
              "Placement Cell"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=4": [
              "Training and Placement Cell Message",
              "TPOS Message",
              "TPO",
              "Message from Training Placement Cell",
              "TNP Cell Message",
              "Placement Cell Communication",
              "TNP Department Announcement",
              "Career Services Message"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=555": [
              "Videos of Placement",
              "Placement Videos",
              "Career Placement Videos",
              "Job Placement Videos",
              "Campus Recruitment Videos",
              "TNP Video Resources",
              "Employment Success Videos",
              "Student Job Placement Videos",
              "Placement Preparation Videos",
              "Recruitment Insights Videos",
              "Alumni Career Journey Videos",
              "Placement Interview Tips Videos",
              "Employer Insights Videos",
              "Graduation Job Offers Videos",
              "Placement Success Stories Videos",
              "Career Development Video Series",
              "Job Search Strategies Videos",
              "Placement Webinars",
              "TNP Multimedia Resources",
              "Interview Preparation Videos",
              "Internship Experience Videos"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=666": [
              "Alumni success stories",
              "Career journeys",
              "Alumni testimonials",
              "Professional achievements",
              "Alumni perspectives",
              "Mentorship stories",
              "Alumni interviews",
              "Alumni Videos",
              "Alumni Success Stories Videos",
              "Alumni Career Journey Videos",
              "Alumni Testimonials Videos",
              "Alumni Professional Achievements Videos",
              "Alumni Perspectives Videos",
              "Alumni Mentorship Stories Videos",
              "Alumni Interviews Videos",
              "Former Student Insights Videos",
              "Graduates' Career Paths Videos",
              "Alumni Impact Stories Videos"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=777": [
              "HR Feedback",
              "Placement Report",
              "Placement Statistics",
              "Recruitment outcomes",
              "Recruiting Experience"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=2": [
              "Year-wise placement statistics",
              "Annual placement report",
              "Placements by year",
              "Graduation year job placements",
              "Year-wise recruitment data",
              "Yearly placement trends"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=997": [
              "TNP achievements",
              "TNP Glimpse",
              "Orientation-UG-Placement"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=999": [
              "PLACEMENT STATISTICS BATCH 2022-2023",
              "Placement statistics 2022-2023",
              "Batch 2022-2023 placement report",
              "Graduating class 2022-2023 placements",
              "Job placement data for 2022-2023 batch",
              "Employment outcomes for batch 2022-2023",
              "Career placement statistics 2022-2023",
              "Batch-wise hiring trends 2022-2023",
              "Placement rates for 2022-2023 batch",
              "Batch-specific placement analysis",
              "Job offers for batch 2022-2023",
              "Placement success 2022-2023",
              "Batch 2022-2023 job placement analysis"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=998": [
              "Placement statistics 2016-2022",
              "Batch 2016-2022 placement report",
              "Graduating class 2016-2022 placements",
              "Job placement data for 2016-2022 batch",
              "Employment outcomes for batch 2016-2022",
              "Career placement statistics 2016-2022",
              "Batch-wise hiring trends 2016-2022",
              "Placement rates for 2016-2022 batch",
              "Batch-specific placement analysis",
              "Job offers for batch 2016-2022",
              "Placement success 2016-2022"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=778": [
              "TNP brochure",
              "Training and Placement Brochure 2022-2023",
              "Career Services Brochure",
              "Placement Information Booklet",
              "TNP Guide 2022-2023",
              "Career Development Handbook",
              "TNP Prospectus 2022-2023",
              "Placement Catalog 2022-2023",
              "Campus Recruitment",
              "2022-2023 TNP Brochure",
              "TNP Brochure PDF",
              "Job Placement Guide 2022-2023",
              "Career Resources Brochure",
              "Student Placement Handbook",
              "Placement Preparation Brochure"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=779": [
              "TNP brochure",
              "Training and Placement Brochure 2021-2022",
              "Career Services Brochure",
              "Placement Information Booklet",
              "TNP Guide 2021-2022",
              "Career Development Handbook",
              "TNP Prospectus 2021-2022",
              "Placement Catalog 2021-2022",
              "Campus Recruitment",
              "2021-2022 TNP Brochure",
              "TNP Brochure PDF",
              "Job Placement Guide 2021-2022",
              "Career Resources Brochure",
              "Student Placement Handbook",
              "Placement Preparation Brochure"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=7": [
              "PLACEMENT STATISTICS FOR 2020-21",
              "Placement Report 2020-2021",
              "Placement Report 2020-21",
              "2020-21 Placement Report",
              "Annual Placement Report",
              "College Placement Statistics",
              "Placement Analysis 2020-21",
              "Graduation Year Job Placements",
              "Career Outcomes Report",
              "Employment Data 2020-21",
              "Job Offers by Graduation Year",
              "Campus Recruitment Report",
              "Placement Trends 2020-21",
              "Placement Records 2020-21"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=5": [
              "PLACEMENT STATISTICS FOR 2019-20",
              "Placement Report 2020-2021",
              "Placement Report 2019-20",
              "2019-20 Placement Report",
              "Annual Placement Report",
              "College Placement Statistics",
              "Placement Analysis 2019-20",
              "Graduation Year Job Placements",
              "Career Outcomes Report",
              "Employment Data 2019-20",
              "Job Offers by Graduation Year",
              "Campus Recruitment Report",
              "Placement Trends 2019-20",
              "Placement Records 2019-20"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=6": [
              "PLACEMENT STATISTICS FOR 2018-19",
              "Placement Report 2020-2021",
              "Placement Report 2018-19",
              "2018-19 Placement Report",
              "Annual Placement Report",
              "College Placement Statistics",
              "Placement Analysis 2018-19",
              "Graduation Year Job Placements",
              "Career Outcomes Report",
              "Employment Data 2018-19",
              "Job Offers by Graduation Year",
              "Campus Recruitment Report",
              "Placement Trends 2018-19",
              "Placement Records 2018-19"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=16": [
              "PLACEMENT STATISTICS FOR 2018-23(MAE)",
              "Placement Report 2018-23(MAE)",
              "Placement Report 2018-23(MAE)",
              "2018-23(MAE) Placement Report",
              "Annual Placement Report",
              "College Placement Statistics",
              "Placement Analysis 2018-23(MAE)",
              "Graduation Year Job Placements",
              "Career Outcomes Report",
              "Employment Data 2018-23(MAE)",
              "Job Offers by Graduation Year",
              "Campus Recruitment Report",
              "Placement Trends 2018-23(MAE)",
              "Placement Records 2018-23(MAE)"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=1": [
              "Visiting companies",
              "Recruiting companies",
              "Employer visits",
              "Company recruiters",
              "On-campus employers",
              "Companies at career fair",
              "Hiring companies",
              "Corporate recruiters",
              "Campus job recruiters",
              "Visiting employers"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=444": [
              "Invite to Companies for Campus Drive 2021-22",
              "Campus drive invitation",
              "College recruitment invitation",
              "Corporate invite for placements",
              "2021-22 campus hiring invitation",
              "Recruitment drive invitation",
              "Company visit invitation",
              "Campus placement invitation",
              "Invite to hiring companies",
              "Employer engagement invitation",
              "On-campus recruiting invite",
              "Company outreach for placements",
              "Invitation for recruitment event",
              "Campus hiring program invitation",
              "Recruitment partnership invitation",
              "2021-22 career fair invitation",
              "Campus interview invite",
              "Placement collaboration invitation",
              "Employment opportunity invitation",
              "Recruitment drive participation invite"
            ],
            "https://www.igdtuw.ac.in/placements.php?id=888": [
              "TNP Felicitation Ceremony",
              "Training and Placement Felicitation Event",
              "Placement Ceremony",
              "TNP Recognition Event",
              "Career Achievement Ceremony",
              "Felicitation for Placement Success",
              "TNP Honor and Recognition",
              "TNP Appreciation Ceremony"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=2": [
              "Facilities",
              "Facilities at IGDTUW",
              "Facilities at University"
            ],
            "https://www.igdtuw.ac.in/Library.php": [
              "Library",
              "Library Services",
              "Learning Resource Centre",
              "E-Resorces",
              "E-books",
              "Library Rules and Regulations",
              "Library Form",
              "Contact the Librarian",
              "Library Officer/Staff"
            ],
            "https://www.igdtuw.ac.in/Hostels.php": [
              "Hostels",
              "Hostel Noifications",
              "Hostel Facilities",
              "Hostel Rules",
              "Hostel Staff",
              "Hostel Admission Procedure",
              "Glimpse of IGDTUW Hostel Life"
            ],
            "https://www.igdtuw.ac.in/Itservices.php": [
              "IT Services",
              "IT Infrastructre of IGDTUW",
              "IT Facilities",
              "IT Roles and Responsibilities",
              "IT Complaints",
              "ICT Policy"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=5": [
              "Bank"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=6": [
              "Computer Center"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=7": [
              "University Dispensary"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=8": [
              "Guest House"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=3": [
              "Careers"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=3": [
              "Advt. for Visiting Faculty",
              "Advertisement for Empanelment of Visiting Faculty in various Departments"
            ],
            "https://www.igdtuw.ac.in/tenders.php?id=4": [
              "Tenders"
            ],
            "https://alumni.igdtuw.ac.in/": [
              "Alumni Website",
              "Alumni Webpage",
              "Alumni Videos",
              "Alumni Gallery",
              "Alumni Meet"
            ],
            "https://convocation.igdtuw.ac.in/": [
              "Convocation",
              "Awardees",
              "Convocation Gallery Archives"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=588": [
              "SDGs@IGDTUW",
              "Sustainable Development Goals"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=1": [
              "Dean",
              "Student Welfare"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=39": [
              "Activities of DSW Office",
              "DSW Activities"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=2": [
              "Clubs and Societies"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=3": [
              "Technical Societies"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=4": [
              "Socities Founded and Supported"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=5": [
              "Clubs"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=7": [
              "Sports"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=8": [
              "Student Notices",
              "Student Notice Board"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=1888": [
              "Summer Internships"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=388": [
              "Alumni",
              "Alumni Meet"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=5888": [
              "DAP@SDGs"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=488": [
              "IGDTUW Newsletters"
            ],
            "https://www.igdtuw.ac.in/studentlife.php?id=688": [
              "Tech Collaborations",
              "List of MoUs",
              "Collaborations With Delhi Government Departments (MoUs)"
            ],
            "https://skinfotechies.in/demo/g20/": [
              "G20@IGDTUW",
              "G20",
              "Countries involved in G20 Summit",
              "Importance of G20 for India"
            ],
            "https://research.igdtuw.ac.in/": [
              "Research Award",
              "Research Awardees"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=1": [
              "Institute's History",
              "Institute's Establishment"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=2": [
              "Vision",
              "Mission"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=3": [
              "Vice Chancellor",
              "VC"
              "Dr(Mrs).Amita Dev"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=4": [
              "Registrar",
              "Prof. Manoj Soni"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=14": [
              "Acts and Ordinances - IGDTUW",
              " "
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=5": [
              "STATUTORY BODIES OF UNIVERSITY"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=6": [
              "University Court",
              "Minutes of Meeting of University Court"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=7": [
              "Board of Management",
              "Minutes of Meetings of Board of Management"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=8": [
              "Finance Committee",
              "Minutes of Meetings of Finance Commitee"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=9": [
              "Academic Council",
              "Minutes of Meetings of Academic Council"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=12": [
              "Planning Board",
              "Minutes of Meeting of Planning Board"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=10": [
              "Administration",
              "University Administration"
            ],
            "https://www.igdtuw.ac.in/AboutUs.php?id=11": [
              "Forms",
              "Forms for Establishment"
            ],
            "https://www.igdtuw.ac.in/appliedScience.php": [
              "Applied Science and Humanaties",
              "Department of Applied Science and Humanaties "
            ],
            "https://www.igdtuw.ac.in/appliedScience.php?id=1": [
              "Objectives of Applied Science and Humanaties",
              "Vision of Applied Science and Humanaties",
              "Mission of Applied Science and Humanaties"
            ]
          }
          
        Example - 
        Take me the page having Placement Resources.
        Response - 
          https://www.igdtuw.ac.in/placements.php
        Example - 
        Take me the page having Training and Placement Contacts.
        Response - 
          https://www.igdtuw.ac.in/placements.php?id=3
        Example - 
        Tell me something about TNP Felicitation Ceremony.
        Response - 
        https://www.igdtuw.ac.in/placements.php?id=888 `
          + 
          "####Example - Take me to page "+customTextArea.value+" #### Response -",
        },
      ],
    };
    customTextArea.value = "Searching..."
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestData),
    })
    .then((response) => {
      // console.log('reached first then portion')

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log('reached second then portion')

      // Extract the URL from the API response
      const msg=data.choices[0].message.content
      // console.log(msg);
      const apiResponseContent = msg.trim();
      
      // Redirect to the extracted URL
      chrome.tabs.update({ url: apiResponseContent });
      customTextArea.value = "";
      
      
      // console.log(window.location.href)
      
      if (msg.toLowerCase().includes('sorry') || msg.toLowerCase().includes('apologies') || msg.toLowerCase().includes('couldn\'t find')) {
        // Reload the page to a different page.
        console.log('We were not able to find the webpage that you requested. The database is still under construction. Kindly bear with us. Thank you!')
        chrome.tabs.update({ url: "https://mir-s3-cdn-cf.behance.net/projects/404/b3e66782252483.Y3JvcCw4MDgsNjMyLDIsMA.png" });
      }

    })
    .catch((error) => {
      // console.log('reached catch portion')

      console.error('There was a problem with the API request:', error);
      chrome.tabs.update({ url: "https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?w=740&t=st=1702474498~exp=1702475098~hmac=68c9e1e44b3d3c933b9ebe4f0475f543e9855ac493e1712531bce637abaedb9f" });
    });
    
  });

  newRedirectButton.addEventListener("click", function() {
    customTextArea.value = "";
  });
});
