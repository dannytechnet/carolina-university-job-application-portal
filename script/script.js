"use strict";
console.log("i love JS");
let xz = 0;
// STORED VALUES

let courseOfMeeting = "";
let timeSetter = "";
let timeTRacker = 0;
let meetinPurposeTracker = 0;
// DASH BOARD HIGHLIGHTER VARIABLES
const signUppageOverlay = document.querySelector(".SignUp-ovelay");
const signUppage = document.querySelector(".Signup");
const footerSection = document.querySelector(".footer");
const dashBoardHighlighter1 = document.querySelector(".dash-boardHighlighter1");
const homeSectionHeroIMG = document.querySelector(".home-section-header");
const dashBoardHighlighter2 = document.querySelector(".dash-boardHighlighter2");
const dashBoardHighlighter3 = document.querySelector(".dash-boardHighlighter3");
const dashBoardHighlighter4 = document.querySelector(".dash-boardHighlighter4");
const dashBoardHighlighter5 = document.querySelector(".dash-boardHighlighter5");
const dashBoardHighlighter6 = document.querySelector(".dash-boardHighlighter6");
const dashBoardHighlighter7 = document.querySelector(".dash-boardHighlighter7");
const okBTN = document.querySelector(".okBTN");
// PAGE SWITCHER
const dsoBtnOffice = document.querySelector(".dsoBtn");
const availableJobSection = document.querySelector(".availableJob-Section");
const HomeviewAllCTA = document.querySelector(".view-allCTA");
const availableJobBtn = document.querySelector(".AvailableJobsBTN");
// const notificatonBTN = document.querySelector(".notificationBTN");
const homePageBTN = document.querySelector(".homeBTN");
const dashBoardSection = document.querySelector(".dashboard-section");
const dashBoardBTN = document.querySelector(".dashBoardBTN");
const mainPagseBagd = document.querySelector(".main-page");
const messageBox = document.querySelectorAll(".job-main-con");
const pagination = document.querySelectorAll(".pagination-pages");
const ovelayTwo = document.querySelector(".ovelay2");
const jobsInfoModal = document.querySelector(".modal-jobs-info");
const markAllDropDown = document.querySelector(".menu-drop-down");
const verticalMenu = document.querySelector(".vertical-menu");
// const verticalCloseMenu = document.querySelector(".vertical2");
const overlayBg = document.querySelector(".overlayBg");
const mailsCon = document.querySelectorAll(".mails-con");
const cancelIcon = document.querySelectorAll(".cancel-iconAppointment");
const dscPage = document.querySelector(".dso-section");

// DSO NAV CLASSES
const dsoHomeNav = document.querySelector(".dsoHomeNav");
const dsoServiceNav = document.querySelectorAll(".dsoService");
const dsoTravelsNav = document.querySelectorAll(".dsoTravel");
const dsoFAQsNav = document.querySelector(".dsoFAQs");
const dsoFormNav = document.querySelector(".ddsoForm");
const dsoHero1 = document.querySelector(".dso-hero-img1");
const dsoHero2 = document.querySelector(".dso-hero-img2");
const dsoHero3 = document.querySelector(".dso-hero-img3");
const dsoHero4 = document.querySelector(".dso-hero-img4");
const dsoHeaderText = document.querySelector(".dso-header");
const dsoSubHeaderText = document.querySelector(".dso-sub-header");
const btnService = document.querySelectorAll(".btnService");
const dsoHomecard = document.querySelectorAll(".dsohome-card");
const servicesCard = document.querySelectorAll(".services-card");
const dsoModal = document.querySelector(".dsoModal");
const dsoModalServiceIMG = document.querySelector(".dsomodal-img");
const dsoModalServiceCont = document.querySelector(".dsoModal-info-content");
const dsoserviceCardHeader = document.querySelector(".service-card-header");
const dsoModalBtn = document.querySelector(".dsoModal-btn");
const dsoModalCacelIcon = document.querySelector(".dsoModalCacel-icon");
const servicesCardSection = document.querySelector(".servicesCardSection");
const homeCardSection = document.querySelector(".homeCardSection");
const travelSection = document.querySelector(".travelCardSection");
const dsoFAQSection = document.querySelector(".dsoFAQs-section-con");
dsoFAQSection.classList.add("hidder");

const dsoFormLink = document.querySelector(".dsoFormLink");
const backToLoginPage = document.querySelector(".backTologin");
const dsoFormdropDow = document.querySelector(".dso-form-drop-menu");
dsoFormLink.addEventListener("click", function () {
  dsoFormdropDow.classList.toggle("dso-dropdown");
});

// SIGNUP PAGE
signUppage.addEventListener("click", function () {
  signUppageOverlay.classList.remove("hidder");
  loginPAge.classList.add("hidder");
  console.log("uuu");
});
backToLoginPage.addEventListener("click", function () {
  signUppageOverlay.classList.add("hidder");
  loginPAge.classList.remove("hidder");
});

// DSO HOME SECTION

dsoHomeNav.addEventListener("click", function () {
  travelSection.classList.add("hidder");
  servicesCardSection.classList.add("hidder");
  dsoFAQSection.classList.add("hidder");
  dsoHero1.classList.remove("hidder");
  dsoHeaderText.textContent = "DSO Office";
  dsoHero2.classList.add("hidder");
  homeCardSection.classList.remove("hidder");
  dsoSubHeaderText.classList.remove("hidder");
  dsoHero3.classList.add("hidder");
  dsoHero4.classList.add("hidder");
  footerSection.classList.remove("hidder");
  for (let l = 0; l < dsoHomecard.length; l++) {
    dsoHomecard[l].classList.remove("hidder");
  }
  dsoSubHeaderText.textContent = `The DSO Office is the main point of contact for issues related to your SEVIS record (Form I-20). Designated School Officials serve as liaisons between international students, the school, and the U.S. government. DSOs issue necessary immigration forms, and guide students through the process of studying in the U.S. The DSO Office will assist you to update your student record and help you maintain your student status by providing advice or helping you fill out important forms.`;
});

