import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Profile() {
    const session = await getServerSession(authConfig);

    return (
        <div>
            <div>Profile of {session?.user?.name}</div>
            {session?.user?.image && (
                <img src={session.user.image} alt="" />
            )}
        </div>
    )
}
