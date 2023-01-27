/* eslint-disable prettier/prettier */
import {IsNotEmpty, Length} from 'class-validator';
export class CreateTeamMemberBody {
    @IsNotEmpty()
    @Length(5, 100)
    name: string;
    @IsNotEmpty({
        message: 'the member function should not be empty.'
    })
    function: string;
}