// FAQ section

const dsoFAQLink = document.querySelector(".dsoFAQs");
for (let i = 0; i < dsoServiceNav.length; i++) {
  dsoServiceNav[i].addEventListener("click", function () {
    console.log("dso");
    dsoHero1.classList.add("hidder");
    dsoHero2.classList.remove("hidder");
    travelSection.classList.add("hidder");
    dsoHero4.classList.add("hidder");
    dsoHero3.classList.add("hidder");
    dsoFAQSection.classList.add("hidder");
    servicesCardSection.classList.remove("hidder");
    dsoHero3.classList.add("hidder");
    dsoHeaderText.textContent = "SERVICES";
    dsoSubHeaderText.classList.add("hidder");
    footerSection.classList.remove("hidder");

    for (let k = 0; k < servicesCard.length; k++) {
      servicesCard[k].classList.remove("hidder");

      for (let l = 0; l < dsoHomecard.length; l++) {
        dsoHomecard[l].classList.add("hidder");
      }
      for (let l = 0; l < btnService.length; l++) {
        btnService[0].addEventListener("click", function () {
          dsoserviceCardHeader.textContent = `Curricular Practical Training (CPT)`;
          dsoModalBtn.textContent = `CPT Request`;
          dsoModal.classList.remove("hidder");
          dsoModalServiceIMG.src = `images/dsoimgs/CPT.webp`;
          dsoModalServiceCont.textContent = ` CPT provides the opportunity for international students to gain
          professional training and to work in paid internship positions.
          The students have the chance to apply for an authorized job and
          work full-time or part-time with the option of salary or just gain
          work experience in their area of interest, this will be up to the
          employer. The training must relate directly to the student’s major
          area of study and the authorization is for one specific employer
          and for a specific period of time. One year of full-time CPT
          eliminates a student’s eligibility for OPT.`;
        });
        btnService[1].addEventListener("click", function () {
          dsoserviceCardHeader.textContent = `Optical Practical OPT Request`;

          dsoModalBtn.textContent = `CPT Request`;
          dsoModal.classList.remove("hidder");
          dsoModalServiceIMG.src = `images/dsoimgs/OPT.webp`;
          dsoModalServiceCont.textContent = ` CPT provides the OPT allows F1 students to work for any employer as long as the training relates to the student’s major course of study. The training provides real-world work experience and it can occur before or after the student’s program end date. As OPT applicant you must monitor the progress of your OPT process, as an applicant you are fully responsible for the entire process. While a Designated School Official (DSO) recommends OPT in SEVIS, it is the applicant who must apply for the work permit with the U.S. Citizenship and Immigration Service (USCIS).`;
        });
        btnService[2].addEventListener("click", function () {
          dsoserviceCardHeader.textContent = `Reduced Course Load  Request (RCL)`;
          dsoModalBtn.textContent = `RCL Request`;
          dsoModal.classList.remove("hidder");
          dsoModalServiceIMG.src = `images/dsoimgs/RCL.webp`;
          dsoModalServiceCont.textContent = ` International students in F-1 status are required to maintain full-time enrollment during the school year (12 credits per semester for undergraduates, 9 credits for masters, and 6 credist for PhDs). If you cannot or will not meet this requirement, you must request a reduced course load. Federal immigration regulations severely limit a student's ability to be less than full-time, but it may be allowed in some circumstances explained below. If you drop below full-time without authorization after the drop/add deadline, this office is required to report it to SEVIS.`;
        });
        btnService[3].addEventListener("click", function () {
          dsoserviceCardHeader.textContent = `Authorized Early Withdrawal`;
          dsoModalBtn.textContent = `Authorized
          Withdrawal Request`;
          dsoModal.classList.remove("hidder");
          dsoModalServiceIMG.src = `images/dsoimgs/AuthorizedEarlyWithdrawal.webp`;
          dsoModalServiceCont.textContent = ` International students in F-1 status are required to maintain full-time enrollment during the school year (12 credits per semester for undergraduates, 9 credits for masters, and 6 credist for PhDs). If you cannot or will not meet this requirement, you must request a reduced course load. Federal immigration regulations severely limit a student's ability to be less than full-time, but it may be allowed in some circumstances explained below. If you drop below full-time without authorization after the drop/add deadline, this office is required to report it to SEVIS.`;
        });
        btnService[4].addEventListener("click", function () {
          dsoserviceCardHeader.textContent = `Dependent Application Form`;
          dsoModalBtn.textContent = `Dependent Request`;
          dsoModal.classList.remove("hidder");
          dsoModalServiceIMG.src = `images/dsoimgs/DependentApplication.webp `;
          dsoModalServiceCont.textContent = `An international student may be accompanied to the U.S. by their dependent(s) at any time. Dependents are defined as spouses and/or unmarried minor children. Children over the age of 21 are not eligible to enter as the dependent of an international student (F1 student). Carolina University International Students are eligible to add dependents to their Form I-20. This allows dependents to apply for an F-2 visa and to live in the United States with an active F-1 student. `;
        });
        btnService[5].addEventListener("click", function () {
          dsoserviceCardHeader.textContent = `Transfer to another School`;
          dsoModalBtn.textContent = `Transfer Request`;
          dsoModal.classList.remove("hidder");
          dsoModalServiceIMG.src = `images/dsoimgs/TransferToAnother.webp `;
          dsoModalServiceCont.textContent = `F-1 students are eligible to transfer from one SEVP-certified school to another as long as they have maintained their student status and followed the correct transfer procedures of the transfer-out school and meet the requirements of the transfer-in school. The student must work along with their DSO who, upon request, must transfer their SEVIS record to the transfer-in SEVP‑certified school of the student’s choice. `;
        });
        dsoModalCacelIcon.addEventListener("click", function () {
          dsoModal.classList.add("hidder");
        });
      }
    }
  });
}
// DSO TRAVELS SECTION
for (let i = 0; i < dsoTravelsNav.length; i++) {
  dsoTravelsNav[i].addEventListener("click", function () {
    servicesCardSection.classList.add("hidder");
    homeCardSection.classList.add("hidder");
    dsoHero1.classList.add("hidder");
    dsoHero2.classList.add("hidder");
    dsoHero3.classList.remove("hidder");
    dsoHeaderText.textContent = "TRAVELS";
    dsoFAQSection.classList.add("hidder");
    travelSection.classList.remove("hidder");
    dsoSubHeaderText.classList.remove("hidder");
    footerSection.classList.remove("hidder");
    dsoSubHeaderText.textContent = `All international students are allowed to travel in the U.S. or travel internationally, or a combination of both. They are also expected to enroll every semester in a full-course of study to maintain their F1 status. They must register the required credits according to their level of education and attend all classes, and maintain normal academic progress.`;
  });
}
// DSO FAQs SECTIONS
dsoFAQLink.addEventListener("click", function () {
  console.log("pppp");
  travelSection.classList.add("hidder");
  dsoSubHeaderText.classList.add("hidder");
  dsoHero1.classList.add("hidder");
  dsoHeaderText.textContent = "FAQ";
  dsoHero2.classList.add("hidder");
  dsoHero3.classList.add("hidder");
  homeCardSection.classList.add("hidder");
  servicesCardSection.classList.add("hidder");
  dsoHero4.classList.remove("hidder");
  servicesCardSection.classList.add("hidders");
  dsoFAQSection.classList.remove("hidder");
  footerSection.classList.remove("hidder");
});
// DSO CTA CLASSES

