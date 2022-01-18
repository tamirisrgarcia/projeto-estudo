import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(email: string)  {
    const [user, dominio] = email.split("@");
    const initial = user[0];
    const obfs = '*'.repeat(user.length - 1);

    return `${initial}${obfs}@${dominio}`;
  }

}
