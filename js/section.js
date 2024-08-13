
let elMain = document.querySelector(".main")

let elMainContainer = document.createElement("div") // container
let elStrong = document.createElement("p") //main__strong
let elTitleWrapper = document.createElement("div") // main__title-wrapper
let elTitle = document.createElement("p") //main__title
let elTextWrapper = document.createElement("div") // main__text-wrapper
let elText = document.createElement("p") // main__text
let elLink = document.createElement("a") // main__link

elMainContainer.className ="container w-[1280px] mx-auto px-[20px]"
elStrong.className = "main__strong text-center text-[#1463FF] font-[700] text-[14px] leading-[24px] mb-[12px]"
elStrong.textContent = "COLLECT FORM SUBMISSIONS"

elTitleWrapper.className = "main__title-wrapper w-[720px] mx-auto text-center text-[#0E0B3D] font-[400] text-[54px] leading-[72px] mb-[14px]"
elTitle.className = "main__title"
elTitle.textContent = "Get emails and messages from your HTML form"

elTextWrapper.className= "main__text-wrapper w-[655px] mx-auto text-center text-[#0E0B3D] font-[400] text-[17px] leading-[36px] mb-[68px]"
elText.className = "main__text"
elText.textContent = "Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps."

elLink.className = "main__link inline-block ml-[500px] text-center rounded-[50px] bg-[#0E0B3D] w-[143px]  py-[12px] text-[#FFFFFF] font-[400] text-[14px] leading-[24px]"
elLink.textContent = "Get Started"
elLink.href ="/"


elMain.appendChild(elMainContainer)
elMainContainer.append(elStrong, elTitleWrapper, elTextWrapper, elLink)
elTitleWrapper.appendChild(elTitle)
elTextWrapper.appendChild(elText)
