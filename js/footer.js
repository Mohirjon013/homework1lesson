let navStrong = ["Terms of Service", "Privacy Policy"]
let navIcon = ["./images/tw.svg", "./images/facebook.svg", "./images/github.svg"]

let elFoot = document.querySelector(".foot") // foot
let elFooterContainer = document.createElement("div") // container
let elFooter = document.createElement("div") // footer
let elFooterText = document.createElement("p") // footer__text
let elFooterStrongWrapper = document.createElement("div") // footer__strong-wrapper
let elFootWrapper = document.createElement("div") // footer__icon-wrapper

elFooterContainer.className = "container w-[1210px] mx-auto px-[20px]"
elFooter.className = "footer w-[1112px] py-[20px] mb-[32px] bg-[#F7F9FC] flex items-center justify-between rounded-[12px]"
elFooterText.className = "footer__text text-[#535479] font-[400] text-[13px] leading-[24px] ml-[24px]"
elFooterText.textContent = "formcarry. all rights reserved"
elFooterStrongWrapper.className = "footer__strong-wrapper flex items-center gap-[31px]"
navStrong.forEach(item => {
    let elStrong = document.createElement("p")

    elStrong.className = "footer__strong text-[#535479] font-[400] text-[13px] leading-[24px]"    
    elStrong.textContent = item

    elFooterStrongWrapper.appendChild(elStrong)
})
elFootWrapper.className = "footer__icon-wrapper flex items-center gap-[24px] mr-[24px]"

navIcon.forEach(item => {
    let elFootLink = document.createElement("a")
    let elFootIcon = document.createElement("img")

    elFootLink.className = "footer__link"
    elFootLink.href = "/"
    elFootIcon.className = "footer__icon"
    elFootIcon.src = item
    elFootIcon.alt = "footer icon"
    elFootIcon.width = "32"
    elFootIcon.height = "32"

    elFootWrapper.appendChild(elFootLink)
    elFootLink.appendChild(elFootIcon)
})

elFoot.appendChild(elFooterContainer)
elFooterContainer.appendChild(elFooter)
elFooter.append(elFooterText, elFooterStrongWrapper, elFootWrapper)