// MAIL ACTIVE
for (let i = 0; i < mailsCon.length; i++) {
  mailsCon[i].addEventListener("click", function () {
    mailsCon[i].classList.add("mails-conActive");
  });
}

// MARK ALL DROP DOWN MENU
const g = 0;
// verticalCloseMenu.classList.add("hidder");
// overlayBg.classList.add("hidder");

// verticalMenu.addEventListener("click", function () {
//   markAllDropDown.classList.remove("hidder");
//   verticalMenu.classList.add("hidder");
//   verticalCloseMenu.classList.remove("hidder");
//   overlayBg.classList.remove("hidder");
// });
// verticalCloseMenu.addEventListener("click", function () {
//   markAllDropDown.classList.add("hidder");
//   verticalCloseMenu.classList.add("hidder");
//   verticalMenu.classList.remove("hidder");
//   overlayBg.classList.add("hidder");
// });
// overlayBg.addEventListener("click", function () {
//   markAllDropDown.classList.add("hidder");
//   verticalMenu.classList.remove("hidder");
//   // verticalCloseMenu.classList.add("hidder");
//   overlayBg.classList.add("hidder");
//   console.log("ree");
// });

// JOB MOODAL WINDOW DECLERATION
const jobMessageContainer = document.querySelectorAll(".job-main-con");
const notificationBTN = document.querySelector(".notificationBTN");
const notificationCon = document.querySelector(".notification-section-con");
// notificationCon.classList.add("hidder");
// PAGE SWITCHER EVENTLISTENER
const HomeSection = document.querySelector(".home-Section");
HomeSection.classList.add("hidder");
availableJobSection.classList.add("hidder");
dashBoardSection.classList.remove("hidder");
dscPage.classList.add("hidder");

homePageBTN.addEventListener("click", function () {
  dashBoardSection.classList.add("hidder");
  dashBoardBTN.classList.remove("sideBarHighlighter");
  homePageBTN.classList.add("sideBarHighlighter");
  availableJobBtn.classList.remove("sideBarHighlighter");
  HomeSection.classList.remove("hidder");
  dashBoardSection.classList.add("hidder");
  dsoBtnOffice.classList.remove("sideBarHighlighter");
  // notificationCon.classList.add("hidder");
  availableJobSection.classList.add("hidder");
  // notificatonBTN.classList.remove("sideBarHighlighter");
  dscPage.classList.add("hidder");
});
dashBoardBTN.addEventListener("click", function () {
  dashBoardSection.classList.remove("hidder");
  homePageBTN.classList.remove("sideBarHighlighter");
  dashBoardBTN.classList.add("sideBarHighlighter");
  availableJobSection.classList.add("hidder");
  availableJobBtn.classList.remove("sideBarHighlighter");
  // notificatonBTN.classList.remove("sideBarHighlighter");
  dsoBtnOffice.classList.remove("sideBarHighlighter");
  // notificationCon.classList.add("hidder");
  HomeSection.classList.add("hidder");
  dscPage.classList.add("hidder");
});
// notificatonBTN.addEventListener("click", function () {
//   dashBoardSection.classList.add("hidder");
//   homePageBTN.classList.remove("sideBarHighlighter");
//   dashBoardBTN.classList.remove("sideBarHighlighter");
//   availableJobSection.classList.add("hidder");
//   notificatonBTN.classList.remove("hidder");
//   availableJobBtn.classList.remove("sideBarHighlighter");
//   notificatonBTN.classList.add("sideBarHighlighter");
//   dsoBtnOffice.classList.remove("sideBarHighlighter");
//   HomeSection.classList.add("hidder");
//   notificationCon.classList.remove("hidder");
//   dscPage.classList.add("hidder");
// });

// HOME PAGE VIEW-ALL CTA BUTTON ACTIONS
const availJobFunction = function () {
  homePageBTN.classList.remove("sideBarHighlighter");
  dashBoardBTN.classList.remove("sideBarHighlighter");
  availableJobBtn.classList.add("sideBarHighlighter");
  availableJobSection.classList.remove("hidder");
  HomeSection.classList.add("hidder");
  dsoBtnOffice.classList.remove("sideBarHighlighter");
  // notificatonBTN.classList.remove("sideBarHighlighter");
  dashBoardSection.classList.add("hidder");
  // notificationCon.classList.add("hidder");
  dscPage.classList.add("hidder");
};

