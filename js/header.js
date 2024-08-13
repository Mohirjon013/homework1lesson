let navbarItems = ["FAQ", "Docs", "Integrations", "Pricing"]


let elHead = document.querySelector(".head")
let elContainer = document.createElement("div") // container
let elHeader = document.createElement("div") // header
let elLogoLink = document.createElement("a") // header__logo-link
let elLogoImg = document.createElement("img") // header__logo-img
let elList = document.createElement("ul") // header__list
let elBtnContant = document.createElement("div") // header__btn-contant
let elHeaderBtn = document.createElement("button") // header__btn
let elHeaderBtn2 = document.createElement("button") // header__btn2

elContainer.className ="container w-[1280px] mx-auto px-[20px]"
elHeader.className = "header py-[32px] flex items-center justify-between rounded-[16px]   shadow-lg"
elLogoLink.className = "header__logo-link inline-block ml-[34px]"
elLogoLink.href = "/"
elLogoImg.className = "header__logo-img"
elLogoImg.src = "./images/logo.svg"
elLogoImg.width = "157"
elLogoImg.height = "24"
elLogoImg.alt = "Site logo"
elList.className = "header__list flex items-center gap-[44px]"

navbarItems.forEach(item => {
    let elHeaderItem = document.createElement("li") // header__item
    let elHeaderLink = document.createElement("a") // header__link

    elHeaderItem.className = "header__item"
    elHeaderLink.className = "header__link text-[#535479] font-[400] text-[13px] leading-[24px] tracking-[0.14px]"
    elHeaderLink.href = "/"
    elHeaderLink.textContent = item

    elList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderLink)

})

elBtnContant.className = "header__btn-contant mr-[34px]"
elHeaderBtn.className = "header__btn w-[67px] py-[4px] text-[#535479] font-[400] text-[13px] leading-[24px] "
elHeaderBtn.textContent = "Login"
elHeaderBtn2.className = "header__btn2 rounded-[40px] bg-[#0E0B3D] w-[100px] py-[7px] text-[#FFFFFF] font-[400] text-[14px] leading-[16.1px] "
elHeaderBtn2.textContent = "Sign up"

elHead.appendChild(elContainer)
elContainer.appendChild(elHeader)
elHeader.append(elLogoLink, elList, elBtnContant)
elLogoLink.appendChild(elLogoImg)
elBtnContant.append(elHeaderBtn ,elHeaderBtn2)
