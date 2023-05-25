import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try{
        console.log('In post request!')
        const body = await request.json();
        const {email, name, password} = body;
        //Error Handling
        if(!email || !name || !password) {
            return new NextResponse('Information incomplete', {status:400})
        }
        //Password encryption
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({data:{email, name, hashedPassword}});

        return NextResponse.json(user);
        
    } catch (error: any) {
        console.log(error, 'Registration error!')
        return new NextResponse('Internal Error', {status:500})
    }

}