import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

export let options ={
    vus:'20',
    duration: '600s',
    iterations: '100'
}

// Configurações
const BASE_URL = 'https://service';
const TOKEN_URL = 'https://sso/auth/realms/intranet/protocol/openid-connect/token';
const CLIENT_ID = 'CLIENT_ID';
const CLIENT_SECRET = 'SECRET';

// Função para obter o token JWT
function getToken() {
    const payload = {
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    };

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    const response = http.post(TOKEN_URL, payload, { headers: headers });
    const token = response.json().access_token;

    check(response, {
        'token generated': (res) => res.status === 200 && token !== undefined,
    });

    return token;
}

// Função principal
export default function () {
    const token = getToken();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const payload = JSON.stringify({
    });

    const response = http.post(BASE_URL, payload, { headers: headers });

    check(response, {
        'status is 200': (res) => res.status === 200,
    });

    sleep(1);
}
