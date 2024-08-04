"use client"
import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/stores/store'
import {fetchAndSetUserStore} from '@/lib/fetchAndSetUserStore'
import { useToast } from '@/components/ui/use-toast'
import apiClient from '@/api-client/apiClient';
import { useRouter } from 'next/navigation'

export default function DashboardLayout({ children }) {
    const { user, update } = useUserStore()
    const router = useRouter()
    useEffect(() => {
        if (!user){ 
            fetchAndSetUserStore(update)
        } else if (user.role !== 'doctor' && user.role !== 'admin') {
            router.push('/404')
        }
    }, [user])
    
  return <section>{children}</section>
}