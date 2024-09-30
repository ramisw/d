function toggleDropdown(event) {
    event.preventDefault()
    event.stopPropagation()
    closeAllDropdowns()
    const dropdownContent = event.currentTarget.nextElementSibling
    if (dropdownContent) {
        dropdownContent.classList.toggle('show')
        event.currentTarget.classList.toggle('show')
    }
}

function toggleSubDropdownContent(event) {
    event.preventDefault()
    event.stopPropagation()

    const subDropdownContent = event.currentTarget.nextElementSibling
    if (subDropdownContent) {
        subDropdownContent.classList.toggle('show')
        event.currentTarget.classList.toggle('show')
    }
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-content, .sub-dropdown-content')
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show')
    });

    const buttons = document.querySelectorAll('.dropbtn, .dropdown-content a')
    buttons.forEach(btn => {
        btn.classList.remove('show')
    });
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
        closeAllDropdowns()
    }
})