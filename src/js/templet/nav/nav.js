/*
import {load} from '../../storage/load'

export const templetNav = () => {
    const userData = load('userData')
    // Select Element 
        // Top Navigation 
            const top = document.querySelector('#nav--top')
        // Bottom Navigation 
            const bot = document.querySelector('#nav-bot')
    // Creat Elelemt 
        // Top Navigation 
            // Top Container
                const topCon = document.createElement('div')
            // Left 
                // container 
                    const leftCon = document.createElement('div')
                // Register Button 
                    const regBtn = document.createElement('button')
                // Profile container 
                    const proCon = document.createElement('div')
                // Profile image 
                    const proImg = document.createElement('img')
                // profile Text con
                    const protexCon = document.createElement('div')
                        
                // profile Name 
                    const proName = document.createElement('small')
                // Profile Coins
                    const proCoins = document.createElement('small')

            // Logo
                // Container 
                    const logoCon = document.createElement('div')
                // Image 
                    //const logoImg = document.createElement('img')
                // Logo text
                    //const logoText = document.createElement('h4')
            // Right 
                // Container
                    const rightCon = document.createElement('div')
                // Logout Button
                    const logoutBtn = document.createElement('button')
                    // Icon Logout 
                        const iconLogout = document.createElement('i')
                // Login Button 
                    const loginBtn = document.createElement('button')
                // Icon Login
                    const iconLogin = document.createElement('i')
        // Button Navigation
            // Container 
                const botCon = document.createElement('div')
            // Home Button
                const homeBtn = document.createElement('button')
                // Home Icon
                    const homeIcon = document.createElement('i')
            // Search Button 
                const searchBtn = document.createElement('button')
                // Search Icon
                    const searchIcon = document.createElement('i')
            // Add Button 
                const addBtn = document.createElement('Button')
                // Add Icon 
                    const addIcon = document.createElement('i')
            // Filter Button
                const filterBtn = document.createElement('button')
                    // Filter Icon 
                        const filterIcon = document.createElement('i')
            // Users Button
                const usersBtn = document.createElement('button')
                    // Users Icon
                        const usersIcon = document.createElement('i')
    // Set Attribut
        // Top
            // Top Container 
                topCon.setAttribute('id', 'nav--top__container')
            // Left Container      
                leftCon.setAttribute('id', 'nav--top__left')
            // Logo Container
                logoCon.setAttribute('id', 'nav--top__logo')
            // Right Container 
                rightCon.setAttribute('id', 'nav--top__right')
            // Register Button 
                // ID 
                    regBtn.setAttribute('id', 'btn--regUser')
                // Type 
                    regBtn.setAttribute('type', 'button')
            // Profile Container 
                // ID 
                    proCon.setAttribute('id', 'btn-profile')
            // Logout Button 
                // ID
                    logoutBtn.setAttribute('id', 'btn--logout')
                // Type 
                    logoutBtn.setAttribute('type', 'button')
            // Login Button 
                // ID
                    loginBtn.setAttribute('id', 'btn--login')
                // Type 
                    loginBtn.setAttribute('type', 'button')
                // Data Toggle 
                    loginBtn.setAttribute('data-toggle', 'modal')
                // Data Target 
                    loginBtn.setAttribute('data-target', '#modal-login')
        // Bottom
            // Bottom Container 
                botCon.setAttribute('id', 'nav--bot__container')
            // Home Button
                // ID 
                    homeBtn.setAttribute('id', 'btn--home')
                // Type 
                    homeBtn.setAttribute('type', 'button')
            // Search Button 
                // ID 
                    searchBtn.setAttribute('id', 'btn--search')
                // Type 
                    searchBtn.setAttribute('type', 'button')
            // Add Button 
                // ID 
                    addBtn.setAttribute('id', 'btn-add')
                // Type 
                    addBtn.setAttribute('type', 'button')
            // Users Button
                // ID 
                    usersBtn.setAttribute('id', 'btn-users')
                // Type 
                    usersBtn.setAttribute('type', 'button')


    // Set Class
        // Top 
            // Container
                topCon.classList.add('d-flex','w-75', 'justify-content-lg-between')
            // Left 
                // register Button 
                    regBtn.classList.add('btn', 'btn-small', 'btn-primary')
                // Icon Login 
                    iconLogin.classList.add('fa-solid', 'fa-arrow-right-to-bracket')
                // Icon Logout
                    iconLogout.classList.add('fa-solid', 'fa-right-to-bracket' )
                // profile
                    // Profile Container 
    
                    proCon.classList.add('d-flex', 'gap-2', 'justify-content-center', 'align-items-center')
                    // Image 
                    proImg.classList.add('rounded-circle')
                    // Profile Text Container
                    protexCon.classList.add('d-flex', 'flex-column')
                    // Name 
                    proName.classList.add('text-white', 'attribute')
                    proCoins.classList.add('text-white')
            // Right 
                // Login Button 
                    loginBtn.classList.add('btn')
                // Logout Button 
                    logoutBtn.classList.add('btn')
            
        // Bottom 
            // Container 
                botCon.classList.add('d-flex', 'w-75', 'justify-content-lg-between')
            // Home Button 
                homeBtn.classList.add('btn')
            // Home Icon 
                homeIcon.classList.add('fa-solid', 'fa-house')
            // Search Button 
                searchBtn.classList.add('btn')
            // Search Icon
                searchIcon.classList.add('fa-solid', 'fa-magnifying-glass')
            // Add Button 
                addBtn.classList.add('btn')
            // Add Icon
                addIcon.classList.add('fa-solid', 'fa-plus')
            // Filter Button 
                filterBtn.classList.add('btn')
            // Filter Icon
                filterIcon.classList.add('fa-solid', 'fa-filter')
            // Users Button 
                usersBtn.classList.add('btn')
            // Users Icon 
                usersIcon.classList.add('fa-solid', 'fa-users')
    
    // Set Style 
        proImg.style.maxWidth = '45px';
        proImg.style.maxHeight = '45px';
    // Set Text
        // Top 
            // Register Button 
                regBtn.innerText = 'Register'


    if(userData){
        proName.innerText = userData.name
        proCoins.innerText = userData.credits
        if(userData.avatar) {
            proImg.src = userData.avatar
            proImg.alt = `Image of ${userData.name}`
        } else {
            proImg.src = './public/image/default-Profile.png'
            proImg.alt = 'Image of Default profile image'
        }
        // TOP
            // Top Container 
                top.appendChild(topCon)
                // Left Container
                    topCon.appendChild(leftCon)
                    // Profile 
                        leftCon.appendChild(proCon)
                        
                        proCon.appendChild(proImg)
                        proCon.appendChild(protexCon)
    
                        protexCon.appendChild(proName)
                        protexCon.appendChild(proCoins)
                // Mid Container 

                // Rigth Container 
                    topCon.appendChild(rightCon)
                    // Logout Btn
                    rightCon.appendChild(logoutBtn)
                    logoutBtn.appendChild(iconLogout)
        // Bottom 
            // Bottom Container 
                bot.appendChild(botCon)
                // Home Button
                    botCon.appendChild(homeBtn)
                // Home Icon 
                    homeBtn.appendChild(homeIcon)
                // Search Button 
                    botCon.appendChild(searchBtn)
                // Search Icon
                    searchBtn.appendChild(searchIcon)
                // Add Button 
                    botCon.appendChild(addBtn)
                // Add Icon 
                    addBtn.appendChild(addIcon)
                // Filter Button 
                    botCon.appendChild(filterBtn)
                // Filter Icon 
                    filterBtn.appendChild(filterIcon)
                // User Button
                    botCon.appendChild(usersBtn)
                // USers Icon 
                    usersBtn.appendChild(usersIcon)
            
    } else {
        // Logout 
            // Class 
                addBtn.classList.add('disabled')
                usersBtn.classList.add('disabled')
        // TOP
            // Top Container
                top.appendChild(topCon)
                // Left Container
                    topCon.appendChild(leftCon)
                    // Register Button 
                        leftCon.appendChild(regBtn)
                // Logo Container 
                    topCon.appendChild(logoCon)
                // Right Container 
                    topCon.appendChild(rightCon)
                    // Login Button 
                        rightCon.appendChild(loginBtn)
                        // Icon login Button
                            loginBtn.appendChild(iconLogin)
        // Bottom
            // Bottom Container 
                bot.appendChild(botCon)
                // Home Button
                    botCon.appendChild(homeBtn)
                    // Home Icon 
                        homeBtn.appendChild(homeIcon)
                // Search Button 
                    botCon.appendChild(searchBtn)
                    // Search Icon
                        searchBtn.appendChild(searchIcon)
                // Add Button 
                    botCon.appendChild(addBtn)
                    // Add Icon 
                        addBtn.appendChild(addIcon)
                // Filter Button 
                    botCon.appendChild(filterBtn)
                    // Filter Icon 
                        filterBtn.appendChild(filterIcon)
                // User Button
                    botCon.appendChild(usersBtn)
                    // USers Icon 
                    usersBtn.appendChild(usersIcon)
    }

}
*/