// DSO SECTION
dsoBtnOffice.addEventListener("click", function () {
  console.log("lolo");
  homePageBTN.classList.remove("sideBarHighlighter");
  availableJobBtn.classList.remove("sideBarHighlighter");
  dashBoardBTN.classList.remove("sideBarHighlighter");
  // notificatonBTN.classList.remove("sideBarHighlighter");
  availableJobSection.classList.add("hidder");
  dsoBtnOffice.classList.add("sideBarHighlighter");
  HomeSection.classList.add("hidder");
  dashBoardSection.classList.add("hidder");
  footerSection.classList.remove("hidder");
  // notificationCon.classList.add("hidder");
  dscPage.classList.remove("hidder");
});

HomeviewAllCTA.addEventListener("click", availJobFunction);
availableJobBtn.addEventListener("click", availJobFunction);
// ////////////////////

// BOOKING CONTAINERS
const bookingSubmitionCon = document.querySelector(".bookingSubmitionCon");
const bookingCon = document.querySelector(".booking-con");

// BOOKING DETAILS
const meetingPurpos = document.querySelector(".meeting-purpose");
const meetingDate = document.querySelector(".booking-Date");

// DATES/TIME VARIABLE
const timeFetcher = document.querySelector(".booking-time");

// APPOITMENT EVENT LISTENER
const appitmen1BRN = document.querySelector(".Appointment-con1");
appitmen1BRN.addEventListener("click", function () {
  console.log("bb");
  bookingSubmitionCon.classList.remove("hidder");
  bookingCon.classList.remove("hidder");
  ovelayTwo.classList.remove("hidder");
  bookingSubmitionCon.classList.add("hidder");
  jobsInfoModal.classList.add("hidder");
});
// APPOITMENT SUBMITION BTN / SUBMIT ERRO DISPLAY
const appointmentBTN = document.querySelector(".appointmentBTN");
appointmentBTN.addEventListener("click", function () {
  console.log(courseOfMeeting);
  bookingCon.classList.add("hidder");
  bookingSubmitionCon.classList.remove("hidder");
  // DATE FETCHER

  // MEETING PURPOSE
  if (meetinPurposeTracker === 0) {
    meetingPurpos.textContent = `No meeting was selected`;
    meetingPurpos.style.color = "red";
    // meetingPurpos.textContent = courseOfMeeting;
  } else if (meetinPurposeTracker === 1) {
    meetingPurpos.textContent = `Metting Purpose:  ${courseOfMeeting} `;
    meetingPurpos.style.color = "#555";
  }

  const dateInpute = String(document.getElementById("dateInpute").value);
  console.log(dateInpute, typeof dateInpute);

  if (!dateInpute) {
    meetingDate.textContent = `No Date was selected`;
    meetingDate.style.color = "red";
  } else if (dateInpute) {
    meetingDate.textContent = `DATE: ${dateInpute} `;
    meetingDate.style.color = "#555";
    console.log(dateInpute);
  }

  // TIME FETCHER
  if (timeTRacker === 0) {
    timeFetcher.textContent = `No time was selected`;
    timeFetcher.style.color = "red";
  } else if (timeTRacker === 1) {
    timeFetcher.textContent = `Time: ${timeSetter} `;
    timeFetcher.style.color = "#555";
  }
});

// REMOVAL OF APPOITMENT MODAL WINDOW
okBTN.addEventListener("click", function () {
  ovelayTwo.classList.add("hidder");
  console.log("r");
});

