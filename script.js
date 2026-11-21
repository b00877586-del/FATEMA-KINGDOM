const door = document.getElementById("door");
const openButton = document.getElementById("openDoor");

const entrance = document.getElementById("entrance");
const kingdom = document.getElementById("kingdom");

function openKingdom() {

    // فتح الباب
    door.classList.add("open");

    // تغيير لون الشاشة تدريجيًا
    entrance.style.transition = "opacity 1.5s ease";

    // الانتقال إلى عالم فاطمة
    setTimeout(() => {

        entrance.style.opacity = "0";

        setTimeout(() => {

            entrance.classList.remove("active");
            kingdom.classList.add("active");

        }, 1500);

    }, 1200);

}

// فتح الباب عند الضغط عليه أو على الزر
door.addEventListener("click", openKingdom);
openButton.addEventListener("click", openKingdom);
