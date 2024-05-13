let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let p = document.querySelectorAll(".p")

const para = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta natus molestiae facere! Ex, atque sequi ipsam delectus rem culpa! Earum quam quo deleniti debitis odit nemo sint quasi? Iste, hic?
Eligendi adipisci nostrum sunt, ab molestiae quas doloremque optio provident facilis rerum odit qui, minus, quod quis voluptate recusandae cumque vitae iste unde suscipit? Ad ut ipsum reiciendis tempore voluptatibus?
Accusamus dolorum nihil ullam sunt, expedita dignissimos hic? Alias modi tempora ipsa consequatur culpa, quos ipsam ea, eligendi veritatis at voluptas minus tempore corrupti ab iure laborum, cum optio? Quaerat.
Deserunt quam corrupti, temporibus eligendi perferendis nostrum quos eius consectetur ad cum consequuntur obcaecati maxime atque voluptatibus facilis qui earum architecto aliquid doloribus quisquam voluptates inventore eos! Nobis, autem alias!
Accusantium tenetur, sit iste soluta laboriosam non, asperiores eligendi excepturi aperiam veniam fuga voluptatem vel ullam saepe harum labore quam. Aut dicta distinctio, voluptates molestias labore ipsa rem consequuntur nulla?
Ut saepe deleniti quae neque laudantium non ex optio at, natus sed reprehenderit, quidem recusandae consequuntur modi iste magni quia molestiae dolorum aliquam quas voluptates adipisci dolore ratione! Cumque, officiis?
Consequatur tempore, vel atque amet asperiores, sapiente, excepturi facilis placeat eius neque molestiae laborum et cumque quisquam architecto sint nisi est deleniti ipsam ratione nemo fugit. Quaerat voluptas tenetur cumque!
Tempora natus soluta maxime consequatur placeat corporis iure nobis at beatae adipisci. Asperiores architecto nostrum quaerat aliquam illum voluptates aspernatur quisquam fugit possimus delectus voluptate, in amet atque vitae non.
Rerum reprehenderit aliquid explicabo quisquam, quo doloribus eveniet aperiam dignissimos. Quasi laudantium doloribus nisi ipsum iusto, provident nihil tenetur voluptate accusamus? Ipsam voluptatibus non enim minus nobis. Ullam, facere quod!
Culpa sequi sed voluptas, quibusdam tempora optio officia aliquam similique pariatur perferendis libero quidem quae voluptatibus laborum consectetur fugit at placeat. Distinctio labore assumenda cum ab quae corrupti, consectetur sunt.`

p.forEach(element => {
    element.textContent = para;
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}