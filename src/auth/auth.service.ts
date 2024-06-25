import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
    signup() {
        return { msg: 'Hello you are signed up!'}
    }

    signin() {
        return { msg: 'Hello you are signin in!'}
    }
}
