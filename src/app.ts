// ID's
const user = document.getElementById('usuario');
const posts = document.getElementById('posts');
const profile = document.getElementById('profile');
const divPerfil = document.getElementById('divPerfil');
const divPosts = document.getElementById('divPosts');
const arrowLeftUser = document.getElementById('leftUser');
const arrowRightUser = document.getElementById('rightUser');
const arrowLeftPost = document.getElementById('leftPost');
const arrowRightPost = document.getElementById('rightPost');

// Templates
const templateTableU = document.getElementById('template-table-user').content;
const templateTableP = document.getElementById('template-table-posts').content;
const templateTablePr = document.getElementById('template-table-profile').content;

// Fragment
const fragment = document.createDocumentFragment();

// Variables globales
let n = 1; // Para iterar el usuario
let x = 0; // Para iterar los posts

const users = new Users()

