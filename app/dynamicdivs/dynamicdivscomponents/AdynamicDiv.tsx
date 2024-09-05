'use client'
import Section from '@/app/bground/bgroundcomponents/BanimationsB'
import { Container } from '@mui/material'
import React from 'react'

const AdynamicDiv = () => {
    return (
        <div>
            <Container>
                <Section title="Section 1" direction="left" />
                <Section title="Section 2" direction="right" />
                <Section title="Section 3" direction="left" />

            </Container>

        </div>
    )
}

export default AdynamicDiv