// MODAL MEETING BOTTON SELLECTED (COLOR)
const clickColorBlue = document.querySelectorAll(".meeting-course");
const infoIcon = document.querySelectorAll(".info-icon");
for (let i = 0; i < clickColorBlue.length; i++) {
  clickColorBlue[0].addEventListener("click", function () {
    clickColorBlue[0].classList.add("courseColor");
    clickColorBlue[1].classList.remove("courseColor");
    clickColorBlue[2].classList.remove("courseColor");
    clickColorBlue[3].classList.remove("courseColor");
    meetinPurposeTracker = 1;
    for (let k = 0; k < infoIcon.length; k++) {
      infoIcon[0].classList.add("infoBoder");
      infoIcon[1].classList.remove("infoBoder");
    }
    courseOfMeeting = clickColorBlue[0].textContent;
  });
  clickColorBlue[1].addEventListener("click", function () {
    clickColorBlue[0].classList.remove("courseColor");
    clickColorBlue[1].classList.add("courseColor");
    clickColorBlue[2].classList.remove("courseColor");
    clickColorBlue[3].classList.remove("courseColor");
    meetinPurposeTracker = 1;

    for (let k = 0; k < infoIcon.length; k++) {
      infoIcon[0].classList.remove("infoBoder");
      infoIcon[1].classList.add("infoBoder");
    }
    courseOfMeeting = clickColorBlue[1].textContent;
  });
  clickColorBlue[2].addEventListener("click", function () {
    clickColorBlue[0].classList.remove("courseColor");
    clickColorBlue[1].classList.remove("courseColor");
    clickColorBlue[2].classList.add("courseColor");
    clickColorBlue[3].classList.remove("courseColor");
    meetinPurposeTracker = 1;

    for (let k = 0; k < infoIcon.length; k++) {
      infoIcon[0].classList.remove("infoBoder");
      infoIcon[1].classList.remove("infoBoder");
      infoIcon[2].classList.add("infoBoder");
    }
    courseOfMeeting = clickColorBlue[2].textContent;
  });
  clickColorBlue[3].addEventListener("click", function () {
    clickColorBlue[0].classList.remove("courseColor");
    clickColorBlue[1].classList.remove("courseColor");
    clickColorBlue[2].classList.remove("courseColor");
    clickColorBlue[3].classList.add("courseColor");
    meetinPurposeTracker = 1;

    for (let k = 0; k < infoIcon.length; k++) {
      infoIcon[0].classList.remove("infoBoder");
      infoIcon[1].classList.remove("infoBoder");
      infoIcon[2].classList.remove("infoBoder");
      infoIcon[3].classList.add("infoBoder");
    }
    courseOfMeeting = clickColorBlue[3].textContent;
  });
}
// TIME COLOR SELECTION
const timeColor = document.querySelectorAll(".time");
for (let i = 0; i < 1; i++) {
  timeColor[0].addEventListener("click", function () {
    timeColor[0].classList.add("courseColor");
    timeColor[1].classList.remove("courseColor");
    timeColor[2].classList.remove("courseColor");
    timeColor[3].classList.remove("courseColor");
    timeColor[4].classList.remove("courseColor");
    timeColor[5].classList.remove("courseColor");
    timeSetter = timeColor[0].textContent;
    console.log(timeSetter);
    console.log("llo");
    timeTRacker = 1;
  });
  timeColor[1].addEventListener("click", function () {
    timeColor[0].classList.remove("courseColor");
    timeColor[1].classList.add("courseColor");
    timeColor[2].classList.remove("courseColor");
    timeColor[3].classList.remove("courseColor");
    timeColor[4].classList.remove("courseColor");
    timeColor[5].classList.remove("courseColor");
    timeSetter = timeColor[1].textContent;
    console.log(timeSetter);
    console.log("llo");
    timeTRacker = 1;
  });
  timeColor[2].addEventListener("click", function () {
    timeColor[0].classList.remove("courseColor");
    timeColor[1].classList.remove("courseColor");
    timeColor[2].classList.add("courseColor");
    timeColor[3].classList.remove("courseColor");
    timeColor[4].classList.remove("courseColor");
    timeColor[5].classList.remove("courseColor");
    timeSetter = timeColor[2].textContent;
    console.log(timeSetter);
    console.log("llo");
    timeTRacker = 1;
  });
  timeColor[3].addEventListener("click", function () {
    timeColor[0].classList.remove("courseColor");
    timeColor[1].classList.remove("courseColor");
    timeColor[2].classList.remove("courseColor");
    timeColor[3].classList.add("courseColor");
    timeColor[4].classList.remove("courseColor");
    timeColor[5].classList.remove("courseColor");
    timeSetter = timeColor[3].textContent;
    console.log(timeSetter);
    console.log("llo");
    timeTRacker = 1;
  });
  timeColor[4].addEventListener("click", function () {
    timeColor[0].classList.remove("courseColor");
    timeColor[1].classList.remove("courseColor");
    timeColor[2].classList.remove("courseColor");
    timeColor[3].classList.remove("courseColor");
    timeColor[4].classList.add("courseColor");
    timeColor[5].classList.remove("courseColor");
    timeSetter = timeColor[4].textContent;
    console.log(timeSetter);
    console.log("llo");
    timeTRacker = 1;
  });
  timeColor[5].addEventListener("click", function () {
    timeColor[0].classList.remove("courseColor");
    timeColor[1].classList.remove("courseColor");
    timeColor[2].classList.remove("courseColor");
    timeColor[3].classList.remove("courseColor");
    timeColor[4].classList.remove("courseColor");
    timeColor[5].classList.add("courseColor");
    timeSetter = timeColor[5].textContent;
    console.log(timeSetter);
    console.log("llo");
    timeTRacker = 1;
  });
}
// NOTIFICATION ANIMATION REMOVAL
const removeAnimation = document.querySelector(".notification");
const droDownicon = document.querySelector(".user-drop-down");
const droDownMenuAnimation = document.querySelector(".user-drop-down-layer");
let overlayAdder = 1;
const dropUpicon = document.querySelector(".user-drop-up");
const overlays = document.querySelector(".ovelay");

dropUpicon.classList.add("hidder");
overlays.classList.add("hidder");
droDownMenuAnimation.classList.add("hidder");
droDownicon.classList.remove("hidder");
droDownicon.addEventListener("click", function () {
  droDownicon.classList.add("hidder");
  droDownMenuAnimation.classList.remove("hidder");
  overlayAdder = overlayAdder + 1;
  removeAnimation.classList.toggle("fa-beat-fade");
  dropUpicon.classList.remove("hidder");
  console.log(drop);
  overlays.classList.remove("hidder");

  if (overlayAdder === 2) {
    overlays.classList.remove("hidder");
  }
});
dropUpicon.addEventListener("click", function () {
  dropUpicon.classList.add("hidder");
  droDownicon.classList.remove("hidder");
  droDownMenuAnimation.classList.remove("userAnimation");
  overlayAdder = overlayAdder + 1;
  removeAnimation.classList.toggle("fa-beat-fade");
  droDownMenuAnimation.classList.add("hidder");

  overlays.classList.re("hidder");

  console.log(drop);

  if (overlayAdder === 2) {
    overlays.classList.remove("hidder");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    droDownMenuAnimation.classList.remove("userAnimation");
    ovelayTwo.classList.add("hidder");
    console.log("oo");
    overlays.classList.add("hidder");
    overlayAdder = 1;
  }
});
overlays.addEventListener("click", function () {
  droDownMenuAnimation.classList.remove("userAnimation");
  overlays.classList.add("hidder");
  overlayAdder = 1;
});
// LOGING IN VARIABLES
const cta = document.querySelector(".form");
const loginPAge = document.querySelector(".login-page");
const loginPAgedata = document.querySelector(".student-login-page");
const logout = document.querySelector(".user-DD4");

