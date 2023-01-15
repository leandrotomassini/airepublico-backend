import { OAuth2Client } from 'google-auth-library';

import { GOOGLE_CLIENT_ID } from '../global/enviroment';

interface Tiket {
    name: string,
    picture: string,
    email: string,
};

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export async function googleVerify(token = '') {

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID,
    });

    const { name, picture, email } = ticket.getPayload() as Tiket;

    return {
        nombre: name,
        img: picture,
        correo: email
    }
}

