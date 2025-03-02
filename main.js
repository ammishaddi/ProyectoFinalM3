//Users
const users = [
    {name: "Ailsa Martinez", username: "ammishaddi", password: "holis", image: "https://www.mundodeportivo.com/alfabeta/hero/2024/12/esta-fue-la-inspiracion-de-oda-para-crear-a-monkey-d.-luffy.jpg?width=1200"},
    {name: "Invitado", username: "invitado", password: "1234", image: "https://www.clinicas-veterpet.com/wp-content/uploads/2024/02/blog-veterpet-edad-gatitos.jpg"},
    {name: "Usuario anónimo", username: "anónimo", password: "invisible", image: "https://clasicoshispanicos.com/wp-content/uploads/2021/01/siluetagrisanonimo.jpg"}
]

function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage)

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "inicio.html";
    }else{
        error.textContent = "Usuario o contraseña incorrecta"
    }
}