logout.addEventListener("click", function () {
  loginPAge.classList.remove("hidder");
  loginPAgedata.classList.add("hidder");
  droDownMenuAnimation.classList.add("hidder");
  droDownicon.classList.remove("hidder");
  dropUpicon.classList.add("hidder");
});
cta.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.querySelector("#userName").value;
  console.log(username);
  const password = document.querySelector("#Password").value;
  console.log(password);
  if (username === "admin" && password === "test") {
    console.log("lo");
    loginPAge.classList.add("hidder");
    loginPAgedata.classList.remove("hidder");
  }
});
// if (!username) {
// }
//FAQ VARIABLES
const faqIconDown1 = document.querySelector(".faq-down-icon1");
const faqIconDown2 = document.querySelector(".faq-down-icon2");
const faqIconDown3 = document.querySelector(".faq-down-icon3");
const dsofFaqIconDown1 = document.querySelector(".dso-faq-down-icon1");
const dsofFaqIconDown2 = document.querySelector(".dso-faq-down-icon2");
const dsofFaqIconDown3 = document.querySelector(".dso-faq-down-icon3");
const faq = document.querySelectorAll(".faq-header-con");
const answeCon0 = document.querySelector(".faq-answer-con1");
const answeCon1 = document.querySelector(".faq-answer-con2");
const answeCon2 = document.querySelector(".faq-answer-con3");

// DSO FAQ SECTION
const dsoFaqIconDown1 = document.querySelector(".dso-faq-down-icon1");
const dsoFaqIconDown2 = document.querySelector(".dso-faq-down-icon2");
const dsoFaqIconDown3 = document.querySelector(".dso-faq-down-icon3");
const dsoFaq = document.querySelectorAll(".dso-faq-header-con");
const dsoAnsweCon0 = document.querySelector(".dso-faq-answer-cons1");
const dsoAnsweCon1 = document.querySelector(".dso-faq-answer-cons2");
const dsoAnsweCon2 = document.querySelector(".dso-faq-answer-cons3");
// const faqIconRotate = document.querySelector(".faq-down-icon1Animation ")
for (let i = 0; i < faq.length; i++) {
  faq[0].addEventListener("click", function () {
    console.log("worko");
    answeCon0.classList.toggle("expander");
    faqIconDown1.classList.toggle("faq-down-icon1Animation");
  });
  faq[1].addEventListener("click", function () {
    console.log("worko");
    answeCon1.classList.toggle("expander");
    faqIconDown2.classList.toggle("faq-down-icon1Animation");
  });
  faq[2].addEventListener("click", function () {
    console.log("worko");
    answeCon2.classList.toggle("expander");
    faqIconDown3.classList.toggle("faq-down-icon1Animation");
  });
}
// DSO FAQS SECTIONS
for (let i = 0; i < dsoFaq.length; i++) {
  dsoFaq[0].addEventListener("click", function () {
    console.log("hh");
    dsoAnsweCon0.classList.toggle("expander");
    dsoFaqIconDown1.classList.toggle("faq-down-icon1Animation");
  });
  dsoFaq[1].addEventListener("click", function () {
    console.log("hh");
    dsoAnsweCon1.classList.toggle("expander");
    dsofFaqIconDown2.classList.toggle("faq-down-icon1Animation");
  });
  dsoFaq[2].addEventListener("click", function () {
    console.log("hh");
    dsoAnsweCon2.classList.toggle("expander");
    dsofFaqIconDown3.classList.toggle("faq-down-icon1Animation");
  });
}
const dashBoardNav1 = document.querySelector(".dash-board-nav-links1");
const dashBoardNav2 = document.querySelector(".dash-board-nav-links2");
const dashBoardNav3 = document.querySelector(".dash-board-nav-links3");
const dashBoardNav4 = document.querySelector(".dash-board-nav-links4");
const dashBoardNav5 = document.querySelector(".dash-board-nav-links5");
const dashBoardNav6 = document.querySelector(".dash-board-nav-links6");
const dashBoardNav7 = document.querySelector(".dash-board-nav-links7");

// PAGE HIDDER VARIBLE
const dashBoardDataPage1 = document.querySelector(".overview-page-dataPage1");
const dashBoardDataPage2 = document.querySelector(".overview-page-dataPage2");
const dashBoardDataPage3 = document.querySelector(".overview-page-dataPage3");
const dashBoardDataPage4 = document.querySelector(".overview-page-dataPage4");
const dashBoardDataPage5 = document.querySelector(".overview-page-dataPage5");
const dashBoardDataPage6 = document.querySelector(".overview-page-dataPage6");
const dashBoardDataPage7 = document.querySelector(".overview-page-dataPage7");
// PREVIEW TAG HIDDER VARIBLE
const previewTagOverview = document.querySelector(".personal-detail1");
// PROFILE EDITOR VARIABLE
const editor = document.querySelector(".personal-detail-icon-con");

