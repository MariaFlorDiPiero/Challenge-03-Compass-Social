import React from 'react';

function LoginList(){
    
<section class="login">
    <h2>Login</h2>

        <ul class="list">
            <li class="list-item">
                                                
                <input type="email" id="name" name="name" placeholder="Usuário" class="input" />
                <svg class="fa fa-name" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </li>
                      
            <li class="list-item">
                <input type="password" id="password" name="password" placeholder="Senha" class="input" />
                <svg class="fa fa-password" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            </li>

        </ul>

        <button type="submit" class="orange">Logar-se</button>
</section>
}

export default LoginList;