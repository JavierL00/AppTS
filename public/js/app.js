"use strict";
// ID's
var user = document.getElementById('usuario');
var posts = document.getElementById('posts');
var profile = document.getElementById('profile');
var divPerfil = document.getElementById('divPerfil');
var divPosts = document.getElementById('divPosts');
var arrowLeftUser = document.getElementById('leftUser');
var arrowRightUser = document.getElementById('rightUser');
var arrowLeftPost = document.getElementById('leftPost');
var arrowRightPost = document.getElementById('rightPost');
// Templates
var templateTableU = document.getElementById('template-table-user').content;
var templateTableP = document.getElementById('template-table-posts').content;
var templateTablePr = document.getElementById('template-table-profile').content;
// Fragment
var fragment = document.createDocumentFragment();
// Variables globales
var n = 1; // Para iterar el usuario
var x = 0; // Para iterar los posts
var users = new Users();