// PAGE HIDDER INITIAL STATE
dashBoardDataPage2.classList.add("hidder");
dashBoardDataPage3.classList.add("hidder");
dashBoardDataPage4.classList.add("hidder");
dashBoardDataPage5.classList.add("hidder");
dashBoardDataPage6.classList.add("hidder");
dashBoardDataPage7.classList.add("hidder");
// HIGHLIGTER INITIAL STATE
dashBoardHighlighter2.classList.add("hidder");
dashBoardHighlighter3.classList.add("hidder");
dashBoardHighlighter4.classList.add("hidder");
dashBoardHighlighter5.classList.add("hidder");
dashBoardHighlighter6.classList.add("hidder");
dashBoardHighlighter7.classList.add("hidder");
// PROFILE EDITOR
editor.classList.remove("hidder");
//DASH BOARD EVENT LISTENERS
dashBoardNav1.addEventListener("click", function () {
  console.log("Highlight Switch is working");
  dashBoardHighlighter1.classList.remove("hidder");
  dashBoardHighlighter2.classList.add("hidder");
  dashBoardHighlighter3.classList.add("hidder");
  dashBoardHighlighter4.classList.add("hidder");
  dashBoardHighlighter5.classList.add("hidder");
  dashBoardHighlighter6.classList.add("hidder");
  dashBoardHighlighter7.classList.add("hidder");
  // DASH BOARD DATA PAGE
  dashBoardDataPage1.classList.remove("hidder");
  dashBoardDataPage2.classList.add("hidder");
  dashBoardDataPage3.classList.add("hidder");
  dashBoardDataPage4.classList.add("hidder");
  dashBoardDataPage5.classList.add("hidder");
  dashBoardDataPage6.classList.add("hidder");
  dashBoardDataPage7.classList.add("hidder");
  //PAGE PREVIEW TAG
  previewTagOverview.textContent = "Personal Details";
  //ADDING PAGE PREVIEW TAG BACK
  previewTagOverview.classList.remove("hidder");
  // PROFILE EDITOR
  editor.classList.remove("hidder");
});
dashBoardNav2.addEventListener("click", function () {
  console.log("Highlight Switch is working");
  dashBoardHighlighter1.classList.add("hidder");
  dashBoardHighlighter2.classList.remove("hidder");
  dashBoardHighlighter3.classList.add("hidder");
  dashBoardHighlighter4.classList.add("hidder");
  dashBoardHighlighter5.classList.add("hidder");
  dashBoardHighlighter6.classList.add("hidder");
  dashBoardHighlighter7.classList.add("hidder");
  // DASH BOARD DATA PAGE
  dashBoardDataPage1.classList.add("hidder");
  dashBoardDataPage2.classList.remove("hidder");
  dashBoardDataPage3.classList.add("hidder");
  dashBoardDataPage4.classList.add("hidder");
  dashBoardDataPage5.classList.add("hidder");
  dashBoardDataPage6.classList.add("hidder");
  dashBoardDataPage7.classList.add("hidder");
  //PAGE PREVIEW TAG
  previewTagOverview.textContent = "Screening";
  //ADDING PAGE PREVIEW TAG BACK
  previewTagOverview.classList.remove("hidder");
  // PROFILE EDITOR
  editor.classList.add("hidder");
});
dashBoardNav3.addEventListener("click", function () {
  console.log("Highlight Switch is working");
  dashBoardHighlighter1.classList.add("hidder");
  dashBoardHighlighter2.classList.add("hidder");
  dashBoardHighlighter3.classList.remove("hidder");
  dashBoardHighlighter4.classList.add("hidder");
  dashBoardHighlighter5.classList.add("hidder");
  dashBoardHighlighter6.classList.add("hidder");
  dashBoardHighlighter7.classList.add("hidder");
  // DASH BOARD DATA PAGE
  dashBoardDataPage1.classList.add("hidder");
  dashBoardDataPage2.classList.add("hidder");
  dashBoardDataPage3.classList.remove("hidder");
  dashBoardDataPage4.classList.add("hidder");
  dashBoardDataPage5.classList.add("hidder");
  dashBoardDataPage6.classList.add("hidder");
  dashBoardDataPage7.classList.add("hidder");
  //PAGE PREVIEW TAG
  previewTagOverview.textContent = "Verification";
  //ADDING PAGE PREVIEW TAG BACK
  previewTagOverview.classList.remove("hidder");
  // PROFILE EDITOR
  editor.classList.add("hidder");
});
dashBoardNav4.addEventListener("click", function () {
  console.log("Highlight Switch is working");
  dashBoardHighlighter1.classList.add("hidder");
  dashBoardHighlighter2.classList.add("hidder");
  dashBoardHighlighter3.classList.add("hidder");
  dashBoardHighlighter4.classList.remove("hidder");
  dashBoardHighlighter5.classList.add("hidder");
  dashBoardHighlighter6.classList.add("hidder");
  dashBoardHighlighter7.classList.add("hidder");
  // DASH BOARD DATA PAGE
  dashBoardDataPage1.classList.add("hidder");
  dashBoardDataPage2.classList.add("hidder");
  dashBoardDataPage3.classList.add("hidder");
  dashBoardDataPage4.classList.remove("hidder");
  dashBoardDataPage5.classList.add("hidder");
  dashBoardDataPage6.classList.add("hidder");
  dashBoardDataPage7.classList.add("hidder");
  //PAGE PREVIEW TAG
  previewTagOverview.textContent = "Emplyement Status";
  //ADDING PAGE PREVIEW TAG BACK
  previewTagOverview.classList.remove("hidder");
  // PROFILE EDITOR
  editor.classList.add("hidder");
});
dashBoardNav5.addEventListener("click", function () {
  console.log("Highlight Switch is working");
  dashBoardHighlighter1.classList.add("hidder");
  dashBoardHighlighter2.classList.add("hidder");
  dashBoardHighlighter3.classList.add("hidder");
  dashBoardHighlighter4.classList.add("hidder");
  dashBoardHighlighter5.classList.remove("hidder");
  dashBoardHighlighter6.classList.add("hidder");
  dashBoardHighlighter7.classList.add("hidder");
  // DASH BOARD DATA PAGE
  dashBoardDataPage1.classList.add("hidder");
  dashBoardDataPage2.classList.add("hidder");
  dashBoardDataPage3.classList.add("hidder");
  dashBoardDataPage4.classList.add("hidder");
  dashBoardDataPage5.classList.remove("hidder");
  dashBoardDataPage6.classList.add("hidder");
  dashBoardDataPage7.classList.add("hidder");
  //PAGE PREVIEW TAG
  previewTagOverview.textContent = "Payroll";
  //ADDING PAGE PREVIEW TAG BACK
  previewTagOverview.classList.remove("hidder");
  // PROFILE EDITOR

  editor.classList.add("hidder");
});
dashBoardNav6.addEventListener("click", function () {
  console.log("Highlight Switch is working");
  dashBoardHighlighter1.classList.add("hidder");
  dashBoardHighlighter2.classList.add("hidder");
  dashBoardHighlighter3.classList.add("hidder");
  dashBoardHighlighter4.classList.add("hidder");
  dashBoardHighlighter5.classList.add("hidder");
  dashBoardHighlighter6.classList.remove("hidder");
  dashBoardHighlighter7.classList.add("hidder");
  // DASH BOARD DATA PAGE
  dashBoardDataPage1.classList.add("hidder");
  dashBoardDataPage2.classList.add("hidder");
  dashBoardDataPage3.classList.add("hidder");
  dashBoardDataPage4.classList.add("hidder");
  dashBoardDataPage5.classList.add("hidder");
  dashBoardDataPage6.classList.remove("hidder");
  dashBoardDataPage7.classList.add("hidder");
  //PAGE PREVIEW TAG
  previewTagOverview.textContent = "FAQs";
  //ADDING PAGE PREVIEW TAG BACK
  previewTagOverview.classList.remove("hidder");

  // PROFILE EDITOR
  editor.classList.add("hidder");
});
dashBoardNav7.addEventListener("click", function () {
  console.log("Highlight Switch is working");
  dashBoardHighlighter1.classList.add("hidder");
  dashBoardHighlighter2.classList.add("hidder");
  dashBoardHighlighter3.classList.add("hidder");
  dashBoardHighlighter4.classList.add("hidder");
  dashBoardHighlighter5.classList.add("hidder");
  dashBoardHighlighter6.classList.add("hidder");
  dashBoardHighlighter7.classList.remove("hidder");
  // DASH BOARD DATA PAGE
  dashBoardDataPage1.classList.add("hidder");
  dashBoardDataPage2.classList.add("hidder");
  dashBoardDataPage3.classList.add("hidder");
  dashBoardDataPage4.classList.add("hidder");
  dashBoardDataPage5.classList.add("hidder");
  dashBoardDataPage6.classList.add("hidder");
  dashBoardDataPage7.classList.remove("hidder");
  //REMOVING PAGE PREVIEW TAG
  previewTagOverview.classList.add("hidder");
  // PROFILE EDITOR
  editor.classList.add("hidder");
});
for (let i = 0; i < messageBox.length; i++) {
  messageBox[0].addEventListener("click", function () {
    messageBox[0].classList.add("whiteBackground");
    messageBox[1].classList.remove("whiteBackground");
    messageBox[2].classList.remove("whiteBackground");
  });
  messageBox[1].addEventListener("click", function () {
    messageBox[0].classList.remove("whiteBackground");
    messageBox[1].classList.add("whiteBackground");
    messageBox[2].classList.remove("whiteBackground");
  });
  messageBox[2].addEventListener("click", function () {
    messageBox[0].classList.remove("whiteBackground");
    messageBox[1].classList.remove("whiteBackground");
    messageBox[2].classList.add("whiteBackground");
  });
}
// PAGINATION CLICK EVENTS
for (let i = 0; i < pagination.length; i++) {
  pagination[0].addEventListener("click", function () {
    pagination[0].classList.add("paginationClicked");
    pagination[1].classList.remove("paginationClicked");
    pagination[2].classList.remove("paginationClicked");
    pagination[3].classList.remove("paginationClicked");
    pagination[4].classList.remove("paginationClicked");
    pagination[5].classList.remove("paginationClicked");
    pagination[6].classList.remove("paginationClicked");
    pagination[7].classList.remove("paginationClicked");
    pagination[8].classList.remove("paginationClicked");
    pagination[9].classList.remove("paginationClicked");
  });
  pagination[1].addEventListener("click", function () {
    pagination[0].classList.remove("paginationClicked");
    pagination[1].classList.add("paginationClicked");
    pagination[2].classList.remove("paginationClicked");
    pagination[3].classList.remove("paginationClicked");
    pagination[4].classList.remove("paginationClicked");
    pagination[5].classList.remove("paginationClicked");
    pagination[6].classList.remove("paginationClicked");
    pagination[7].classList.remove("paginationClicked");
    pagination[8].classList.remove("paginationClicked");
    pagination[9].classList.remove("paginationClicked");
  });
  pagination[2].addEventListener("click", function () {
    pagination[0].classList.remove("paginationClicked");
    pagination[1].classList.remove("paginationClicked");
    pagination[2].classList.add("paginationClicked");
    pagination[3].classList.remove("paginationClicked");
    pagination[4].classList.remove("paginationClicked");
    pagination[5].classList.remove("paginationClicked");
    pagination[6].classList.remove("paginationClicked");
    pagination[7].classList.remove("paginationClicked");
    pagination[8].classList.remove("paginationClicked");
    pagination[9].classList.remove("paginationClicked");
  });
  pagination[3].addEventListener("click", function () {
    pagination[0].classList.remove("paginationClicked");
    pagination[1].classList.remove("paginationClicked");
    pagination[2].classList.remove("paginationClicked");
    pagination[3].classList.add("paginationClicked");
    pagination[4].classList.remove("paginationClicked");
    pagination[5].classList.remove("paginationClicked");
    pagination[6].classList.remove("paginationClicked");
    pagination[7].classList.remove("paginationClicked");
    pagination[8].classList.remove("paginationClicked");
    pagination[9].classList.remove("paginationClicked");
  });
  pagination[4].addEventListener("click", function () {
    pagination[0].classList.remove("paginationClicked");
    pagination[1].classList.remove("paginationClicked");
    pagination[2].classList.remove("paginationClicked");
    pagination[3].classList.remove("paginationClicked");
    pagination[4].classList.add("paginationClicked");
    pagination[5].classList.remove("paginationClicked");
    pagination[6].classList.remove("paginationClicked");
    pagination[7].classList.remove("paginationClicked");
    pagination[8].classList.remove("paginationClicked");
    pagination[9].classList.remove("paginationClicked");
  });
}
// JOB MOODAL WINDOW
for (let i = 0; i < jobMessageContainer.length; i++) {
  jobMessageContainer[i].addEventListener("click", function () {
    ovelayTwo.classList.remove("hidder");
    bookingSubmitionCon.classList.add("hidder");
    bookingCon.classList.add("hidder");
    jobsInfoModal.classList.remove("hidder");
  });
}
for (let i = 0; i < cancelIcon.length; i++) {
  cancelIcon[i].addEventListener("click", function () {
    ovelayTwo.classList.add("hidder");
    jobsInfoModal.classList.add("hidder");
  });
}
